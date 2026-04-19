const fs = require('fs');

let content = fs.readFileSync('app/home-client.js', 'utf8');

// Ensure "use client" is first
if (!content.startsWith('"use client";')) {
    content = '"use client";\n' + content.replace('"use client";', '').trimStart();
}

// Helper to replace sections with fallbacks
function replaceSection(target, replacement) {
    if (content.indexOf(target) !== -1) {
        content = content.replace(target, replacement);
    } else {
        console.warn('Could not find target: ' + target.substring(0, 50) + '...');
    }
}

// 1. STATS SECTION
const statsTarget = `            {[
              { value: 25, suffix: '+', label: 'Years of Excellence' },
              { value: 500, suffix: '+', label: 'Teen Campers Served' },
              { value: 50, suffix: '+', label: 'Adventure Trips' },
              { value: 100, suffix: '%', label: 'Parent Satisfaction' },
            ].map((stat) => (`;

const statsReplacement = `            {(data.page.stats || [
              { value: 25, suffix: '+', label: 'Years of Excellence' },
              { value: 500, suffix: '+', label: 'Teen Campers Served' },
              { value: 50, suffix: '+', label: 'Adventure Trips' },
              { value: 100, suffix: '%', label: 'Parent Satisfaction' },
            ]).map((stat) => (`;

replaceSection(statsTarget, statsReplacement);

// 2. ABOUT SECTION
replaceSection(
    '<p className="section-subheading">About Chicago Jewish Teens</p>',
    '<p className="section-subheading">{data.page.about?.subheading || "About Chicago Jewish Teens"}</p>'
);

replaceSection(
    '<h2 className="section-heading mb-6">\n                More Than a Camp - <span className="text-gold">A Life Experience</span>\n              </h2>',
    '<h2 className="section-heading mb-6">{data.page.about?.heading || "More Than a Camp - A Life Experience"}</h2>'
);

// 3. ACTIVITIES SECTION
const activitiesTarget = `            {activities.map((activity, idx) => (`;
const activitiesReplacement = `            {(data.page.activities || activities).map((activity, idx) => (`;
replaceSection(activitiesTarget, activitiesReplacement);

// 4. FAQ SECTION
const faqTarget = `            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}`;
const faqReplacement = `            {(data.page.faqs || faqs).map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}`;
replaceSection(faqTarget, faqReplacement);

fs.writeFileSync('app/home-client.js', content, 'utf8');
console.log('Successfully updated home-client.js');
