import { useState, useEffect } from "react";
import { Building2, Globe, User, Briefcase, Phone, Mail, Layers } from "lucide-react";

const JoinForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    country: "",
    fullName: "",
    position: "",
    phone: "",
    email: "",
    category: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Anti-bots
  const [startTime] = useState(Date.now());
  const [pot, setPot] = useState("");
  const MIN_SECONDS = 3;

  // Efecto para manejar el cierre con ESC (solo Installer)
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && submitted && formData.category === "Installer") {
        onClose();
      }
    };

    if (submitted && formData.category === "Installer") {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [submitted, formData.category, onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const took = (Date.now() - startTime) / 1000;
      const isBot = pot.trim().length > 0 || took < MIN_SECONDS;

      // Payload común (por si usas proxy JSON)
      const payload = {
        companyName: formData.companyName,
        country: formData.country,
        fullName: formData.fullName,
        position: formData.position,
        phone: formData.phone,
        email: formData.email,
        category: formData.category,
        meta: {
          tookSeconds: Math.round(took),
          ua: navigator.userAgent,
          path: location.pathname,
        },
        honeypot: pot,
      };

      // ————————————————————————————————————————————————
      // 1) Preferir PROXY PHP si está configurado
      // ————————————————————————————————————————————————
      const proxyUrl = import.meta.env.VITE_MAKE_PROXY_URL;
      if (proxyUrl && proxyUrl.length > 0) {
        const resProxy = await fetch(proxyUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            webhook: "apply",
            key: import.meta.env.VITE_MAKE_SHARED_KEY || "",
            data: payload,
          }),
        });
        if (!resProxy.ok) {
          console.error("Proxy error", await resProxy.text());
          alert("Error al enviar aplicación. Intenta otra vez.");
          return;
        }
        setSubmitted(true);
        return;
      }

      // ————————————————————————————————————————————————
      // 2) Webhook Make directo usando FormData (sin preflight)
      // ————————————————————————————————————————————————
      const makeWebhook = import.meta.env.VITE_MAKE_WEBHOOK_APPLY;
      if (makeWebhook && makeWebhook.length > 0) {
        const url = `${makeWebhook}?key=${encodeURIComponent(
          import.meta.env.VITE_MAKE_SHARED_KEY || ""
        )}`;

        const fd = new FormData();
        fd.append("companyName", formData.companyName);
        fd.append("country", formData.country);
        fd.append("fullName", formData.fullName);
        fd.append("position", formData.position);
        fd.append("phone", formData.phone);
        fd.append("email", formData.email);
        fd.append("category", formData.category);
        fd.append("honeypot", pot);
        fd.append("tookSeconds", String(Math.round(took)));
        fd.append("ua", navigator.userAgent);
        fd.append("path", location.pathname);

        await fetch(url, { method: "POST", body: fd });
        setSubmitted(true);
        return;
      }

      // ————————————————————————————————————————————————
      // 3) Fallback: Airtable directo (solo si no configuras Make)
      // ————————————————————————————————————————————————
      const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
      const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME;
      const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;

      const res = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            "Company Name": formData.companyName,
            "Country": formData.country,
            "Contact Person Full Name": formData.fullName,
            "Position": formData.position,
            "Phone Number": formData.phone,
            "Email": formData.email,
            "Company Category": formData.category,
          },
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error("Error Airtable:", err);
        alert("Error al enviar aplicación. Intenta otra vez.");
        return;
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Error en handleSubmit:", err);
      alert("Hubo un problema al enviar el formulario.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center space-y-4 p-4 relative">
        {/* X para cerrar solo si es Installer */}
        {formData.category === "Installer" && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Cerrar"
          >
            ✕
          </button>
        )}
       
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h2 className="text-lg font-bold text-gray-800">Application Submitted</h2>
        <p className="text-green-600 text-sm">✅ Application Complete</p>
       
        {/* Mensaje específico para cada categoría */}
        {formData.category === "Installer" ? (
          <p className="text-gray-600 text-sm">
            Thank you for your application as an Installer. We will contact you soon with more information.
          </p>
        ) : (
          <>
            <p className="text-gray-600 text-sm">
              Complete the final step by filling in a short questionnaire.
              <br />We've also sent the link to your inbox.
            </p>
            <p className="text-xs text-red-500 font-medium">
              ⚠️ Application is only completed once the questionnaire is submitted.
            </p>

            {/* 🔹 Botón dinámico para Typeform */}
            {formData.category === "Manufacturer" && (
              <a
                href="https://form.typeform.com/to/C0nbVPf1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-5 py-2 bg-emerald-600 text-white font-medium rounded-lg shadow hover:bg-emerald-700 transition"
              >
                Open Manufacturer Questionnaire →
              </a>
            )}
            {formData.category === "Distributor" && (
              <a
                href="https://form.typeform.com/to/DMJKK2in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-5 py-2 bg-emerald-600 text-white font-medium rounded-lg shadow hover:bg-emerald-700 transition"
              >
                Open Distributor Questionnaire →
              </a>
            )}
          </>
        )}
      </div>
    );
  }

  // 🔹 Formulario con validación nativa + consentimiento
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Honeypot invisible */}
      <input
        type="text"
        name="companyWebsite"
        value={pot}
        onChange={(e) => setPot(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <Field
        label="Company Name"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        icon={<Building2 size={14} className="text-emerald-500" />}
        placeholder="Your company"
        required
      />
      <SelectField
        label="Country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        icon={<Globe size={14} className="text-emerald-500" />}
        options={["Spain", "France", "Germany", "Morocco", "Other"]}
        required
      />
      <Field
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        icon={<User size={14} className="text-emerald-500" />}
        placeholder="Contact person"
        required
      />
      <Field
        label="Position"
        name="position"
        value={formData.position}
        onChange={handleChange}
        icon={<Briefcase size={14} className="text-emerald-500" />}
        placeholder="Role in company"
        required
      />
      <Field
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        icon={<Phone size={14} className="text-emerald-500" />}
        placeholder="+34 600 123 456"
        required
      />
      <Field
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        icon={<Mail size={14} className="text-emerald-500" />}
        placeholder="email@company.com"
        required
      />
      <SelectField
        label="Company Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        icon={<Layers size={14} className="text-emerald-500" />}
        options={["Manufacturer", "Distributor", "Installer"]}
        required
      />

      {/* ✅ Legal consent checkbox (obligatorio) */}
      <div className="flex items-start space-x-2 text-xs sm:text-sm">
        <input
          type="checkbox"
          id="privacy"
          name="consent"
          value="yes"
          required
          className="mt-1 accent-emerald-600"
        />
        <label htmlFor="privacy" className="text-gray-600">
          I have read and agree to the{" "}
          <a
            href="/legal/privacidad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 underline hover:text-emerald-700"
          >
            Privacy Policy
          </a>{" "}
          and consent to the processing of my data to manage my application.
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium py-2.5 rounded-lg shadow hover:from-emerald-600 hover:to-emerald-700 transition"
      >
        Submit & Continue →
      </button>
    </form>
  );
};

const Field = ({ label, icon, ...props }) => (
  <div className="space-y-1">
    <label className="block text-xs font-medium text-gray-700">{label}</label>
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</span>
      <input
        {...props}
        className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
      />
    </div>
  </div>
);

const SelectField = ({ label, icon, options, ...props }) => (
  <div className="space-y-1">
    <label className="block text-xs font-medium text-gray-700">{label}</label>
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</span>
      <select
        {...props}
        className="w-full pl-9 pr-8 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-sm appearance-none"
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▼</span>
    </div>
  </div>
);

export default JoinForm;
