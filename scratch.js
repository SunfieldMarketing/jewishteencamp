const fs = require('fs');
const content = fs.readFileSync('app/page.js', 'utf8');
const splitIdx = content.indexOf('export default function HomePage() {');
const importsAndMeta = content.substring(0, splitIdx);
const componentData = content.substring(splitIdx);
const metadataMatch = importsAndMeta.match(/export const metadata = \{[\s\S]*?\};\n/);
const metadata = metadataMatch ? metadataMatch[0] : '';
let imports = importsAndMeta.replace(metadata, '');

let homeClientContent = '"use client";\n\nimport { useTina } from "tinacms/dist/react";\n' + imports + componentData.replace('export default function HomePage() {', 'export default function HomeClient({ props }) {\n  const { data } = useTina({ query: props.query, variables: props.variables, data: props.data });');

// Replace the title with data.page.title
homeClientContent = homeClientContent.replace(
  `Make a Lifelong Investment in{' '}\n              <span className="text-gold">Your Teen</span>`,
  `{data.page.title}`
);

fs.writeFileSync('app/home-client.js', homeClientContent);

const pageContent = imports + metadata + '\nimport client from "../tina/__generated__/client";\nimport HomeClient from "./home-client";\n\nexport default async function HomePage() {\n  const res = await client.queries.page({ relativePath: "home.md" });\n  return <HomeClient props={res} />;\n}\n';
fs.writeFileSync('app/page.js', pageContent);
