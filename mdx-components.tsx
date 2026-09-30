import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/Callout";
import { Step } from "@/components/Step";
import { CodeBlock } from "@/components/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Callout,
    Step,
    CodeBlock,
  };
}
