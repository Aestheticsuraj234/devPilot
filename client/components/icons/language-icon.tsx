import { Code2 } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiC,
  SiClojure,
  SiCplusplus,
  SiCrystal,
  SiCss,
  SiDart,
  SiDocker,
  SiElixir,
  SiErlang,
  SiFsharp,
  SiGnubash,
  SiGo,
  SiGraphql,
  SiHaskell,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiJupyter,
  SiKotlin,
  SiLua,
  SiMarkdown,
  SiMysql,
  SiNim,
  SiOcaml,
  SiOpenjdk,
  SiPerl,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiR,
  SiReact,
  SiRedis,
  SiRuby,
  SiRust,
  SiScala,
  SiSharp,
  SiSolidity,
  SiSqlite,
  SiSvelte,
  SiSwift,
  SiTerraform,
  SiTypescript,
  SiVuedotjs,
  SiWebassembly,
  SiYaml,
  SiZig,
} from "react-icons/si";

import { cn } from "@/lib/utils";

type LanguageConfig = {
  Icon: IconType;
  bg: string;
  iconClass: string;
};

const LANGUAGE_MAP: Record<string, LanguageConfig> = {
  JavaScript: {
    Icon: SiJavascript,
    bg: "bg-[#F7DF1E]",
    iconClass: "text-[#323330]",
  },
  TypeScript: {
    Icon: SiTypescript,
    bg: "bg-[#3178C6]",
    iconClass: "text-white",
  },
  Python: {
    Icon: SiPython,
    bg: "bg-[#3776AB]",
    iconClass: "text-white",
  },
  Java: {
    Icon: SiOpenjdk,
    bg: "bg-[#ED8B00]",
    iconClass: "text-white",
  },
  Go: {
    Icon: SiGo,
    bg: "bg-[#00ADD8]",
    iconClass: "text-white",
  },
  Rust: {
    Icon: SiRust,
    bg: "bg-[#DEA584]",
    iconClass: "text-[#1a1a1a]",
  },
  Kotlin: {
    Icon: SiKotlin,
    bg: "bg-[#7F52FF]",
    iconClass: "text-white",
  },
  "C++": {
    Icon: SiCplusplus,
    bg: "bg-[#00599C]",
    iconClass: "text-white",
  },
  C: {
    Icon: SiC,
    bg: "bg-[#A8B9CC]",
    iconClass: "text-[#1a1a1a]",
  },
  "C#": {
    Icon: SiSharp,
    bg: "bg-[#512BD4]",
    iconClass: "text-white",
  },
  Ruby: {
    Icon: SiRuby,
    bg: "bg-[#CC342D]",
    iconClass: "text-white",
  },
  PHP: {
    Icon: SiPhp,
    bg: "bg-[#777BB4]",
    iconClass: "text-white",
  },
  Swift: {
    Icon: SiSwift,
    bg: "bg-[#F05138]",
    iconClass: "text-white",
  },
  Dart: {
    Icon: SiDart,
    bg: "bg-[#0175C2]",
    iconClass: "text-white",
  },
  Shell: {
    Icon: SiGnubash,
    bg: "bg-[#4EAA25]",
    iconClass: "text-white",
  },
  HTML: {
    Icon: SiHtml5,
    bg: "bg-[#E34F26]",
    iconClass: "text-white",
  },
  CSS: {
    Icon: SiCss,
    bg: "bg-[#1572B6]",
    iconClass: "text-white",
  },
  Vue: {
    Icon: SiVuedotjs,
    bg: "bg-[#42B883]",
    iconClass: "text-white",
  },
  Scala: {
    Icon: SiScala,
    bg: "bg-[#DC322F]",
    iconClass: "text-white",
  },
  "Jupyter Notebook": {
    Icon: SiJupyter,
    bg: "bg-[#F37626]",
    iconClass: "text-white",
  },
  JSX: {
    Icon: SiReact,
    bg: "bg-[#61DAFB]",
    iconClass: "text-[#1a1a1a]",
  },
  TSX: {
    Icon: SiReact,
    bg: "bg-[#61DAFB]",
    iconClass: "text-[#1a1a1a]",
  },
  Svelte: {
    Icon: SiSvelte,
    bg: "bg-[#FF3E00]",
    iconClass: "text-white",
  },
  Elixir: {
    Icon: SiElixir,
    bg: "bg-[#4B275F]",
    iconClass: "text-white",
  },
  Erlang: {
    Icon: SiErlang,
    bg: "bg-[#A90533]",
    iconClass: "text-white",
  },
  Haskell: {
    Icon: SiHaskell,
    bg: "bg-[#5D4F85]",
    iconClass: "text-white",
  },
  Lua: {
    Icon: SiLua,
    bg: "bg-[#2C2D72]",
    iconClass: "text-white",
  },
  Perl: {
    Icon: SiPerl,
    bg: "bg-[#39457E]",
    iconClass: "text-white",
  },
  R: {
    Icon: SiR,
    bg: "bg-[#276DC3]",
    iconClass: "text-white",
  },
  Clojure: {
    Icon: SiClojure,
    bg: "bg-[#5881D8]",
    iconClass: "text-white",
  },
  Crystal: {
    Icon: SiCrystal,
    bg: "bg-[#000000]",
    iconClass: "text-white",
  },
  "F#": {
    Icon: SiFsharp,
    bg: "bg-[#378BBA]",
    iconClass: "text-white",
  },
  OCaml: {
    Icon: SiOcaml,
    bg: "bg-[#EC6813]",
    iconClass: "text-white",
  },
  Nim: {
    Icon: SiNim,
    bg: "bg-[#FFE953]",
    iconClass: "text-[#1a1a1a]",
  },
  Zig: {
    Icon: SiZig,
    bg: "bg-[#F7A41D]",
    iconClass: "text-[#1a1a1a]",
  },
  Solidity: {
    Icon: SiSolidity,
    bg: "bg-[#363636]",
    iconClass: "text-white",
  },
  "WebAssembly": {
    Icon: SiWebassembly,
    bg: "bg-[#654FF0]",
    iconClass: "text-white",
  },
  Dockerfile: {
    Icon: SiDocker,
    bg: "bg-[#2496ED]",
    iconClass: "text-white",
  },
  Markdown: {
    Icon: SiMarkdown,
    bg: "bg-muted-foreground",
    iconClass: "text-white",
  },
  JSON: {
    Icon: SiJson,
    bg: "bg-[#292929]",
    iconClass: "text-white",
  },
  YAML: {
    Icon: SiYaml,
    bg: "bg-[#CB171E]",
    iconClass: "text-white",
  },
  GraphQL: {
    Icon: SiGraphql,
    bg: "bg-[#E10098]",
    iconClass: "text-white",
  },
  Terraform: {
    Icon: SiTerraform,
    bg: "bg-[#844FBA]",
    iconClass: "text-white",
  },
  PostgreSQL: {
    Icon: SiPostgresql,
    bg: "bg-[#4169E1]",
    iconClass: "text-white",
  },
  MySQL: {
    Icon: SiMysql,
    bg: "bg-[#4479A1]",
    iconClass: "text-white",
  },
  SQLite: {
    Icon: SiSqlite,
    bg: "bg-[#003B57]",
    iconClass: "text-white",
  },
  Redis: {
    Icon: SiRedis,
    bg: "bg-[#DC382D]",
    iconClass: "text-white",
  },
  PowerShell: {
    Icon: SiGnubash,
    bg: "bg-[#5391FE]",
    iconClass: "text-white",
  },
};

const FALLBACK: LanguageConfig = {
  Icon: Code2 as unknown as IconType,
  bg: "bg-muted-foreground",
  iconClass: "text-white",
};

function getLanguageConfig(language: string | null): LanguageConfig {
  if (!language) return FALLBACK;
  return LANGUAGE_MAP[language] ?? FALLBACK;
}

export function LanguageIcon({
  language,
  size = "md",
  className,
}: {
  language: string | null;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const { Icon, bg, iconClass } = getLanguageConfig(language);
  const isLucideFallback = !language || !LANGUAGE_MAP[language];

  const boxSize =
    size === "sm" ? "size-6" : size === "lg" ? "size-10" : "size-8";
  const iconSize =
    size === "sm" ? "size-3.5" : size === "lg" ? "size-5" : "size-4";

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-lg shadow-sm",
        boxSize,
        bg,
        className
      )}
    >
      {isLucideFallback ? (
        <Code2 className={cn(iconSize, iconClass)} />
      ) : (
        <Icon className={cn(iconSize, iconClass)} aria-hidden />
      )}
    </div>
  );
}

export function getLanguageLabel(language: string | null): string {
  return language ?? "Unknown";
}
