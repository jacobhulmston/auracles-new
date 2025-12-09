"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Newspaper, ChevronDown, ExternalLink } from "lucide-react";
import { Magnetic } from "@/components/motion-primitives/magnetic";

interface BlogPost {
  title: string;
  description: string;
  url: string;
  date: string;
}

interface BlogPostsDropdownProps {
  blogPosts?: BlogPost[];
}

const defaultBlogPosts: BlogPost[] = [
  {
    title: "The invisible made visible",
    description:
      "A shared framework for AI attribution, fingerprinting & future permissions.",
    url: "/auracles-blog-2.pdf",
    date: "Imogen Heap • 30 May 2025",
  },
  {
    title: "Act now, before AI acts up!",
    description:
      "Are you opt-in or out? The greatest collaboration of all time — featuring ALL of us.",
    url: "https://medium.com/p/e5cb3a6a610a",
    date: "Imogen Heap • 07 Mar 2025",
  },
];

export function BlogPostsDropdown({
  blogPosts = defaultBlogPosts,
}: BlogPostsDropdownProps) {
  const [isBlogPostsExpanded, setIsBlogPostsExpanded] = useState(false);
  const blogPostsRef = useRef<HTMLDivElement>(null);

  // Close blog posts when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        blogPostsRef.current &&
        !blogPostsRef.current.contains(event.target as Node)
      ) {
        setIsBlogPostsExpanded(false);
      }
    }

    if (isBlogPostsExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isBlogPostsExpanded]);

  return (
    <Magnetic>
      <div className="relative" ref={blogPostsRef}>
        <Button
          size="md"
          animated
          variant="activeToggle"
          className="py-5 rounded-full opacity-80 transition-all duration-300 ease-in-out"
          onClick={() => setIsBlogPostsExpanded(!isBlogPostsExpanded)}
        >
          <span className="flex-row items-center gap-1 hidden sm:flex">
            <div className="bg-accent rounded-full py-1 px-2 font-semibold">
              <Newspaper className="inline-block mr-1.5 size-4" />
              Blog post
            </div>
            <span className="font-semibold">
              {isBlogPostsExpanded ? "Close" : "The invisible made visible"}
            </span>
          </span>
          <div className="flex sm:hidden flex-row items-center">
            <div className="bg-accent rounded-full py-1 px-2 font-semibold mr-1">
              <Newspaper className="inline-block mr-1.5 size-4" />
              Blog posts
            </div>
            <span className="font-semibold">(1) New</span>
          </div>
          <ChevronDown
            className={`ml-1 size-3 transition-all duration-300 ease-in-out ${
              isBlogPostsExpanded ? "rotate-180" : ""
            }`}
          />
        </Button>

        {/* Expanded blog posts list */}
        <div
          className={`z-50 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-background border border-border rounded-xl shadow-lg transition-all duration-300 ease-in-out origin-top ${
            isBlogPostsExpanded
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="p-4 space-y-3">
            <div className="text-sm font-semibold text-muted-foreground">
              Recent posts
            </div>
            {blogPosts.map((post, index) => (
              <a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200 group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="font-medium text-sm leading-tight group-hover:text-foreground transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.description}
                    </p>
                    <p className="text-xs text-muted-foreground opacity-70">
                      {post.date}
                    </p>
                  </div>
                  <ExternalLink className="size-3 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Magnetic>
  );
}
