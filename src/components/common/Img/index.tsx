import React, { useState } from "react";
interface Iprops {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}
export default function Img({ src, alt, width, height }: Iprops) {
  const [imageError, setImageError] = useState<boolean>(false);
  return (
    <>
      {" "}
      {src && !imageError && (
        <img
          style={{ objectFit: "contain" }}
          src={src}
          alt={alt}
          width={width}
          height={height}
          onError={() => setImageError(true)}
          loading="lazy"
        />
      )}
    </>
  );
}
