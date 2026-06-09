import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

export default function Grid({ blok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="px-6 py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {blok.columns?.map((nestedBlok) => (
          <StoryblokServerComponent
            blok={nestedBlok}
            key={nestedBlok._uid}
          />
        ))}
      </div>
    </section>
  );
}