import { client } from '../tina/__generated__/client';
import HomeClient from '../components/HomeClient';
import { tinaField } from "tinacms/dist/react";

export const metadata = {
  title: 'Chicago Jewish Teens | Jewish Day Camp Northbrook IL - Ages 12-17',
  description:
    'Chicago Jewish Teens is the premier Jewish day camp for teens ages 12-17 in Northbrook, IL. Adventures, sports, overnight trips, Shabbatons, Bar Mitzvah prep, and authentic Jewish culture. Enroll today!',
};

export default async function HomePage() {
  const result = await client.queries.homepage({ relativePath: 'index.json' });

  return (
    <HomeClient
      {...result}
      tinaField={tinaField}
    />
  );
}
