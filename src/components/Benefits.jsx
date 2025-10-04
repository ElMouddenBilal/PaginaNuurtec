// src/components/Benefits.jsx
import React from 'react';
import { 
  Factory, 
  Store, 
  Wrench, 
  TrendingUp, 
  Globe, 
  Users, 
  Check, 
  Sparkles, 
  Star, 
  Zap 
} from 'lucide-react';

const Benefits = () => {
  const audiences = [
    {
      icon: <Factory className="w-8 h-8 text-white" />,
      title: "MANUFACTURERS",
      benefits: [
        "Expansion into Africa's fastest-growing solar markets",
        "Access to a network of top distributors across Africa",
        "Instant matching with serious buyers",
        "Deals closed in record time",
        "Reputation built through partnerships that fuel growth"
      ],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Store className="w-8 h-8 text-white" />,
      title: "DISTRIBUTORS",
      benefits: [
        "Backed by hundreds of verified manufacturers",
        "Higher margins through exclusive pricing advantages",
        "Be first to market with new solar solutions",
        "Gain recognition as a top distributor in your country",
        "Unlock new buyers (including installers soon)"
      ],
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Wrench className="w-8 h-8 text-white" />,
      title: "INSTALLERS",
      benefits: [
        "Exclusive visibility to top distributors",
        "Stay ahead with the latest solar technologies",
        "Expand projects with wider product availability",
        "Preferred treatment inside the Nuurtec ecosystem",
        "Elevate your status in the solar value chain"
      ],
      gradient: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Fondo decorativo difuso */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-emerald-200 to-green-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-20 w-52 h-52 bg-gradient-to-tr from-blue-200 to-emerald-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 relative">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg animate-bounce-slow">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-snug sm:leading-tight">
            Who Benefits from{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              NUURTEC
            </span>
            ?
          </h2>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-emerald-200">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-tr from-emerald-300 to-green-200 rounded-full blur-2xl opacity-40" />
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-tr from-blue-300 to-emerald-200 rounded-full blur-2xl opacity-30" />

              <div className="space-y-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed relative z-10">
                <p className="text-center">
                  Nuurtec transforms connections into growth, and growth into the future of
                  energy, creating unmatched opportunities for manufacturers, distributors and
                  installers.
                </p>

                <div className="flex items-center justify-center">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent animate-pulse"></div>
                  <Zap className="mx-3 w-5 h-5 text-emerald-500" />
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent via-emerald-300 to-transparent animate-pulse"></div>
                </div>

                <p className="text-center font-semibold text-emerald-700 relative">
                  Yes, you heard it right, installers too. Next on the roadmap, they will
                  join Nuurtec and get seamlessly connected to the distributors best suited
                  to their projects.
                </p>

                <div className="flex items-center justify-center">
                  <Star className="w-4 h-4 text-gray-400 mx-2 animate-spin-slow" />
                  <div className="w-10 h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full"></div>
                  <Star className="w-4 h-4 text-gray-400 mx-2 animate-spin-slow" />
                </div>

                <p className="text-center">
                  For distributors, that means thousands of new buyers knocking on their door,
                  extra sales, bigger market share, and zero extra effort. For installers, it
                  means a trusted gateway to the best products, matched to their exact needs.
                </p>

                <div className="text-center">
                  <strong className="text-emerald-600 text-lg font-bold tracking-wide">
                    One ecosystem, unlimited growth.
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 mb-16 lg:mb-20 max-w-6xl mx-auto lg:grid-rows-1">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="relative bg-white/90 backdrop-blur-sm border-2 border-gray-100 rounded-xl sm:rounded-2xl 
              p-4 sm:p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-gray-200 
              transition-all duration-300 group flex flex-col
              sm:min-h-[600px]"
            >
              <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-5 blur-3xl transition-all duration-500 -z-10`} />
              
              <div className="relative z-10 mb-3 sm:mb-4">
                <div className={`w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br ${audience.gradient} shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                  {React.cloneElement(audience.icon, { className: "w-6 sm:w-7 h-6 sm:h-7 text-white" })}
                </div>
              </div>

              <div className="mb-2 sm:mb-3 lg:h-[60px] lg:flex lg:items-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 tracking-tight">{audience.title}</h3>
              </div>

              <div className="flex-grow flex flex-col justify-between">
                <ul className="space-y-2 sm:space-y-3 lg:space-y-2 flex-grow">
                  {audience.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 sm:gap-2.5 group/item lg:h-[64px] min-h-[36px] sm:min-h-[44px] lg:min-h-0"
                    >
                      <div className={`flex-shrink-0 mt-0.5 sm:mt-1 w-3.5 sm:w-4 h-3.5 sm:h-4 flex items-center justify-center rounded-full bg-gradient-to-br ${audience.gradient} shadow-sm group-hover/item:shadow-md transition-all duration-200`}>
                        <Check className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-white stroke-2" />
                      </div>
                      <span className="text-gray-700 text-xs sm:text-sm font-medium leading-snug sm:leading-relaxed flex-1">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className={`mt-0 sm:mt-4 h-0.5 w-full bg-gradient-to-r ${audience.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
              </div>
            </div>
          ))}
        </div>

        {/* Industry Impact */}
        <div className="bg-gradient-to-br from-green-900 via-emerald-800 to-green-700 rounded-2xl sm:rounded-3xl shadow-xl border-2 border-emerald-900/40 p-6 sm:p-10 lg:p-16 relative overflow-hidden hover:shadow-2xl transition-all duration-500 max-w-6xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-green-500 to-blue-400"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center mb-5 sm:mb-6 lg:mb-8">
                <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg mr-3 sm:mr-4">
                  <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white">Industry Impact</h3>
              </div>

              <p className="text-emerald-50 mb-5 sm:mb-6 lg:mb-8 text-sm sm:text-base lg:text-xl leading-relaxed">
                Nuurtec empowers companies of all sizes, from local installers to global manufacturers,
                every player grows stronger inside one trusted ecosystem.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <div className="text-center p-3 sm:p-4 lg:p-6 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl lg:rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-300 mb-1 sm:mb-2">500+</div>
                  <div className="text-emerald-50 text-xs sm:text-sm lg:text-base font-medium">companies in network</div>
                </div>
                <div className="text-center p-3 sm:p-4 lg:p-6 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl lg:rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-300 mb-1 sm:mb-2">15+</div>
                  <div className="text-emerald-50 text-xs sm:text-sm lg:text-base font-medium">priority markets targeted across Africa</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl lg:rounded-2xl p-5 sm:p-6 lg:p-10 relative border border-white/10">
              <div className="text-center relative z-10">
                <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 mx-auto mb-4 sm:mb-5 lg:mb-6 flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
                  <Globe className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">Global Reach</h4>
                <p className="text-emerald-50 text-xs sm:text-sm lg:text-lg leading-relaxed">
                  From residential rooftops to utility-scale solar farms, NUURTEC connects the perfect partners
                  for every project scale and requirement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA hint */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-500 text-xs sm:text-sm bg-gray-50 px-3 sm:px-4 py-2 rounded-full border border-gray-200">
            <Users className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-600" />
            <span>Join thousands of solar professionals growing with NUURTEC</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
