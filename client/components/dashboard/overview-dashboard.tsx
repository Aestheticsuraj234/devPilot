"use client";

import Link from "next/link";
import {
  AlertCircle,
  CheckCircle2,
  FolderGit2,
  LoaderCircle,
  MessageSquareCode,
} from "lucide-react";

import { RepoCard } from "@/components/dashboard/repo-card";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useRepos } from "@/hooks/use-repos";

function StatCard({
  label,
  value,
  hint,
  icon: Icon,
}: {
  label: string;
  value: string | number;
  hint?: string;
  icon: typeof FolderGit2;
}) {
  return (
    <Card size="sm">
      <CardHeader className="pb-0">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardDescription>{label}</CardDescription>
            <CardTitle className="mt-1 text-2xl font-semibold">{value}</CardTitle>
          </div>
          <div className="rounded-lg bg-muted p-2 text-muted-foreground">
            <Icon className="size-4" />
          </div>
        </div>
      </CardHeader>
      {hint ? (
        <CardContent className="pt-0 text-xs text-muted-foreground">
          {hint}
        </CardContent>
      ) : null}
    </Card>
  );
}

export function OverviewDashboard() {
  const reposQuery = useRepos();
  const repos = reposQuery.data ?? [];

  const readyCount = repos.filter((repo) => repo.indexStatus === "READY").length;
  const indexingCount = repos.filter(
    (repo) => repo.indexStatus === "INDEXING"
  ).length;
  const failedCount = repos.filter((repo) => repo.indexStatus === "FAILED").length;
  const totalChunks = repos.reduce((sum, repo) => sum + repo.chunkCount, 0);
  const recentRepos = [...repos]
    .sort((a, b) => {
      const aTime = a.indexedAt ? new Date(a.indexedAt).getTime() : 0;
      const bTime = b.indexedAt ? new Date(b.indexedAt).getTime() : 0;
      return bTime - aTime;
    })
    .slice(0, 3);

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {reposQuery.isLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-28 rounded-2xl" />
          ))
        ) : (
          <>
            <StatCard
              label="Repositories"
              value={repos.length}
              hint="Connected from GitHub"
              icon={FolderGit2}
            />
            <StatCard
              label="Ready to chat"
              value={readyCount}
              hint={`${indexingCount} currently indexing`}
              icon={CheckCircle2}
            />
            <StatCard
              label="Indexed chunks"
              value={totalChunks.toLocaleString()}
              hint="Searchable code segments"
              icon={MessageSquareCode}
            />
            <StatCard
              label="Needs attention"
              value={failedCount}
              hint={failedCount > 0 ? "Review failed indexing jobs" : "All repos healthy"}
              icon={failedCount > 0 ? AlertCircle : LoaderCircle}
            />
          </>
        )}
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-heading text-lg font-semibold">Recent repositories</h2>
              <p className="text-sm text-muted-foreground">
                Jump back into a repo you have indexed recently.
              </p>
            </div>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-primary hover:underline"
            >
              View all
            </Link>
          </div>

          {reposQuery.isLoading ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
              {Array.from({ length: 2 }).map((_, index) => (
                <Skeleton key={index} className="h-44 rounded-2xl" />
              ))}
            </div>
          ) : recentRepos.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
              {recentRepos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>No repositories yet</CardTitle>
                <CardDescription>
                  Sync your GitHub repositories to start indexing and chatting
                  with your code.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Go to repositories
                </Link>
              </CardContent>
            </Card>
          )}
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="font-heading text-lg font-semibold">Workspace status</h2>
            <p className="text-sm text-muted-foreground">
              A quick snapshot of indexing across your connected repos.
            </p>
          </div>

          <Card>
            <CardContent className="space-y-3 pt-6">
              {reposQuery.isLoading ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton key={index} className="h-8 rounded-lg" />
                ))
              ) : (
                <>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-muted-foreground">Ready</span>
                    <Badge variant="secondary">{readyCount}</Badge>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-muted-foreground">Indexing</span>
                    <Badge variant="secondary">{indexingCount}</Badge>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-muted-foreground">Pending</span>
                    <Badge variant="secondary">
                      {repos.filter((repo) => repo.indexStatus === "PENDING").length}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-muted-foreground">Failed</span>
                    <Badge variant={failedCount > 0 ? "destructive" : "secondary"}>
                      {failedCount}
                    </Badge>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
