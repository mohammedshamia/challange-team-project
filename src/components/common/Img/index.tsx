import React, { useState } from "react";
interface Iprops {
  src: string | undefined;
  alt: string;
  width?: string;
  height?: string;
}
export default function Img({ src, alt, width, height }: Iprops) {
  const [imageError, setImageError] = useState<boolean>(false);
  return (
    <img
      style={{ objectFit: "contain" }}
      src={imageError ? "/static/not-found-image.png" : src}
      alt={alt}
      width={width}
      height={height}
      onError={() => setImageError(true)}
      loading="lazy"
    />
  );
}
