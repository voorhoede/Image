# Image component
Image component to fetch optimized images from a CDN.

Extension of the native `<img>` element. When loading images it is important to load assets matching the needed size, this is done using the `loader` prop and setting `sizes`.

## Niceness
- No client-side JavaScript
- Generate `srcset` from native `sizes` attribute

