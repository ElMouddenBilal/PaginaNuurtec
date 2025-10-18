import React from "react";

export default function Cookies() {
  return (
    <main className="relative bg-gray-950 text-gray-200 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-white">
          Cookies Policy
        </h1>
        <p className="text-gray-400 mb-12 text-sm">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-10 text-lg text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They allow the site to remember your preferences,
              improve your browsing experience and collect anonymous statistical
              data about usage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Types of Cookies We Use
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Essential cookies:</strong> Required for the website to
                function correctly (for example, remembering consent
                preferences).
              </li>
              <li>
                <strong>Analytical cookies:</strong> Used to understand how
                visitors interact with the website and to improve its structure
                and performance.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Managing Cookies
            </h2>
            <p>
              You can configure your browser to accept, block or delete cookies
              at any time. Most browsers provide instructions for managing
              cookies in their “Help” section. Blocking certain cookies may
              affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Third-Party Cookies
            </h2>
            <p>
              This website may use third-party analytical tools (such as Google
              Analytics) to gather statistical information. These tools may set
              their own cookies; you can review their privacy policies to
              understand how they process your data.
            </p>
          </section>

          <section>
            <p>
              For further information on how we process personal data, please
              review our{" "}
              <a
                href="/legal/privacidad"
                className="text-green-400 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
