"use client";

import { useState } from "react";
import { SendHorizontal, Square } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Kbd } from "@/components/ui/kbd";
import { Spinner } from "@/components/ui/spinner";

export function ChatComposer({
  disabled,
  streaming,
  onSend,
  onStop,
}: {
  disabled?: boolean;
  streaming?: boolean;
  onSend: (content: string) => void | Promise<void>;
  onStop?: () => void;
}) {
  const [value, setValue] = useState("");

  async function submit() {
    const content = value.trim();
    if (!content || disabled || streaming) return;
    setValue("");
    await onSend(content);
  }

  return (
    <div className="border-t bg-background/80 p-4 backdrop-blur">
      <div className="mx-auto max-w-3xl space-y-2">
        <div className="flex items-end gap-2 rounded-2xl border bg-card p-2 shadow-xs">
          <Textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Ask about architecture, files, flows…"
            disabled={disabled}
            className="min-h-12 flex-1 border-0 bg-transparent px-3 py-2 shadow-none focus-visible:ring-0"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void submit();
              }
            }}
          />
          {streaming ? (
            <Button
              size="icon-lg"
              variant="secondary"
              onClick={onStop}
              aria-label="Stop generating"
            >
              <Square className="size-4" />
            </Button>
          ) : (
            <Button
              size="icon-lg"
              disabled={disabled || !value.trim()}
              onClick={() => void submit()}
              aria-label="Send message"
            >
              {disabled ? <Spinner /> : <SendHorizontal />}
            </Button>
          )}
        </div>
        <p className="px-1 text-xs text-muted-foreground">
          Press <Kbd>Enter</Kbd> to send · <Kbd>Shift</Kbd> + <Kbd>Enter</Kbd>{" "}
          for a new line
        </p>
      </div>
    </div>
  );
}
