import { notFound } from "next/navigation";
import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function StoryPage({ params }) {
  const { slug } = await params;

  const fullSlug = slug?.join("/") || "home";

  const storyblokApi = getStoryblokApi();

  try {
    const { data } = await storyblokApi.get(
      `cdn/stories/${fullSlug}`,
      {
        version:
          process.env.NODE_ENV === "production"
            ? "published"
            : "draft",
      }
    );

    return <StoryblokStory story={data.story} />;
  } catch {
    notFound();
  }
}