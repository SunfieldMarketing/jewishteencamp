const fs = require('fs');
let content = fs.readFileSync('app/home-client.js', 'utf8');

// Map Activity Design Props (bg, color)
content = content.replace(
    /style=\{\{ background: activity\.bg \}\}/,
    'style={{ background: activity.bg || "#dbeafe" }}'
);
content = content.replace(
    /style=\{\{ color: activity\.color \}\}/,
    'style={{ color: activity.color || "#1d4ed8" }}'
);

fs.writeFileSync('app/home-client.js', content, 'utf8');
