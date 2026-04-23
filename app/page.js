import HomeTemplate from "../components/HomeTemplate";
import { registerComponents } from "../plasmic-init";

export default function Page() {
  // Ensure components are registered for client-side hydration
  // Note: Only for features that might use Plasmic components internally
  try {
    registerComponents();
  } catch (e) {
    // Fail silently in Server Component build
  }
  
  return <HomeTemplate />;
}

// Ensure it builds correctly as a stable static page
export const dynamic = "force-static";
