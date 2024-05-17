import { Suspense, lazy } from "react";
import DefaultIcon from "./assets/question-line.svg";

interface ImageProps {
  url: string;
  size: number;
  fill: string;
  stroke: string;
  color: string;
}

function Icon({
  url,
  size = 24,
  color = "currentColor",
  fill = "none",
  stroke = "none",
}: ImageProps) {
  return (
    <img
      src={url}
      alt={url.replace("/src/assets/", "").split(".").slice(0, -1).join(".")}
      style={{
        width: size,
        height: size,
        fill: fill,
        color: color,
        stroke: stroke,
      }}
    />
  );
}

export default Icon;
