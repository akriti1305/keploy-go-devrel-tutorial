import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/Callout";
import { Step } from "@/components/Step";
import { CodeBlock } from "@/components/CodeBlock";
import React from "react";

function getText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getText).join("");
  if (React.isValidElement(node) && node.props && (node.props as { children?: React.ReactNode }).children) {
    return getText((node.props as { children?: React.ReactNode }).children);
  }
  return "";
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s*—\s*/g, "-")
    .replace(/\s*–\s*/g, "-")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const HEADING_ID_MAP: Record<string, string> = {
  "what-is-keploy": "what-is-keploy",
  "what-we-are-building": "what-we-are-building",
  "prerequisites": "prerequisites",
  "understanding-the-app": "understanding-the-app",
  "what-keploy-generated": "what-keploy-generated",
  "understanding-noise-fields": "understanding-noise-fields",
  "what-keploy-is-doing-behind-the-scenes": "what-keploy-is-doing-behind-the-scenes",
  "troubleshooting": "troubleshooting",
  "conclusion": "conclusion",
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h2: ({ children, id, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      const text = getText(children);
      const slug = slugify(text);
      const headingId = id || HEADING_ID_MAP[slug] || slug;
      return (
        <h2
          id={headingId}
          className={`scroll-mt-24 group relative flex items-center ${className || ""}`}
          {...props}
        >
          <span>{children}</span>
          <a
            href={`#${headingId}`}
            aria-label={`Direct link to ${text}`}
            className="opacity-0 group-hover:opacity-100 text-orange-500 ml-2 no-underline text-base transition-opacity select-none"
          >
            #
          </a>
        </h2>
      );
    },
    h3: ({ children, id, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      const text = getText(children);
      const headingId = id || slugify(text);
      return (
        <h3
          id={headingId}
          className={`scroll-mt-24 group relative flex items-center ${className || ""}`}
          {...props}
        >
          <span>{children}</span>
          <a
            href={`#${headingId}`}
            aria-label={`Direct link to ${text}`}
            className="opacity-0 group-hover:opacity-100 text-orange-500 ml-2 no-underline text-sm transition-opacity select-none"
          >
            #
          </a>
        </h3>
      );
    },
    pre: ({ children, className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
      <pre
        className={`max-w-full overflow-x-auto rounded-xl p-4 bg-gray-950 text-gray-200 text-sm leading-relaxed border border-gray-200 dark:border-gray-800 ${className || ""}`}
        {...props}
      >
        {children}
      </pre>
    ),
    Callout,
    Step,
    CodeBlock,
  };
}

