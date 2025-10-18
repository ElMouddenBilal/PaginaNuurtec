import React from "react";

export default function Privacidad() {
  return (
    <main className="relative bg-gray-950 text-gray-200 min-h-screen overflow-hidden">
      {/* Fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-white">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mb-12 text-sm">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-10 leading-relaxed text-lg text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Data Controller
            </h2>
            <p>
              The processing of personal data collected through this website is
              carried out by <strong>Samir El Mhamdi (Nuurtec)</strong>, based in
              Barcelona, Spain.
              <br />
              Contact:{" "}
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
              Purpose of Processing
            </h2>
            <p>
              Personal data is processed solely to manage contact requests,
              provide information about Nuurtec’s products or services, and
              maintain professional relationships with partners or clients who
              contact us through our forms or email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Legal Basis
            </h2>
            <p>
              Data processing is based on the user’s consent in accordance with
              Article 6 (1)(a) of the General Data Protection Regulation (GDPR).
              By submitting the contact form or sending an email, the user
              accepts this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Data Retention
            </h2>
            <p>
              Personal data will be kept only for the time necessary to respond
              to the user’s inquiry or maintain the relationship, unless
              applicable legal obligations require a longer retention period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Data Sharing
            </h2>
            <p>
              Nuurtec does not transfer personal data to third parties except
              where required by law or to service providers involved in website
              maintenance, hosting or form management—always under data-processing
              agreements that ensure compliance with the GDPR.
            </p>
          </section>

          {/* 🔹 BLOQUE NUEVO: Proveedores y Encargados del Tratamiento */}
          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Data Processors and Third-Party Services
            </h2>
            <p>
              To manage our contact forms and communication processes, Nuurtec uses several
              third-party service providers that act as <em>data processors</em> under the GDPR.
              All of them operate under data-processing agreements that ensure the protection
              and confidentiality of the information handled on our behalf:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong>Make (Integromat a.s.)</strong> – workflow automation platform used
                to securely route form submissions to our internal systems.
              </li>
              <li>
                <strong>Airtable Inc.</strong> – cloud database service used for structured
                storage and organization of partner and contact data.
              </li>
              <li>
                <strong>Typeform S.L.</strong> – external form platform used for extended
                information requests. It opens in a separate browser tab
                (<em>typeform.com</em>) and may process data according to its own privacy policy.
              </li>
            </ul>
            <p className="mt-4">
              These providers may store data on servers located outside the European Economic
              Area (EEA). In such cases, Nuurtec ensures that appropriate safeguards are applied,
              including the European Commission’s Standard Contractual Clauses (SCCs) or other
              equivalent mechanisms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              User Rights
            </h2>
            <p>
              Users may exercise their rights of access, rectification, erasure,
              restriction, portability and objection by sending a written request
              to{" "}
              <a
                href="mailto:info@nuurtec.com"
                className="text-green-400 hover:underline"
              >
                info@nuurtec.com
              </a>
              . They also have the right to lodge a complaint with the Spanish
              Data Protection Agency (<em>AEPD</em>) if they believe their data
              has been mishandled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Security Measures
            </h2>
            <p>
              Nuurtec implements technical and organizational measures to ensure
              the security, confidentiality and integrity of personal data, and
              to prevent unauthorized access, alteration or destruction in line
              with Articles 32–34 of the GDPR.
            </p>
          </section>
        </div>
      </div>

      {/* Efectos decorativos */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-emerald-500/3 rounded-full blur-3xl" />
    </main>
  );
}
