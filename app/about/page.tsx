import type { Metadata } from "next";
import Link from "next/link";

// About is part of the home page now. This page only exists so old /about/
// links and bookmarks still land on the About section.
export const metadata: Metadata = {
  robots: { index: false },
};

export default function AboutPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/#about" />
      <p className="min-h-screen bg-black text-green-400 font-mono p-6">
        About moved to{" "}
        <Link href="/#about" className="underline hover:text-green-200">
          the home page
        </Link>
        .
      </p>
    </>
  );
}
