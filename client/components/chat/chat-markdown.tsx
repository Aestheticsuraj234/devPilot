"use client";

import { code } from "@streamdown/code";
import { Streamdown } from "streamdown";

import { cn } from "@/lib/utils";

import "./chat-markdown.css";
import "streamdown/styles.css";

const streamdownPlugins = { code };

export function ChatMarkdown({
  content,
  isStreaming = false,
  className,
}: {
  content: string;
  isStreaming?: boolean;
  className?: string;
}) {
  return (
    <Streamdown
      className={cn("chat-markdown max-w-none text-sm leading-relaxed", className)}
      mode={isStreaming ? "streaming" : "static"}
      plugins={streamdownPlugins}
      shikiTheme={["github-light", "github-dark"]}
      isAnimating={isStreaming}
    >
      {content}
    </Streamdown>
  );
}
