import HomeClient from "./home-client";
import fs from "fs/promises";
import path from "path";

export default async function HomePage() {
  const filePath = path.join(process.cwd(), "content/pages/home.json");
  const content = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(content);

  return (
    <main>
      <HomeClient data={data} />
    </main>
  );
}
