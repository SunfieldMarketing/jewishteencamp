'use client';
import Link from 'next/link';

export default function CultureSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="section-subheading">Jewish Culture</p>
        <h2 className="section-heading mb-6">
          A Deep Sense of <span className="text-gold">Jewish Pride</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Teen Campers are imbued with a deep sense of pride in their Jewish heritage. Our Jewish Fun Time program makes Judaism come alive and leaves the camper with a deeper sense of their Jewish identity. This one-of-a-kind program teaches campers the essentials of Judaism in a hands-on way.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          By integrating special activities, Judaism truly comes alive. Combined with group discussions and educational programs, these events bring to life the beauty and values of our tradition in a fun and spirited way. For our Bar Mitzvah aged boys, dynamic Judaic tutoring as well as personalized Bar Mitzvah prep and celebration is also available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary">Enroll Your Teen Today</Link>
          <Link href="/day-camp" className="btn-secondary">Explore Programs</Link>
        </div>
      </div>
    </section>
  );
}

