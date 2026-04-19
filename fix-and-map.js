const fs = require('fs');

let content = fs.readFileSync('app/home-client.js', 'utf8');

// 1. Fix "use client" syntax error
if (content.includes('import React from "react";\n"use client";')) {
    content = content.replace('import React from "react";\n"use client";', '"use client";\nimport React from "react";');
} else if (!content.startsWith('"use client";')) {
    content = '"use client";\n' + content.replace('"use client";', '').trimStart();
}

// 2. Map Title (Hero)
content = content.replace(
    /style=\{\{ fontFamily: 'Playfair Display, serif' \}\}\s*>\s*Make a Lifelong Investment in{' '}\s*<span className="text-gold">Your Teen<\/span>\s*<\/h1>/,
    `style={{ fontFamily: 'Playfair Display, serif' }}>{data.page.title}</h1>`
);

// 3. Map Stats
content = content.replace(
    /\{\[\s*\{ value: 25, suffix: '\+', label: 'Years of Excellence' \},\s*\{ value: 500, suffix: '\+', label: 'Teen Campers Served' \},\s*\{ value: 50, suffix: '\+', label: 'Adventure Trips' \},\s*\{ value: 100, suffix: '%', label: 'Parent Satisfaction' \},\s*\].map\(\(stat\) => \(/,
    `{(data.page.stats || [
              { value: 25, suffix: '+', label: 'Years of Excellence' },
              { value: 500, suffix: '+', label: 'Teen Campers Served' },
              { value: 50, suffix: '+', label: 'Adventure Trips' },
              { value: 100, suffix: '%', label: 'Parent Satisfaction' },
            ]).map((stat) => (`
);

// 4. Map FAQs
content = content.replace(
    /\{faqs\.map\(\(faq, i\) => \(\s*<FAQItem key=\{i\} question=\{faq\.q\} answer=\{faq\.a\} \/>\s*\)\)\}/,
    `{(data.page.faqs || faqs).map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}`
);

fs.writeFileSync('app/home-client.js', content, 'utf8');
