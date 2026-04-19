import client from "../tina/__generated__/client";
import HomeClient from "./home-client";

export default async function HomePage() {
  try {
    const res = await client.queries.page({ relativePath: "home.md" });
    return <HomeClient props={res} />;
  } catch (error) {
    console.error("TinaCMS Query Error:", error);
    return (
      <div className="p-20 text-center">
        <h1 className="text-2xl font-bold text-red-600">Site Configuration Error</h1>
        <p className="text-gray-600 mt-4">The CMS data could not be loaded. Please ensure `npm run dev` is running.</p>
        <pre className="mt-4 p-4 bg-gray-100 rounded text-left inline-block text-xs">
          {error.message}
        </pre>
      </div>
    );
  }
}
