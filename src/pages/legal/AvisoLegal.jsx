import React from "react";

export default function AvisoLegal() {
  return (
    <main className="relative bg-gray-950 text-gray-200 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-white">
          Legal Notice
        </h1>
        <p className="text-gray-400 mb-12 text-sm">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-10 text-lg text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Website Ownership
            </h2>
            <p>
              This website (<strong>www.nuurtec.com</strong>) is operated by{" "}
              <strong>Samir El Mhamdi (Nuurtec)</strong>, established in
              Barcelona, Spain.
            </p>
            <p>
              Contact email:{" "}
              <a
                href="mailto:info@nuurtec.com"
                className="text-green-400 hover:underline"
              >
                info@nuurtec.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Purpose and Scope
            </h2>
            <p>
              The purpose of this website is to provide information about Nuurtec’s
              products, services and collaborations in the renewable-energy and
              solar-technology sector. Accessing and browsing the site implies
              full acceptance of the terms stated in this notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Intellectual and Industrial Property
            </h2>
            <p>
              All texts, images, logos, graphics, source code, and other content
              on this website are the exclusive property of Nuurtec or of third
              parties who have authorized their use. Reproduction, distribution,
              public communication or modification is strictly prohibited without
              prior written consent from Nuurtec.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Liability
            </h2>
            <p>
              Nuurtec strives to keep the information on this website accurate
              and up to date, but it does not guarantee the absence of errors or
              omissions. Nuurtec shall not be held liable for damages derived
              from browsing, the use of external links, or technical failures
              beyond its control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Applicable Law and Jurisdiction
            </h2>
            <p>
              This Legal Notice is governed by Spanish law. Any dispute shall be
              submitted to the competent courts of Barcelona, Spain, unless
              otherwise required by mandatory consumer-protection regulations.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
