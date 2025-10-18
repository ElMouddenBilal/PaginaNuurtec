import React from "react";

export default function Terminos() {
  return (
    <main className="relative bg-gray-950 text-gray-200 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-white">
          Terms of Service
        </h1>
        <p className="text-gray-400 mb-12 text-sm">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-10 text-lg text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Purpose
            </h2>
            <p>
              These Terms of Service govern access to and use of{" "}
              <strong>www.nuurtec.com</strong>. By using this site, you accept
              these terms in full. If you do not agree, you must refrain from
              using the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              User Responsibilities
            </h2>
            <p>
              Users agree to use the website, its services and content in
              accordance with the law, morality and public order, and to abstain
              from activities that could damage or disrupt the website’s
              operation or other users’ experiences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Intellectual Property
            </h2>
            <p>
              All intellectual and industrial property rights regarding the
              content, design and source code of this website belong to Nuurtec
              or to third parties who have authorized their use. Any
              reproduction, distribution, transformation or public communication
              without prior written authorization is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Disclaimer
            </h2>
            <p>
              Nuurtec is not responsible for damages that may arise from the
              use of the website, such as errors, omissions, interruptions or
              technical issues. External links are provided solely for
              convenience; Nuurtec has no control over their content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Modifications
            </h2>
            <p>
              Nuurtec reserves the right to update or modify these Terms of
              Service at any time without prior notice. Users are encouraged to
              review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms are governed by the laws of Spain. Any dispute shall
              be subject to the exclusive jurisdiction of the courts of
              Barcelona, Spain.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
