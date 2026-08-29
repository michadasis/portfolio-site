#!/usr/bin/env bash
# Fast-forwards the production branch to main and pushes it, which triggers
# the GitHub Actions deploy workflow.
#
#   bash scripts/deploy.sh        prompts before pushing
#   bash scripts/deploy.sh -y     skips the prompt

set -euo pipefail

SOURCE_BRANCH="main"
DEPLOY_BRANCH="production"
REPO_URL="https://github.com/michadasis/portfolio-site"

assume_yes=false
[ "${1:-}" = "-y" ] && assume_yes=true

cd "$(git rev-parse --show-toplevel)"

original_branch="$(git rev-parse --abbrev-ref HEAD)"

# Uncommitted work would be dragged across the branch switch
if [ -n "$(git status --porcelain)" ]; then
  echo "Working tree is not clean. Commit or stash first."
  git status --short
  exit 1
fi

return_to_original() {
  current="$(git rev-parse --abbrev-ref HEAD)"
  [ "$current" != "$original_branch" ] && git checkout --quiet "$original_branch"
}
trap return_to_original EXIT

git fetch --quiet origin

# Publish main first, so production never carries commits main has not pushed
git checkout --quiet "$SOURCE_BRANCH"
git pull --ff-only --quiet
git push --quiet

git checkout --quiet "$DEPLOY_BRANCH"
git pull --ff-only --quiet

if git merge-base --is-ancestor "$SOURCE_BRANCH" "$DEPLOY_BRANCH"; then
  echo "$DEPLOY_BRANCH already matches $SOURCE_BRANCH. Nothing to deploy."
  exit 0
fi

echo "About to deploy these commits:"
echo
git log --oneline --no-decorate "$DEPLOY_BRANCH".."$SOURCE_BRANCH"
echo

if [ "$assume_yes" = false ]; then
  read -r -p "Push to $DEPLOY_BRANCH and go live? [y/N] " reply
  case "$reply" in
    [yY]) ;;
    *) echo "Cancelled."; exit 0 ;;
  esac
fi

# --ff-only fails loudly if someone committed directly to production
git merge "$SOURCE_BRANCH" --ff-only --quiet
git push --quiet

echo
echo "Deployed $(git rev-parse --short HEAD) to $DEPLOY_BRANCH."
echo "Watch the run: $REPO_URL/actions"