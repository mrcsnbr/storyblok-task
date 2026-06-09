import { storyblokEditable } from "@storyblok/react/rsc";

export default function ApiDemo({ blok }) {
  return (
    <main
      {...storyblokEditable(blok)}
      className="min-h-screen bg-slate-50 px-6 py-16"
    >
      <article className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg">
        {blok.image?.filename && (
          <img
            src={blok.image.filename}
            alt={blok.image.alt || blok.title || "API demo image"}
            className="h-auto w-full object-cover"
          />
        )}

        <div className="p-8">
          <h1 className="text-4xl font-bold text-slate-900">
            {blok.title}
          </h1>

          {blok.description && (
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {blok.description}
            </p>
          )}
        </div>
      </article>
    </main>
  );
}