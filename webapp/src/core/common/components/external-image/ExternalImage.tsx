import Image, { ImageProps } from "next/image";
import React from "react";

export type ExternalImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

export const DOMAIN_URL = "https://storage.googleapis.com/pygments-records-assets/prod/images";

export const ExternalImage = ({ src, alt = "Image", ...props }: ExternalImageProps) => {
  const imgUrl = `${DOMAIN_URL}${src}`;
  return <Image src={imgUrl} alt={alt} {...props} />;
};
