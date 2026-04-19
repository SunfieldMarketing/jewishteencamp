import { builder } from '@builder.io/react';
import { RenderBuilderContent } from '../components/builder-content';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default async function HomePage() {
  const model = 'page';
  const content = await builder
    .get(model, {
      userAttributes: {
        urlPath: '/',
      },
    })
    .toPromise();

  return (
    <RenderBuilderContent content={content} model={model} />
  );
}
