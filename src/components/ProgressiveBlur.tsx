import type { CSSProperties, ReactNode } from "react";

export interface ProgressiveBlurProps {
  className?: string;
  height?: string;
  position?: "top" | "bottom" | "both";
  blurLevels?: number[];
  children?: ReactNode;
}

function mask(
  position: ProgressiveBlurProps["position"],
  start: number,
  end: number,
) {
  if (position === "both") {
    return "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)";
  }

  const direction = position === "top" ? "to top" : "to bottom";
  return `linear-gradient(${direction}, transparent ${start}%, black ${Math.min(start + 12.5, 100)}%, black ${end}%, transparent ${Math.min(end + 12.5, 100)}%)`;
}

export function ProgressiveBlur({
  className = "",
  height = "30%",
  position = "bottom",
  blurLevels = [0.5, 1, 2, 4, 8, 16, 32, 64],
  children,
}: ProgressiveBlurProps) {
  const placement =
    position === "top"
      ? "progressive-blur-top"
      : position === "bottom"
        ? "progressive-blur-bottom"
        : "progressive-blur-both";

  return (
    <div
      className={`progressive-blur ${placement} ${className}`}
      style={{ height: position === "both" ? "100%" : height }}
    >
      {blurLevels.map((blur, index) => {
        const layerStyle: CSSProperties = {
          zIndex: index + 1,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          maskImage: mask(position, index * 12.5, (index + 2) * 12.5),
          WebkitMaskImage: mask(position, index * 12.5, (index + 2) * 12.5),
        };

        return (
          <div
            className="progressive-blur-layer"
            key={blur}
            style={layerStyle}
          />
        );
      })}
      {children && <div className="progressive-blur-content">{children}</div>}
    </div>
  );
}
