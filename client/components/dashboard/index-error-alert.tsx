"use client";

import { useState } from "react";
import { AlertCircle, ChevronDown } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const SUMMARY_LIMIT = 100;

function getErrorSummary(message: string) {
  const line = message.split("\n").find((part) => part.trim())?.trim() ?? message;
  if (line.length <= SUMMARY_LIMIT) return line;
  return `${line.slice(0, SUMMARY_LIMIT - 1)}…`;
}

export function IndexErrorAlert({ message }: { message: string }) {
  const [open, setOpen] = useState(false);
  const summary = getErrorSummary(message);
  const isExpandable = message.trim().length > summary.length;

  return (
    <Alert
      variant="destructive"
      className="border-dashed border-destructive/30 bg-destructive/5 px-3 py-2.5"
    >
      <AlertCircle className="size-4" />
      <AlertTitle className="text-xs font-semibold">Indexing failed</AlertTitle>
      <AlertDescription className="text-xs text-destructive/90">
        {!isExpandable ? (
          <p className="wrap-break-word leading-relaxed">{message}</p>
        ) : (
          <Collapsible open={open} onOpenChange={setOpen}>
            {!open && (
              <p className="wrap-break-word leading-relaxed">{summary}</p>
            )}
            <CollapsibleTrigger
              className={cn(
                "inline-flex items-center gap-1 font-medium text-destructive hover:underline",
                !open ? "mt-1.5" : "mt-0"
              )}
            >
              {open ? "Hide details" : "Show details"}
              <ChevronDown
                className={cn(
                  "size-3 transition-transform",
                  open && "rotate-180"
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <div className="max-h-28 overflow-y-auto rounded-md border border-destructive/20 bg-destructive/10 p-2.5">
                <p className="wrap-break-word whitespace-pre-wrap leading-relaxed">
                  {message}
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}
      </AlertDescription>
    </Alert>
  );
}
