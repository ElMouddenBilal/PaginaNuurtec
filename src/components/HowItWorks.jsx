import React from 'react';
import { Globe, Search, Handshake, Package, Truck, Network, Sparkles, TrendingUp } from 'lucide-react';

const content = {
  kicker: 'The NUURTEC method',
  title: 'How it works',
  subtitle: (
    <>
      Powered by smart technology and an exclusive global network, Nuurtec is redefining solar trade, 
      creating unbeatable prices, lightning-fast deals and partnerships built to last.
      <br />

      <div className="relative mt-6">
        {/* Decorador superior */}
        <div className="flex justify-center mb-3">
          <div className="h-0.5 w-16 bg-gradient-to-r from-emerald-400 via-green-500 to-blue-400 rounded-full"></div>
        </div>

        {/* Frase destacada */}
        <span className="block text-lg md:text-xl font-semibold bg-gradient-to-r from-emerald-600 via-green-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
          The future isn't coming, it's already here.
        </span>

        {/* Decorador inferior */}
        <div className="flex justify-center mt-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
        </div>
      </div>
    </>
  ),

  steps: [
    {
      icon: <Globe className="w-7 h-7 text-emerald-600" />,
      cardIcon: <Network className="w-8 h-8 text-emerald-600" />,
      title: 'Global Network',
      description:
        'A Chinese manufacturer lists on Nuurtec; the product instantly enters a continent-wide pipeline of pre-qualified African distributors, with immediate exposure to verified, ready demand.'
    },
    {
      icon: <Search className="w-7 h-7 text-emerald-600" />,
      cardIcon: <Sparkles className="w-8 h-8 text-emerald-600" />,
      title: 'Smart Matching',
      description:
        'A Moroccan distributor requests high-efficiency modules; Nuurtec surfaces listings like those posted by Chinese manufacturers, matching them to vetted suppliers in record time—team-powered today, automated in seconds soon.'
    },
    {
      icon: <Handshake className="w-7 h-7 text-emerald-600" />,
      cardIcon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      title: 'Trusted Growth',
      description:
        'We oversee contract, payment, logistics, and delivery end-to-end; every successful deal boosts ratings and unlocks bigger orders, better terms, and compounding trust across our ecosystem.'
    }
  ],
  example: {
    title: 'Example — How Nuurtec Works in Practice',
    body: [
      'A distributor in Algeria requests 1MW of Tier-1 monocrystalline panels with specific wattage and certifications. Nuurtec instantly presents 5 verified Chinese manufacturers that fully meet those requirements. Our team then analyzes and filters them based on reliability, reviews, production capacity, speed of delivery and track record, selecting the best fit for the distributor.',
      'The distributor receives the final proposal, finds it aligned with his needs and moves forward. The contract is signed and Nuurtec manages the entire process, from agreement and payment to logistics and delivery to Algiers.'
    ],
    metrics: [
      { value: '16%', label: 'Order savings' },
      { value: '12%', label: 'Logistics savings' }
    ],
    footer:
      'Thanks to our exclusive manufacturer partnerships, the distributor saves 16% on the order itself plus 12% on logistics, amounting to thousands of dollars in savings. The manufacturer, in turn, secures a trusted long-term buyer and closes +1MW worth of sales through Nuurtec.'
  }
};

const HowItWorks = () => {
  const { kicker, title, subtitle, steps, example } = content;

  return (
    <section
      id="how-it-works"
      className="relative py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-emerald-600"></div>
            <span className="text-sm font-semibold tracking-wider uppercase text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full">
              {kicker}
            </span>
            <div className="h-px w-8 bg-emerald-600"></div>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black mb-8 text-gray-900 tracking-tight leading-none max-w-4xl mx-auto">
            {title}
          </h2>

          {/* 👇 Aquí el cambio: antes era <p>, ahora <div> */}
          <div className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </div>
        </div>

        {/* Steps Roadmap Cards */}
        <div className="relative mb-24 lg:mb-32">
          {/* Línea de roadmap - Vertical en móvil, horizontal en desktop */}
          <div className="absolute lg:hidden left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-green-500 rounded-full"></div>
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>

          {/* Layout vertical para móvil, horizontal para desktop */}
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 group lg:flex-col lg:gap-6"
              >
                {/* Icono circular (roadmap) */}
                <div className="relative z-10 flex-shrink-0 lg:self-start">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Card moderna */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex-1 group-hover:shadow-md transition-shadow duration-300 lg:aspect-square lg:flex lg:flex-col lg:justify-start relative">
                  
                  {/* Icono decorativo solo en PC (distinto) */}
                  <div className="hidden lg:flex mb-6 w-14 h-14 rounded-xl bg-emerald-50 items-center justify-center">
                    {step.cardIcon}
                  </div>

                  {/* Header de la card */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      Step {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Example Section */}
      <div className="relative w-full bg-gradient-to-br from-green-900 via-emerald-800 to-green-700 py-20 lg:py-28 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              {example.title}
            </h3>
            <div className="w-20 h-1 bg-emerald-300/60 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Story */}
            <div className="space-y-6 max-w-3xl">
              {example.body.map((para, i) => (
                <p key={i} className="text-white/95 text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Metrics + Visual */}
            <div className="space-y-6">
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-5">
                {example.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-6 bg-white/10 backdrop-blur-md ring-1 ring-white/10 text-center hover:bg-white/15 transition-all"
                  >
                    <div className="text-3xl font-extrabold text-emerald-300 mb-2">
                      {m.value}
                    </div>
                    <div className="text-sm text-emerald-100/80 font-medium">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual block */}
              <div className="rounded-xl p-6 bg-white/10 backdrop-blur-md ring-1 ring-white/10 text-center">
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-white/80" />
                  </div>
                  <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-white/60 rounded-full"></div>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Truck className="w-6 h-6 text-white/80" />
                  </div>
                </div>
                <p className="text-sm text-emerald-100/90">
                  Direct Trade Connection
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16">
            <div className="rounded-xl p-8 bg-white/10 backdrop-blur-md ring-1 ring-white/10">
              <p className="text-center text-emerald-100/95 text-lg leading-relaxed max-w-4xl mx-auto">
                {example.footer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
