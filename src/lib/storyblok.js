import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import Page from "@/components/Page";
import Feature from "@/components/Feature";
import Grid from "@/components/Grid";
import Teaser from "@/components/Teaser";
import ApiDemo from "@/components/ApiDemo";
import ImageBlock from "@/components/ImageBlock";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    api_demo: ApiDemo,
    image_block: ImageBlock,
  },
  apiOptions: {
    region: 'eu',
  },
});
