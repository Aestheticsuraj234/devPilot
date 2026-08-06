"use client";

import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Citation, Repository } from "@/lib/api";

export function citationHref(repo: Repository, citation: Citation) {
  const line =
    citation.startLine != null
      ? `#L${citation.startLine}${
          citation.endLine && citation.endLine !== citation.startLine
            ? `-L${citation.endLine}`
            : ""
        }`
      : "";
  return `https://github.com/${repo.fullName}/blob/${repo.defaultBranch}/${citation.filePath}${line}`;
}

export function CitationChips({
  repo,
  citations,
}: {
  repo: Repository;
  citations: Citation[];
}) {
  if (!citations.length) return null;

  return (
    <div className="flex flex-wrap gap-1.5 pt-1">
      {citations.map((citation, index) => (
        <Badge
          key={`${citation.filePath}-${index}`}
          variant="outline"
          render={
            <a
              href={citationHref(repo, citation)}
              target="_blank"
              rel="noreferrer"
            />
          }
          className="max-w-full gap-1 font-normal"
        >
          <span className="truncate">
            {citation.filePath}
            {citation.startLine != null ? `:${citation.startLine}` : ""}
          </span>
          <ExternalLink className="size-3 opacity-60" />
        </Badge>
      ))}
    </div>
  );
}
