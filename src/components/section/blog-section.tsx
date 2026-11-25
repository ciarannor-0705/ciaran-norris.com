import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { POSTS } from "@/data/posts";

export default function BlogSection() {
  return (
    <div className="flex flex-col gap-5">
      {POSTS.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group flex w-fit max-w-full flex-col gap-0.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
        >
          <span className="flex items-center gap-2 text-base font-semibold leading-snug">
            {post.title}
            <ArrowUpRight
              className="size-4 flex-none -translate-x-2 translate-y-1.5 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
              aria-hidden
            />
          </span>
          <span className="text-sm tabular-nums text-muted-foreground">
            {post.date}
          </span>
        </Link>
      ))}
    </div>
  );
}
