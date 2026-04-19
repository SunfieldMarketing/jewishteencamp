const fs = require('fs');

let content = fs.readFileSync('app/home-client.js', 'utf8');

// Ensure "use client" is the very first thing
if (!content.startsWith('"use client";')) {
    content = '"use client";\n' + content.replace('"use client";', '').trimStart();
}

// 1. Map Hero Image
content = content.replace(
    /style=\{\{ backgroundImage: `url\("\$\{img\(featuredPhoto, 1400\)\}"\)` \}\}/,
    'style={{ backgroundImage: `url("${data.page.heroImage || img(featuredPhoto, 1400)}")` }}'
);

// 2. Map Hero Description
content = content.replace(
    /<p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl hero-animate-delay-2">[\s\S]*?<\/p>/,
    `<p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl hero-animate-delay-2">
              {data.page.heroDescription || "Chicago's premier Jewish day camp for teens ages 12-17. Adventures, sports, friendships, and authentic Jewish identity - all from the heart of Northbrook, IL."}
            </p>`
);

// 3. Map Hero Buttons
content = content.replace(
    /<ShimmerButton href="\/contact">[\s\S]*?<\/ShimmerButton>/,
    `<ShimmerButton href={data.page.heroButtons?.primaryLink || "/contact"}>
                {data.page.heroButtons?.primaryLabel || "Enroll Now - Free Consultation"}
              </ShimmerButton>`
);
content = content.replace(
    /<Link href="\/about" className="btn-outline">[\s\S]*?<\/Link>/,
    `<Link href={data.page.heroButtons?.secondaryLink || "/about"} className="btn-outline">
                {data.page.heroButtons?.secondaryLabel || "Learn More"}
              </Link>`
);

// 4. Map Hero Quote
content = content.replace(
    /<blockquote className="border-l-4 border-gold pl-5 text-blue-200 italic text-sm mb-10 hero-animate-delay-2 max-w-lg mx-auto">[\s\S]*?<\/blockquote>/,
    `<blockquote className="border-l-4 border-gold pl-5 text-blue-200 italic text-sm mb-10 hero-animate-delay-2 max-w-lg mx-auto">
              &ldquo;{data.page.heroQuote || "Every boy and girl is a seed and a sapling, which with the passage of time will bring forth fruit."}&rdquo;
              <footer className="text-gold text-xs mt-1.5 not-italic font-semibold">- {data.page.heroQuoteAuthor || "The Lubavitcher Rebbe"}</footer>
            </blockquote>`
);

// 5. Map About Image
content = content.replace(
    /src=\{img\(aboutPhoto, 900\)\}/,
    'src={data.page.about?.image || img(aboutPhoto, 900)}'
);

// 6. Map About Paragraphs
content = content.replace(
    /<p className="text-gray-600 text-lg leading-relaxed mb-6">[\s\S]*?<\/p>/,
    `<p className="text-gray-600 text-lg leading-relaxed mb-6">
                {data.page.about?.p1 || "Teen eXtreme is a bold new concept in Jewish camping. As a child grows so does his ability for self-discovery, adventure, bonding with friends, and appreciation of group dynamics."}
              </p>`
);
content = content.replace(
    /<p className="text-gray-600 leading-relaxed mb-8">[\s\S]*?<\/p>/,
    `<p className="text-gray-600 leading-relaxed mb-8">
                {data.page.about?.p2 || "Under the leadership of a team of senior staff members, Teen Camp combines out-of-state trips, camping excursions, athletics, swimming, and outdoor adventures with authentic Jewish spirit to impart timeless values and appreciation of others."}
              </p>`
);

fs.writeFileSync('app/home-client.js', content, 'utf8');
console.log('Successfully updated home-client.js with design-level interactivity');
