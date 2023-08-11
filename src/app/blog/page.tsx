import type { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my thoughts on software design, architecture, development, and more.",
};

function sortThis(a, b) {
  if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
    return -1;
  }
  return 1;
}

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8">Blog posts</h1>
      {allBlogs.sort(sortThis).map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-row space-x-4">
            <p className="text-neutral-900 tracking-tight underline">
              {post.title}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
