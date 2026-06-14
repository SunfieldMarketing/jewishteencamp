export const metadata = {
  title: 'Terms of Service | Chicago Jewish Teen Camp',
  description:
    'Terms of Service for Chicago Jewish Teen Camp. Please read these terms carefully before enrolling or using our website.',
};

export default function TermsOfServicePage() {
  const lastUpdated = 'June 14, 2025';

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-primary-dark text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Terms of Service
          </h1>
          <p className="text-blue-200 text-lg">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10 text-sm text-amber-800">
            <strong>Please read carefully.</strong> By using this website or enrolling in any Chicago Jewish
            Teen Camp program, you agree to these Terms of Service. If you do not agree, please do not
            use our website or services.
          </div>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            These Terms of Service (&quot;Terms&quot;) govern your use of the Chicago Jewish Teen Camp website
            (the &quot;Site&quot;) and participation in our programs, operated by Chabad of California
            (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing the Site or registering for any program, you
            confirm that you are at least 18 years old (or a legal guardian acting on behalf of a minor)
            and agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">2. Camp Programs and Enrollment</h2>
          <h3 className="text-lg font-semibold text-primary-dark mt-6 mb-3">2.1 Eligibility</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Camp programs are open to Jewish teens generally between ages 12 and 17, subject to
            specific program requirements. Enrollment is subject to availability and our acceptance
            of your application.
          </p>
          <h3 className="text-lg font-semibold text-primary-dark mt-6 mb-3">2.2 Registration</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Enrollment is confirmed only upon receipt of a completed registration form and any
            required deposit or full payment. Submitting a contact or inquiry form does not
            guarantee or constitute enrollment.
          </p>
          <h3 className="text-lg font-semibold text-primary-dark mt-6 mb-3">2.3 Fees and Refunds</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Program fees are as listed at the time of registration. Refund policies and deadlines
            will be communicated at the time of enrollment. We reserve the right to modify fees
            for future sessions with advance notice.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">3. Code of Conduct</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            All campers and their families agree to abide by the camp&apos;s code of conduct, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Treating all campers, staff, and community members with respect and dignity</li>
            <li>Following all safety rules and instructions from camp staff</li>
            <li>Refraining from bullying, harassment, or discriminatory behavior</li>
            <li>Respecting Jewish values and traditions observed at camp</li>
            <li>Compliance with all applicable laws and regulations</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            We reserve the right to dismiss a camper without refund for violations of the code of
            conduct, behavior that endangers the safety of others, or any other conduct deemed
            incompatible with our camp environment, at our sole discretion.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">4. Medical Information and Consent</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Parents or guardians are required to disclose all relevant medical information, allergies,
            and special needs during enrollment. By enrolling, you authorize camp staff to administer
            first aid and seek emergency medical treatment if necessary. We are not responsible for
            health issues that arise from undisclosed medical conditions.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">5. Photography and Media Release</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Camp activities may be photographed or recorded for use in our website, social media,
            promotional materials, and newsletters. By enrolling your child, you grant Chicago
            Jewish Teen Camp a non-exclusive, royalty-free license to use such images and recordings.
            If you wish to opt out, you must notify us in writing before the program begins.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">6. Website Use</h2>
          <h3 className="text-lg font-semibold text-primary-dark mt-6 mb-3">6.1 Permitted Use</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            You may use this Site for lawful, personal, non-commercial purposes only. You agree not to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Reproduce, distribute, or modify any content from this Site without our written permission</li>
            <li>Use the Site to transmit spam, malware, or harmful content</li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
            <li>Use automated tools to scrape or harvest data from the Site</li>
          </ul>
          <h3 className="text-lg font-semibold text-primary-dark mt-6 mb-3">6.2 Intellectual Property</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            All content on this Site — including text, images, logos, and design — is the property
            of Chicago Jewish Teen Camp or its content suppliers and is protected by applicable
            intellectual property laws. The &quot;Chicago Jewish Teen Camp&quot; name and logo are our
            proprietary marks.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">7. Disclaimer of Warranties</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            This Site and our services are provided &quot;as is&quot; without warranties of any kind, express
            or implied. We do not warrant that the Site will be error-free, uninterrupted, or free
            of viruses or other harmful components. We do not warrant the accuracy or completeness
            of any information on the Site.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            To the fullest extent permitted by law, Chicago Jewish Teen Camp and Chabad of California
            shall not be liable for any indirect, incidental, special, consequential, or punitive
            damages arising from your use of the Site or participation in our programs, even if
            we have been advised of the possibility of such damages. Our total liability shall not
            exceed the amount you paid for the specific program giving rise to the claim.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">9. Assumption of Risk</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Camp activities — including sports, outdoor adventures, water activities, and field trips —
            carry inherent risks. By enrolling, parents and guardians acknowledge these risks and
            agree that Chicago Jewish Teen Camp is not liable for injuries or accidents that occur
            during normal program activities, provided that reasonable care was exercised by our staff.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">10. Governing Law</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            These Terms shall be governed by and construed in accordance with the laws of the State
            of California, without regard to its conflict of law provisions. Any disputes arising
            from these Terms shall be resolved in the courts located in Los Angeles County, California.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">11. Changes to These Terms</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We reserve the right to modify these Terms at any time. Updated Terms will be posted on
            this page with a revised &quot;Last updated&quot; date. Continued use of the Site or enrollment
            in our programs after changes are posted constitutes acceptance of the revised Terms.
          </p>

          <h2 className="text-2xl font-bold text-primary-dark mt-10 mb-4">12. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed mb-2">
            Questions about these Terms? Please contact us:
          </p>
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
