import { storyblokEditable } from "@storyblok/react/rsc";

export default function ImageBlock({ blok }) {
  const image = blok.image;

  if (!image?.filename) {
    return null;
  }

  return (
    <section
      {...storyblokEditable(blok)}
      className="px-6 py-12"
    >
      <div className="mx-auto max-w-4xl">
        <img
          src={image.filename}
          alt={image.alt || ""}
          className="h-auto w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}