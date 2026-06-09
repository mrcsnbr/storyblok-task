import { storyblokEditable } from "@storyblok/react/rsc";

export default function Feature({ blok }) {
  return (
    <article
      {...storyblokEditable(blok)}
      className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8"
    >
      <h2 className="text-2xl font-bold text-white">
        {blok.name}
      </h2>

      {blok.description && (
        <p className="mt-4 leading-7 text-zinc-400">
          {blok.description}
        </p>
      )}
    </article>
  );
}