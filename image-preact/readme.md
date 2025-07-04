# Image Preact *flavor*
Extension of the native `<img>` element. When loading images it is important to load assets matching the needed size, this is done using the `loader` prop and setting `sizes`.

## Usage
### Image with fixed size
```jsx
<Image
  src="/example.jpg"
  width={754}
  height={552}
  alt="An example"
/>
```

### Image with responsive size
```jsx
<Image
  src="/example.jpg"
  width={754}
  height={552}
  alt="An example"
  sizes="100vw"
/>
```

### With loader
Pass `loader` function to resolve `src` to optimized URLs.
```jsx
<Image
  src="/example.jpg"
  width={754}
  height={552}
  alt="An example"
  sizes="100vw"
  loader={({ src, width }) => `${src}?width=${width}`}
/>
```
