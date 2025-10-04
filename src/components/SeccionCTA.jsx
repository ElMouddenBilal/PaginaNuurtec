import { useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import Modal from "./Modal";
import JoinForm from "./JoinForm";
import ScheduleForm from "./ScheduleForm"; // 👈 import nuevo

const SeccionCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  return (
    <section
      id="apply"
      className="py-20 bg-gradient-to-r from-green-600 to-emerald-600"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-8">
            <Zap className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the new era of solar business
          </h2>

          <p className="text-xl text-green-100 mb-12 max-w-5xl mx-auto leading-relaxed">
            Be among the first in your country to secure early access to
            Nuurtec, where manufacturers, distributors, and installers connect
            to unlock unprecedented growth.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Card: CTA 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-4">Secure your spot</h3>
              <p className="text-green-100 mb-6">
                Step inside Nuurtec’s private ecosystem before it opens to the
                world.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-white text-green-600 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 group shadow-lg hover:opacity-90 transition"
              >
                <span>Apply to join</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Card: CTA 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-4">Request a Consultation</h3>
              <p className="text-green-100 mb-6">
                Talk to our solar experts and find the solutions your business
                needs.
              </p>
              <button
                onClick={() => setIsCallModalOpen(true)}
                className="w-full bg-transparent border-2 border-white text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 group hover:bg-white/10 transition"
              >
                <span>Schedule Call</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Apply to Join */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <JoinForm />
      </Modal>

      {/* Modal Schedule Call */}
      <Modal isOpen={isCallModalOpen} onClose={() => setIsCallModalOpen(false)}>
        <ScheduleForm onClose={() => setIsCallModalOpen(false)} />
      </Modal>
    </section>
  );
};

export default SeccionCTA;
