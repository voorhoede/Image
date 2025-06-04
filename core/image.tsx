import type { ImageLoader } from "./types.mjs";
import { generateSrcSet } from "./generate-src-set.mjs";

export type { ImageLoader } from "./types.mjs";

export type ImageProps = {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  loading: "eager" | "lazy";
  sizes?: string;
  srcset?: string;
  decoding?: "async" | "auto" | "sync";
  loader?: ImageLoader;
  /** Quality passed to the loader (defaults to 45) */
  quality?: number;
};

export function Image({
  className,
  src,
  alt,
  width,
  height,
  loading = "lazy",
  sizes,
  srcset,
  decoding = "async",
  loader = ({ src }: { src: string }) => src,
  quality = 45,
}: ImageProps) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      sizes={sizes}
      srcSet={srcset ||
        generateSrcSet({
          loader,
          src,
          width,
          quality,
          sizes,
        })}
      decoding={decoding}
    />
  );
}
