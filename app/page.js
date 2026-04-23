import HomeTemplate from "../components/HomeTemplate";

export default function Page() {
  return <HomeTemplate />;
}

// Ensure it builds correctly
export const dynamic = "force-static";
