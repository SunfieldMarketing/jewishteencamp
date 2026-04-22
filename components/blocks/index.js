import React from 'react';

// Block Components
const Hero = ({ title, subtitle }) => (
  <section className="bg-primary text-white py-20 px-4 rounded-3xl mb-12">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h1>
      <p className="text-xl opacity-90">{subtitle}</p>
    </div>
  </section>
);

const About = ({ heading, subheading, body }) => (
  <section className="py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-gold uppercase tracking-widest text-sm font-bold mb-4">{subheading}</p>
      <h2 className="text-4xl font-bold mb-8 text-primary-dark" style={{ fontFamily: 'Playfair Display, serif' }}>{heading}</h2>
      <div className="text-gray-600 leading-relaxed text-lg">{body}</div>
    </div>
  </section>
);

const blockComponents = {
  hero: Hero,
  about: About,
};

export const Blocks = ({ blocks }) => {
  if (!blocks) return null;

  return (
    <>
      {blocks.map((block, i) => {
        const Component = blockComponents[block.blockType];
        if (Component) {
          return <Component key={i} {...block} />;
        }
        return <div key={i}>Unknown Block: {block.blockType}</div>;
      })}
    </>
  );
};
