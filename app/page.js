import client from "../tina/__generated__/client";
import HomeClient from "./home-client";

export default async function HomePage() {
  const res = await client.queries.page({ relativePath: "home.md" });
  return <HomeClient props={res} />;
}
