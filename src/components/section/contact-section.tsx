import Link from "next/link";
import { DotBackground } from "@/components/dot-background";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <DotBackground className="h-full w-full" />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-semibold tracking-tighter sm:text-3xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Want to chat? Just message me on{" "}
          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            LinkedIn
          </Link>{" "}
          and I&apos;ll get back to you.
        </p>
      </div>
    </div>
  );
}

