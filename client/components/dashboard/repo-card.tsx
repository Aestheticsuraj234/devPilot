"use client";

import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ExternalLink,
  GitBranch,
  Lock,
  MessageSquare,
  RotateCcw,
  Sparkles,
} from "lucide-react";

import { IndexErrorAlert } from "@/components/dashboard/index-error-alert";
import { LanguageBadge } from "@/components/dashboard/language-badge";
import { IndexStatusBadge } from "@/components/dashboard/repo-status";
import { LanguageIcon } from "@/components/icons/language-icon";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";
import { getRepoProgress, useStartIndexing } from "@/hooks/use-repos";
import type { Repository } from "@/lib/api";
import { cn } from "@/lib/utils";

export function RepoCard({ repo }: { repo: Repository }) {
  const router = useRouter();
  const indexMutation = useStartIndexing();
  const isIndexing = repo.indexStatus === "INDEXING" || indexMutation.isPending;
  const isFailed = repo.indexStatus === "FAILED";
  const progress = getRepoProgress(repo);

  function openChat() {
    router.push(`/chat/${repo.id}`);
  }

  function handlePrimary() {
    if (repo.indexStatus === "READY") {
      openChat();
      return;
    }
    indexMutation.mutate(repo.id, {
      onSuccess: () => router.push(`/chat/${repo.id}`),
    });
  }

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-dashed bg-card/80 shadow-md shadow-foreground/5 transition-all",
        isFailed
          ? "border-destructive/30 bg-destructive/2 hover:border-destructive/40"
          : "border-border/80 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-lg hover:shadow-foreground/10"
      )}
    >
      <div className="border-b border-dashed border-border/70 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            <LanguageBadge language={repo.language} showLabel={false} />
            <div className="min-w-0">
              <p className="truncate text-xs text-muted-foreground">{repo.owner}</p>
              <h3 className="truncate font-medium">{repo.name}</h3>
            </div>
          </div>
          <IndexStatusBadge status={repo.indexStatus} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        {!isFailed && (
          <p className="line-clamp-2 min-h-10 text-sm text-muted-foreground">
            {repo.description || "No description provided."}
          </p>
        )}

        {isFailed && repo.description && (
          <p className="line-clamp-1 text-sm text-muted-foreground">
            {repo.description}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-2">
          {repo.isPrivate && (
            <span className="inline-flex items-center gap-1 rounded-full border border-dashed px-2 py-0.5 text-xs text-muted-foreground">
              <Lock className="size-3" />
              Private
            </span>
          )}
          <span className="inline-flex items-center gap-1 rounded-full border border-dashed px-2 py-0.5 text-xs text-muted-foreground">
            <GitBranch className="size-3" />
            {repo.defaultBranch}
          </span>
          {repo.language && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed px-2 py-0.5 text-xs">
              <LanguageIcon language={repo.language} size="sm" />
              {repo.language}
            </span>
          )}
          {repo.chunkCount > 0 && (
            <span
              className={cn(
                "rounded-full border border-dashed px-2 py-0.5 text-xs",
                isFailed
                  ? "border-destructive/20 text-destructive/80"
                  : "text-muted-foreground"
              )}
            >
              {repo.chunkCount.toLocaleString()} chunks
              {isFailed ? " indexed" : ""}
            </span>
          )}
        </div>

        {isIndexing && (
          <div className="space-y-2 rounded-xl border border-dashed bg-muted/30 p-3">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Indexing…</span>
              <span>
                {repo.filesProcessed}/{repo.filesTotal || "?"}
              </span>
            </div>
            <Progress value={progress || 8} />
          </div>
        )}

        {isFailed && repo.errorMessage && (
          <IndexErrorAlert message={repo.errorMessage} />
        )}
      </div>

      <div className="mt-auto flex items-center justify-between gap-2 border-t border-dashed border-border/70 p-4">
        {repo.htmlUrl ? (
          <Button
            variant="ghost"
            size="sm"
            render={<a href={repo.htmlUrl} target="_blank" rel="noreferrer" />}
          >
            <ExternalLink data-icon="inline-start" />
            GitHub
          </Button>
        ) : (
          <span />
        )}

        <div className="flex gap-2">
          {repo.indexStatus === "READY" && (
            <Button variant="secondary" size="sm" onClick={openChat}>
              <MessageSquare data-icon="inline-start" />
              Chat
            </Button>
          )}
          <Button
            size="sm"
            variant={isFailed ? "outline" : "default"}
            className={cn(isFailed && "border-destructive/30 text-destructive hover:bg-destructive/10")}
            disabled={isIndexing}
            onClick={handlePrimary}
          >
            {isIndexing ? (
              <>
                <Spinner data-icon="inline-start" />
                Indexing
              </>
            ) : repo.indexStatus === "READY" ? (
              <>
                Open
                <ArrowRight data-icon="inline-end" />
              </>
            ) : isFailed ? (
              <>
                <RotateCcw data-icon="inline-start" />
                Retry
              </>
            ) : (
              <>
                <Sparkles data-icon="inline-start" />
                Index
              </>
            )}
          </Button>
        </div>
      </div>
    </article>
  );
}
