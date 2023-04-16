import React from "react";
import Image, { ImageProps as ImageProps, ImageLoaderProps } from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { apiClient } from "@core/api/apiClient";

const builder = imageUrlBuilder(apiClient);

const IMAGE_QUALITY_DEFAULT = 75;
const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const imageQuality = quality ?? IMAGE_QUALITY_DEFAULT;
  return builder.image(src).width(width).quality(imageQuality).url();
};

export type NextImageProps = Omit<ImageProps, "loader">;

export const NextImage = (props: NextImageProps) => {
  return <Image loader={imageLoader} {...props} />;
};
