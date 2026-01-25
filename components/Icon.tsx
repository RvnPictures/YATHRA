"use client";

import { useEffect, useRef } from "react";

interface IconProps {
  icon: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export default function Icon({
  icon,
  width = 24,
  height,
  className = "",
}: IconProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = `<iconify-icon icon="${icon}" width="${width}" ${height ? `height="${height}"` : ""} class="${className}"></iconify-icon>`;
    }
  }, [icon, width, height, className]);

  return <span ref={ref} className={className} />;
}
