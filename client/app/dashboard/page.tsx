"use client";

import { RequireAuth } from "@/components/providers/require-auth";
import { AppShell } from "@/components/layout/app-shell";

export default function DashboardPage() {
  return (
    <RequireAuth>
      <AppShell hideHeader>
        <div className="flex min-h-svh items-center justify-center">
          <h1 className="text-2xl font-bold">Welcome to DevPilot</h1>
        </div>
      </AppShell>
    </RequireAuth>
  );
}
    

