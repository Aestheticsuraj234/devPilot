import { LanguageIcon, getLanguageLabel } from "@/components/icons/language-icon";
import { cn } from "@/lib/utils";

export function LanguageBadge({
  language,
  className,
  showLabel = true,
  iconSize = "md",
}: {
  language: string | null;
  className?: string;
  showLabel?: boolean;
  iconSize?: "sm" | "md" | "lg";
}) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <LanguageIcon language={language} size={iconSize} />
      {showLabel && (
        <span className="text-xs font-medium text-foreground">
          {getLanguageLabel(language)}
        </span>
      )}
    </div>
  );
}
