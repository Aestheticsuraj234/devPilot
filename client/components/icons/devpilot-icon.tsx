import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

type DevPilotIconProps = SVGProps<SVGSVGElement> & {
  variant?: "color" | "mono";
};

export function DevPilotIcon({
  className,
  variant = "color",
  ...props
}: DevPilotIconProps) {
  const mono = variant === "mono";

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    >
      <rect
        width="64"
        height="64"
        rx="15"
        fill={mono ? "currentColor" : "#0D9488"}
      />
      <path
        d="M22 30l7 7-7 7"
        stroke={mono ? "var(--background)" : "#FFFFFF"}
        strokeWidth="3.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 44h15"
        stroke={mono ? "var(--background)" : "#FFFFFF"}
        strokeWidth="3.25"
        strokeLinecap="round"
      />
      <rect
        x="47"
        y="42.25"
        width="3"
        height="3.5"
        rx="0.75"
        fill={mono ? "var(--background)" : "#FFFFFF"}
      />
    </svg>
  );
}

export function DevPilotLogo({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 220 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    >
      <rect width="64" height="64" rx="15" fill="#0D9488" />
      <path
        d="M22 30l7 7-7 7"
        stroke="#FFFFFF"
        strokeWidth="3.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 44h15"
        stroke="#FFFFFF"
        strokeWidth="3.25"
        strokeLinecap="round"
      />
      <rect x="47" y="42.25" width="3" height="3.5" rx="0.75" fill="#FFFFFF" />
      <path
        fill="currentColor"
        d="M80 44.5V19.5h8.4c5.2 0 8.6 2.7 8.6 7.2 0 3.1-1.6 5.4-4.2 6.4l5.1 11.4h-5.9l-4.6-10.4h-2.4v10.4H80zm5.2-14.6h2.8c2.5 0 3.9-1.2 3.9-3.3s-1.4-3.2-3.9-3.2h-2.8v6.5zM108.2 44.9c-6.1 0-10.1-4.2-10.1-10.6s4-10.6 10.1-10.6 10.1 4.2 10.1 10.6-4 10.6-10.1 10.6zm0-4.5c3.1 0 4.9-2.3 4.9-6.1s-1.8-6.1-4.9-6.1-4.9 2.3-4.9 6.1 1.8 6.1 4.9 6.1zM131.6 44.5V19.5h5.2v25h-5.2zM145.8 44.5l8.7-25h5.7l8.7 25h-5.6l-1.5-4.6h-9.1l-1.5 4.6h-5.4zm10.1-15.9-3.1 9.6h6.2l-3.1-9.6zM176.8 44.9c-6.1 0-10.1-4.2-10.1-10.6s4-10.6 10.1-10.6c3.6 0 6.4 1.5 7.9 4.1l-4.4 2.5c-.7-1.3-1.9-2-3.5-2-2.8 0-4.7 2.2-4.7 6s1.9 6 4.7 6c1.6 0 2.8-.7 3.5-2l4.4 2.5c-1.5 2.6-4.3 4.1-7.9 4.1zM199.8 44.5V19.5h8.4c5.2 0 8.6 2.7 8.6 7.2 0 3.1-1.6 5.4-4.2 6.4l5.1 11.4h-5.9l-4.6-10.4h-2.4v10.4h-5.2zm5.2-14.6h2.8c2.5 0 3.9-1.2 3.9-3.3s-1.4-3.2-3.9-3.2h-2.8v6.5z"
      />
    </svg>
  );
}
