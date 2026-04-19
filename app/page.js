import { client } from '../lib/sanity';
import HomeClient from './home-client';
import { draftMode } from 'next/headers';

export default async function HomePage() {
  const isDraftMode = draftMode().isEnabled;

  const query = `*[_type == "page" && slug.current == "home"][0]{
    title,
    sections[]{
      ...,
      _type == "hero" => {
        "backgroundImage": backgroundImage.asset->url
      }
    }
  }`;

  // If in draft mode, we tell Sanity to provide the Stega markers for visual editing
  const data = await client.fetch(query, {}, { 
    cache: isDraftMode ? 'no-store' : 'force-cache',
    next: { revalidate: isDraftMode ? 0 : 3600 },
    stega: isDraftMode
  });

  return <HomeClient data={data} />;
}
