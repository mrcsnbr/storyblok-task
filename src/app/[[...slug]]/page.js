import { notFound } from "next/navigation";
import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function StoryPage({ params }) {
  const { slug } = await params;
  const fullSlug = slug?.join("/") || "home";

  const storyblokApi = getStoryblokApi();

  let story;

  try {
    const { data } = await storyblokApi.get(
      `cdn/stories/${fullSlug}`,
      {
        version: "draft",
      }
    );

    story = data.story;
  } catch (error) {
    console.error("Unable to load Storyblok story:", error);
    notFound();
  }

  return <StoryblokStory story={story} />;
}