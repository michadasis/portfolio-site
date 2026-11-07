// Project data now lives in the database, fetched via /api/projects.php.
// This file only keeps the shared type definitions.

export interface GitHubLink {
  label: string;
  url: string;
  icon?: "github" | "frontend" | "backend" | "globe";
}

export interface Project {
  name: string;
  icon?: string | null;
  desc: string;
  detailedDesc: string;
  images: string[];
  github: GitHubLink[];
}