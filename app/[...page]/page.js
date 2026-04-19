import { builder } from '@builder.io/react';
import { RenderBuilderContent } from '../../components/builder-content';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default async function Page({ params }) {
  const builderModelName = 'page';

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: '/' + (params?.page?.join('/') || ''),
      },
    })
    .toPromise();

  return (
    <>
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
