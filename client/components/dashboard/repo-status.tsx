import type { IndexStatus, Repository } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function indexStatusLabel(status: IndexStatus) {
  switch (status) {
    case "READY":
      return "Ready";
    case "INDEXING":
      return "Indexing";
    case "FAILED":
      return "Failed";
    default:
      return "Not indexed";
  }
}

export function IndexStatusBadge({
  status,
  className,
}: {
  status: IndexStatus;
  className?: string;
}) {
  const variant =
    status === "READY"
      ? "default"
      : status === "FAILED"
        ? "destructive"
        : status === "INDEXING"
          ? "secondary"
          : "outline";

  return (
    <Badge variant={variant} className={cn(className)}>
      {status === "INDEXING" && (
        <span className="mr-1 size-1.5 animate-pulse rounded-full bg-current" />
      )}
      {indexStatusLabel(status)}
    </Badge>
  );
}

export function languageColor(language: string | null) {
  const map: Record<string, string> = {
    TypeScript: "bg-sky-500",
    JavaScript: "bg-amber-400",
    Java: "bg-orange-500",
    Python: "bg-emerald-500",
    Go: "bg-cyan-500",
    Rust: "bg-orange-700",
    Kotlin: "bg-violet-500",
  };
  return map[language ?? ""] ?? "bg-muted-foreground";
}

export function RepoMeta({ repo }: { repo: Repository }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
      {repo.language && (
        <span className="inline-flex items-center gap-1.5">
          <span
            className={cn("size-2 rounded-full", languageColor(repo.language))}
          />
          {repo.language}
        </span>
      )}
      <span>{repo.defaultBranch}</span>
      {repo.chunkCount > 0 && <span>{repo.chunkCount.toLocaleString()} chunks</span>}
    </div>
  );
}
