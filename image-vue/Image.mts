import { defineComponent, h } from "vue";
import type { ImageLoader } from "../core/types.mjs";
import { generateSrcSet } from "../core/generate-src-set.mjs";

export type { ImageLoader } from "../core/types.mjs";

export type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  loading: "eager" | "lazy";
  sizes?: string;
  srcset?: string;
  decoding?: "async" | "auto" | "sync";
  loader: ImageLoader;
  // Quality passed to the loader
  quality?: number;
};

export const Image = defineComponent(
  (props: ImageProps) => {
    const loader = props.loader !== undefined
      ? props.loader
      : ({ src }: { src: string }) => src;
    const quality = props.quality ?? 45;

    return () =>
      h("img", {
        src: props.src,
        alt: props.alt,
        width: props.width,
        height: props.height,
        loading: props.loading,
        sizes: props.sizes,
        srcset: props.srcset ||
          generateSrcSet({
            loader,
            src: props.src,
            width: props.width,
            quality,
            sizes: props.sizes,
          }),
        decoding: props.decoding ?? "async",
      });
  },
  {
    props: [
      "src",
      "alt",
      "width",
      "height",
      "loading",
      "sizes",
      "srcset",
      "decoding",
      "loader",
      "quality",
    ],
  },
);
