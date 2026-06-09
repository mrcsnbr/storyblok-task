import { storyblokEditable } from "@storyblok/react/rsc";

export default function Teaser({ blok }) {
  const link = blok.button_link;

  const buttonUrl =
    link?.linktype === "url"
      ? link.url
      : link?.cached_url
        ? `/${link.cached_url.replace(/^\/+/, "")}`
        : "#";

  return (
    <section
      {...storyblokEditable(blok)}
      className="px-6 py-24 text-center"
    >
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {blok.headline}
        </h1>

        {blok.description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            {blok.description}
          </p>
        )}

        {blok.button_text && buttonUrl !== "#" && (
          <a
            href={buttonUrl}
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
          >
            {blok.button_text}
          </a>
        )}
      </div>
    </section>
  );
}