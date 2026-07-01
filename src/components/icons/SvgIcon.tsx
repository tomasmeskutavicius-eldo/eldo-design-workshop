import type { HTMLAttributes } from "react";

type SvgIconProps = HTMLAttributes<HTMLSpanElement> & {
  svg: string;
  label?: string;
};

function normalizeSvg(svg: string) {
  return svg
    .replace(/preserveAspectRatio="none"/, 'preserveAspectRatio="xMidYMid meet"')
    .replace(/\s(width|height)="100%"/g, "");
}

export function SvgIcon({ svg, label, className, ...props }: SvgIconProps) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={className}
      dangerouslySetInnerHTML={{ __html: normalizeSvg(svg) }}
      {...props}
    />
  );
}
