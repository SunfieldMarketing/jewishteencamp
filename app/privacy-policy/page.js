export const metadata = {
  title: 'Privacy Policy | Chicago Jewish Teen Camp',
  description:
    'Privacy Policy for Chicago Jewish Teen Camp. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'June 14, 2025';

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-primary-dark text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Privacy Policy
          </h1>
          <p className="text-blue-200 text-lg">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-headings:font-bold prose-headings:text-primary-dark prose-a:text-gold">

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10 text-sm text-blue-800">
            <strong>Summary:</strong> Chicago Jewish Teen Camp is committed to protecting your family&apos;s privacy.
            We collect only the information needed to run our camp programs and communicate with you.
            We never sell your data to third parties.
          </div>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">1. Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Chicago Jewish Teen Camp (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is operated by Chabad of California,
            located in Beverly Hills, California 90210. We can be reached at{' '}
            <a href="mailto:RabbiZalman@chabadmammoth.com" className="text-gold hover:underline">
              RabbiZalman@chabadmammoth.com
            </a>{' '}
            or by phone at{' '}
            <a href="tel:+18474524609" className="text-gold hover:underline">
              (847) 452-4609
            </a>.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">2. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We collect personal information only when you voluntarily provide it to us, such as when you:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Fill out our contact or enrollment inquiry form</li>
            <li>Call or email us directly</li>
            <li>Enroll your child in one of our programs</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            The types of information we may collect include:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Parent or guardian name, email address, and phone number</li>
            <li>Child&apos;s name, age, and grade</li>
            <li>Emergency contact information (during enrollment)</li>
            <li>Medical information relevant to camp participation (during enrollment)</li>
            <li>Messages and inquiries you send us</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            We do <strong>not</strong> collect payment card information directly on this website.
            Any payment processing is handled by our designated payment processor and is subject
            to their privacy policy.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Respond to your inquiries and enrollment requests</li>
            <li>Communicate camp schedules, updates, and announcements</li>
            <li>Process and manage camp registrations</li>
            <li>Ensure the safety and wellbeing of enrolled campers</li>
            <li>Improve our website and programs</li>
            <li>Send occasional newsletters or camp news (you may opt out at any time)</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">4. How We Share Your Information</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We do <strong>not</strong> sell, rent, or trade your personal information to any third party.
            We may share your information only in the following limited circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li><strong>Service providers:</strong> We use FormSubmit to deliver contact form emails. Your form submission data is transmitted through their service. See <a href="https://formsubmit.co/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">FormSubmit&apos;s Privacy Policy</a>.</li>
            <li><strong>Legal requirements:</strong> We may disclose information if required to do so by law or in response to a valid legal request.</li>
            <li><strong>Safety:</strong> We may share information to protect the rights, safety, or property of our campers, staff, or the public.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">5. Cookies and Website Analytics</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our website may use cookies — small text files stored on your device — to improve your
            browsing experience. These include technically necessary cookies for site functionality.
            We may also use analytics tools (such as Google Analytics) to understand how visitors
            use our site. These tools may set their own cookies. You can disable cookies in your
            browser settings; some site features may not work as intended if you do.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">6. Children&apos;s Privacy</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our website is not directed to children under 13. We do not knowingly collect personal
            information directly from children under 13. Enrollment information for campers is
            collected from parents or legal guardians. If you believe we have inadvertently collected
            information from a child under 13 without parental consent, please contact us immediately.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">7. Data Retention</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We retain personal information for as long as necessary to fulfill the purposes described
            in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
            Enrollment records are retained in accordance with applicable law and camp licensing requirements.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">8. Security</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We implement reasonable security measures to protect the personal information we hold.
            Our website uses HTTPS encryption for data in transit. However, no method of transmission
            over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">9. Your Rights</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:RabbiZalman@chabadmammoth.com" className="text-gold hover:underline">
              RabbiZalman@chabadmammoth.com
            </a>.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">10. Third-Party Links</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our website may contain links to third-party websites (such as social media platforms).
            We are not responsible for the privacy practices of those sites and encourage you to
            review their privacy policies.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">11. Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We may update this Privacy Policy from time to time. When we do, we will update the
            &quot;Last updated&quot; date at the top of this page. Continued use of our website after any
            changes constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">12. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed mb-2">If you have questions about this Privacy Policy, please contact us:</p>
          <div className="bg-gray-50 rounded-2xl p-6 text-gray-700 text-sm space-y-2 mb-10">
            <p><strong>Chicago Jewish Teen Camp</strong></p>
            <p>Chabad of California</p>
            <p>Beverly Hills, CA 90210</p>
            <p>
              Email:{' '}
              <a href="mailto:RabbiZalman@chabadmammoth.com" className="text-gold hover:underline">
                RabbiZalman@chabadmammoth.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+18474524609" className="text-gold hover:underline">
                (847) 452-4609
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
