# Storyblok Technical Task

A simple website built with **Next.js**, **React**, **Storyblok**, and **Tailwind CSS**.

The project demonstrates draft content delivery, live visual editing, reusable Storyblok components, dynamic story routing, and the use of the Storyblok Management API.

## Live Website

- **Home:** https://storyblok-task-beta.vercel.app/
- **API Demo Story:** https://storyblok-task-beta.vercel.app/api-demo-story

## Task 1 — Part 1

The website includes the following features:

- Fetches the draft version of Storyblok content.
- Supports live editing through the Storyblok Visual Editor.
- Uses reusable and nestable Storyblok blocks.
- Uses dynamic routing to render stories based on their slugs.
- Is deployed on Vercel.
- Includes a responsive interface built with Tailwind CSS.

## Task 1 — Part 2

The Storyblok Management API was used to:

- Create the `api_demo` component as a **Content Type**.
- Create the `API Demo Story` using the new Content Type.
- Upload an image asset to Storyblok.
- Complete the asset upload using the `finish_upload` endpoint.
- Associate the uploaded asset with the API demo story.

The API demo story was later organized using editable nested blocks so that its content can be added, removed, reordered, and edited through Storyblok.

## Storyblok Components

The project includes the following components:

- `page` — Main Content Type for standard pages.
- `api_demo` — Content Type created through the Management API.
- `teaser` — Displays an editable headline, description, button text, and link.
- `grid` — Renders a collection of nested Storyblok blocks.
- `feature` — Displays an individual feature card.
- `image_block` — Displays an image selected from Storyblok Assets.

Content such as text, links, images, and block order is managed through Storyblok. React components control the presentation, layout, and rendering behavior.

## Technologies

- Next.js
- React
- Storyblok
- Storyblok React SDK
- Tailwind CSS
- Vercel
- Postman

## Local Setup

Clone the repository:

```bash
git clone https://github.com/mrcsnbr/storyblok-task.git
cd storyblok-task
```

Install the dependencies:

```bash
npm install
```

Create a `.env.local` file in the project root:

```env
STORYBLOK_DELIVERY_API_TOKEN=your_storyblok_delivery_api_token
```

Use a Storyblok Content Delivery API token. Do not expose a Management API Personal Access Token in the frontend.

Start the development server:

```bash
npm run dev
```

Open the home page:

```text
http://localhost:3000
```

The API demo story is available at:

```text
http://localhost:3000/api-demo-story
```

## Visual Editor

The project uses the following Storyblok React SDK utilities:

- `storyblokEditable`
- `StoryblokServerComponent`
- `StoryblokStory`

The dynamic route requests the draft version of each story:

```js
version: "draft";
```

This allows unpublished content to be previewed and edited through the Storyblok Visual Editor.

## Dynamic Routing

Stories are rendered through the following optional catch-all route:

```text
src/app/[[...slug]]/page.js
```

Examples:

```text
/                 → home
/api-demo-story   → api-demo-story
```

This makes it possible to render Storyblok stories according to their slugs without creating a separate Next.js route for every story.

## Environment Variables

The following environment variable is required locally and in Vercel:

```env
STORYBLOK_DELIVERY_API_TOKEN
```

The variable must also be added to the Vercel project under:

```text
Project Settings → Environment Variables
```

## Build

To verify the production build locally:

```bash
npm run build
```

## Deployment

The website is deployed on Vercel.

New commits pushed to the connected Git repository automatically trigger a new deployment.

## Official Documentation

The implementation was developed using the following official documentation.

### Storyblok

- [Storyblok Next.js Integration Guide](https://www.storyblok.com/docs/guides/nextjs)
- [Dynamic Routing in Next.js](https://www.storyblok.com/docs/guides/nextjs/dynamic-routing)
- [Visual Preview in Next.js](https://www.storyblok.com/docs/guides/nextjs/visual-preview)
- [Storyblok Visual Editor](https://www.storyblok.com/docs/concepts/visual-editor)
- [Storyblok Link Object](https://www.storyblok.com/docs/api/content-delivery/v2/links/the-link-object)
- [Storyblok Management API](https://www.storyblok.com/docs/api/management)
- [Create a Component](https://www.storyblok.com/docs/api/management/components/create-a-component)
- [Create a Story](https://www.storyblok.com/docs/api/management/stories/create-a-story)
- [Upload and Replace Assets](https://www.storyblok.com/docs/api/management/assets/upload-and-replace-assets)

### Next.js

- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js Environment Variables](https://nextjs.org/docs/app/guides/environment-variables)
- [Next.js Deployment](https://nextjs.org/docs/app/getting-started/deploying)

### Vercel

- [Vercel Deployments](https://vercel.com/docs/deployments)
- [Vercel Deployment Environments](https://vercel.com/docs/deployments/environments)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
