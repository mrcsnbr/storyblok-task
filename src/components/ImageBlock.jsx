import { storyblokEditable } from "@storyblok/react/rsc";

export default function ImageBlock({ blok }) {
  if (!blok.image?.filename) {
    return null;
  }

  return (
    <section
      {...storyblokEditable(blok)}
      className="px-6 py-12"
    >
      <div className="mx-auto max-w-4xl">
        <img
          src={blok.image.filename}
          alt={blok.image.alt || "Storyblok image"}
          className="h-auto w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}