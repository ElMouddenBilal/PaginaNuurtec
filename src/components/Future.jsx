// src/components/Future.jsx
import React from 'react';
import { Brain, Zap, TrendingUp, Cpu } from 'lucide-react';

const Future = () => {
  const features = [
    {
      icon: <Brain className="w-7 h-7 text-emerald-300" />,
      title: 'AI-Powered Matching',
      description:
        'Advanced machine learning will predict optimal partnerships, specs fit and market opportunities.'
    },
    {
      icon: <Cpu className="w-7 h-7 text-emerald-300" />,
      title: 'Automated Workflows',
      description:
        'From first contact to contract and delivery — streamlined, auditable flows with minimal manual work.'
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-emerald-300" />,
      title: 'Market Intelligence',
      description:
        'Live price signals, trends and demand forecasts to inform quotes, inventory and timing.'
    },
    {
      icon: <Zap className="w-7 h-7 text-emerald-300" />,
      title: 'Smart Contracts',
      description:
        'Secure, rules-based agreements and milestone payments to reduce risk and speed up deals.'
    }
  ];

  return (
    <section
      id="future"
      className="relative py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-green-700 overflow-hidden"
    >
      {/* decorative glows */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-28 -right-10 h-80 w-80 rounded-full bg-green-300/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_0%_0%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(700px_circle_at_100%_100%,rgba(255,255,255,0.05),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            The Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
              NUURTEC
            </span>
          </h2>
          <p className="text-xl text-emerald-100/90 max-w-3xl mx-auto leading-relaxed">
            Phase 2 evolves NUURTEC into an AI-powered SaaS platform that automates and optimizes the
            solar supply chain — from matching and pricing to contracts and logistics.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mb-16">
          {features.map((feature, i) => (
            <article
              key={i}
              className="group rounded-2xl p-6 bg-white/5 backdrop-blur-md ring-1 ring-white/10 hover:bg-white/10 hover:shadow-xl transition-all"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 ring-1 ring-white/15">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>

        {/* Big panel */}
        <div className="rounded-2xl p-8 md:p-12 bg-white/5 backdrop-blur-md ring-1 ring-white/10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-white mb-5">
                AI-Driven Solar Economy
              </h3>
              <p className="text-emerald-100/90 text-lg leading-relaxed mb-8">
                Imagine supply chains that self-optimize: AI anticipates demand, prices update in real time,
                and every transaction settles through trusted, programmable agreements.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-5 rounded-xl bg-white/10 ring-1 ring-white/15">
                  <div className="text-2xl font-extrabold text-emerald-300 mb-1">90%</div>
                  <div className="text-sm text-emerald-100/80">Process Automation</div>
                </div>
                <div className="text-center p-5 rounded-xl bg-white/10 ring-1 ring-white/15">
                  <div className="text-2xl font-extrabold text-emerald-300 mb-1">24/7</div>
                  <div className="text-sm text-emerald-100/80">AI Operations</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="rounded-2xl p-10 bg-gradient-to-br from-emerald-500/15 to-green-500/15 ring-1 ring-white/10">
                <div className="text-6xl mb-3">🚀</div>
                <h4 className="text-2xl font-bold text-white mb-3">Coming Soon</h4>
                <p className="text-emerald-100/90">
                  The next generation of NUURTEC will make the solar industry smarter, faster and more
                  sustainable than ever.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tail note */}
        <div className="text-center mt-12">
          <p className="text-emerald-100/90 text-lg">
            Be part of the solar industry’s AI revolution.{' '}
            <span className="text-emerald-300 font-semibold">Join our waitlist today.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Future;
