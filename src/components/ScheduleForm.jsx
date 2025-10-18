import { useState } from "react";
import { User, Mail, PhoneCall } from "lucide-react";

const ScheduleForm = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  // Anti-bots: honeypot + tiempo mínimo
  const [startTime] = useState(Date.now());
  const [pot, setPot] = useState("");
  const MIN_SECONDS = 3;

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
        name: formData.name,
        email: formData.email,
        meta: {
          tookSeconds: Math.round(took),
          ua: navigator.userAgent,
          path: location.pathname,
        },
        honeypot: pot,
      };

      // ————————————————————————————————————————————————
      // 1) Preferir PROXY PHP si está configurado (misma origin = sin CORS)
      // ————————————————————————————————————————————————
      const proxyUrl = import.meta.env.VITE_MAKE_PROXY_URL;
      if (proxyUrl && proxyUrl.length > 0) {
        const resProxy = await fetch(proxyUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            webhook: "schedule",
            key: import.meta.env.VITE_MAKE_SHARED_KEY || "",
            data: payload,
          }),
        });
        if (!resProxy.ok) {
          console.error("Proxy error", await resProxy.text());
          alert("❌ Error al enviar. Intenta otra vez.");
          return;
        }
        setSubmitted(true);
        return;
      }

      // ————————————————————————————————————————————————
      // 2) Webhook de Make directo usando FormData (sin headers → sin preflight)
      //    Pasamos la “key” en querystring para poder filtrar en Make.
      // ————————————————————————————————————————————————
      const makeWebhook = import.meta.env.VITE_MAKE_WEBHOOK_SCHEDULE;
      if (makeWebhook && makeWebhook.length > 0) {
        const url = `${makeWebhook}?key=${encodeURIComponent(
          import.meta.env.VITE_MAKE_SHARED_KEY || ""
        )}`;

        const fd = new FormData();
        fd.append("name", formData.name);
        fd.append("email", formData.email);
        fd.append("honeypot", pot);
        fd.append("tookSeconds", String(Math.round(took)));
        fd.append("ua", navigator.userAgent);
        fd.append("path", location.pathname);
        // Nota: NO seteamos Content-Type a mano → el navegador lo hace (multipart/form-data)

        await fetch(url, { method: "POST", body: fd });
        // La respuesta puede ser opaca; si no hay error de red asumimos OK.
        setSubmitted(true);
        return;
      }

      // ————————————————————————————————————————————————
      // 3) Fallback: Airtable directo (solo si no configuras Make)
      // ————————————————————————————————————————————————
      const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID_CALLS;
      const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME_CALLS;
      const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;

      const res = await fetch(
        `https://api.airtable.com/v0/${baseId}/${tableName}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              Nombre: formData.name,
              "Correo electrónico": formData.email,
            },
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json();
        console.error("Error Airtable:", err);
        alert("❌ Error al enviar formulario. Intenta otra vez.");
        return;
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Error en handleSubmit:", err);
      alert("Hubo un problema al enviar el formulario.");
    }
  };

  // 🔹 Mensaje tras enviar
  if (submitted) {
    return (
      <div className="text-center p-8">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <PhoneCall className="w-6 h-6 text-white" />
          </div>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">✅ Call Scheduled</h2>
        <p className="text-gray-600 text-base">
          Thank you! We’ve received your request. Our team will contact you
          shortly at your email to arrange a personalized call.
        </p>
        <button
          onClick={onClose}
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Close
        </button>
      </div>
    );
  }

  // 🔹 Formulario con estilo del popup inicial
  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-lg">
      <div className="text-center">
        <div className="flex justify-center mb-3">
          <PhoneCall className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Schedule a Call</h3>
        <p className="text-gray-600 text-sm">
          Leave us your name and email address. We’ll use this information to
          contact you and schedule a call with our team.
        </p>
      </div>

      {/* Honeypot invisible (no tocar) */}
      <input
        type="text"
        name="website"
        value={pot}
        onChange={(e) => setPot(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="block w-full rounded-lg border border-gray-300 p-3 focus:ring-green-500 focus:border-green-500"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="block w-full rounded-lg border border-gray-300 p-3 focus:ring-green-500 focus:border-green-500"
          placeholder="you@example.com"
        />
      </div>

      {/* ✅ Legal consent checkbox */}
      <div className="flex items-start space-x-2 text-sm">
        <input
          type="checkbox"
          id="privacy"
          required
          className="mt-1 accent-green-600"
        />
        <label htmlFor="privacy" className="text-gray-600">
          I have read and agree to the{" "}
          <a
            href="/legal/privacidad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 underline hover:text-green-700"
          >
            Privacy Policy
          </a>{" "}
          and consent to the processing of my data for contact purposes.
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ScheduleForm;
