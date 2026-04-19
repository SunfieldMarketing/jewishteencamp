const fs = require('fs');

let content = fs.readFileSync('app/home-client.js', 'utf8');

// Map Testimonials
const testTarget = '{testimonials.map((t) => (';
const testReplacement = '{(data.page.testimonials || testimonials).map((t) => (';

if (content.indexOf(testTarget) !== -1) {
    content = content.replace(testTarget, testReplacement);
}

fs.writeFileSync('app/home-client.js', content, 'utf8');
