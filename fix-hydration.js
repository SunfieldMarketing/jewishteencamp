const fs = require('fs');

let content = fs.readFileSync('app/home-client.js', 'utf8');

// Inject React into the file since we need useState, useEffect
if (!content.includes("import React")) {
    content = 'import React from "react";\n' + content;
}

// 1. Add isMounted protection to prevent Next.js UI freezing from hydration errors
content = content.replace(
  '  const { data } = useTina({ query: props.query, variables: props.variables, data: props.data });\n  return (',
  '  const { data } = useTina({ query: props.query, variables: props.variables, data: props.data });\n  const [isMounted, setIsMounted] = React.useState(false);\n  React.useEffect(() => setIsMounted(true), []);\n  if (!isMounted) return null;\n\n  return ('
);

// 2. Map data.page.title EXACTLY since replace_file_content failed previously
content = content.replace(
  `Make a Lifelong Investment in{' '}\n              <span className="text-gold">Your Teen</span>`,
  `{data.page.title}`
);

// 3. Remove BorderBeam wrapping because it throws a text-offset crash
const bbeamStart = '<BorderBeam key={program.name} className="scale-105 shadow-2xl" colorFrom="#C8922A" colorTo="#f5d78e" borderWidth={3}>';
const bbeamEnd = '</BorderBeam>';
content = content.replace(bbeamStart, '<div key={program.name} className="scale-105 shadow-2xl relative">');
content = content.replace(bbeamEnd, '</div>');

fs.writeFileSync('app/home-client.js', content, 'utf8');
