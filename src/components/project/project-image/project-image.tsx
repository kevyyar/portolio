import Image from "next/image";
import React from "react";

interface ResponsiveImageProps {
  src: string;
  alt?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt = "Image",
  objectFit = "cover",
  ...props
}) => {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        {...props}
      />
    </div>
  );
};
