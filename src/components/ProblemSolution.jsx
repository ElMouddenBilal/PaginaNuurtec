// src/components/ProblemSolution.jsx
import React from 'react';
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  Users,
  Globe,
  DollarSign,
  Truck,
  Shield,
  BarChart,
  RefreshCcw,
  TrendingUp,
  Zap
} from 'lucide-react';

const ProblemSolution = () => {
  // PROBLEMS
  const problems = [
    {
      icon: <XCircle className="w-6 h-6 text-red-500" />,
      title: 'No Central Platform',
      description:
        'No dedicated solar marketplace; buyers rely on scattered, risky sources with middlemen and extra cost.'
    },
    {
      icon: <Globe className="w-6 h-6 text-red-500" />,
      title: 'Africa’s Digital Gap',
      description:
        'Offline, manual processes. New suppliers still require costly trips and fairs—barriers for small distributors.'
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      title: 'Lack of Trust in Suppliers',
      description:
        'Scams, fake certificates and unreliable factories put capital and reputation at risk.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-red-500" />,
      title: 'Blind to Real Prices',
      description:
        'Prices move weekly; without live data, negotiations are blind and quotes are inflated.'
    },
    {
      icon: <Truck className="w-6 h-6 text-red-500" />,
      title: 'Costly, Inefficient Logistics',
      description:
        'Shipping and local logistics add heavy costs and delays that squeeze margins.'
    },
    {
      icon: <Users className="w-6 h-6 text-red-500" />,
      title: 'Overdependence on One Supplier',
      description:
        'A single delay can paralyze operations for weeks due to lack of alternatives.'
    },
    {
      icon: <BarChart className="w-6 h-6 text-red-500" />,
      title: 'No Funding, No Growth',
      description:
        'Banks demand impossible guarantees; credit is expensive; Shariah options are scarce.'
    },
    {
      icon: <Zap className="w-6 h-6 text-red-500" />,
      title: 'Late Access to Innovation',
      description:
        'New tech reaches Africa late, keeping markets a step behind.'
    }
  ];

  // SOLUTIONS
  const solutions = [
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'A Centralized Platform',
      description:
        'One verified hub linking Chinese manufacturers with African distributors across the continent.'
    },
    {
      icon: <Globe className="w-6 h-6 text-green-500" />,
      title: 'Close the Digital Gap',
      description:
        'Fully digital workflows replace travel and paperwork; instant, traceable access to opportunities.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Verified, Trusted Suppliers',
      description:
        'Every partner is personally vetted—no scams, no fake certificates, no unreliable players.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: 'Real Prices, Real Time',
      description:
        'Live product and logistics pricing for fast, clear decisions and zero blind negotiation.'
    },
    {
      icon: <Truck className="w-6 h-6 text-green-500" />,
      title: 'Smarter, Cheaper Logistics',
      description:
        'Collective buying + strong carrier deals cut costs and speed delivery.'
    },
    {
      icon: <RefreshCcw className="w-6 h-6 text-green-500" />,
      title: 'Built-In Backup Supply',
      description:
        'Automatic alternatives across Africa/Asia keep orders moving when one supplier fails.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: 'Halal Growth Financing',
      description:
        'Shariah-aligned financing lets distributors scale orders and reduce unit costs.'
    },
    {
      icon: <Zap className="w-6 h-6 text-green-500" />,
      title: 'Direct Access to Innovation',
      description:
        'Early access to the latest products and tech—Africa moves at the global pace.'
    }
  ];

  return (
    <section id="problem-solution" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Kicker */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-6 sm:w-8 bg-emerald-600"></div>
            <span className="text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase text-emerald-600 bg-emerald-50 px-3 sm:px-4 py-1.5 rounded-full">
              Why Nuurtec
            </span>
            <div className="h-px w-6 sm:w-8 bg-emerald-600"></div>
          </div>
        </div>

        {/* Intro */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-3 sm:mb-5 leading-snug sm:leading-tight">
            Rewriting the Rules of Solar Trade
          </h2>
          <p className="text-center max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            <span className="block text-xs sm:text-sm md:text-base text-gray-600">
              Solar supply chains were broken—slow, inefficient and untrusted.
            </span>
            <span className="block font-semibold text-emerald-600 mt-2 text-sm sm:text-base md:text-lg">
              Nuurtec rebuilt them for speed, trust and growth.
            </span>
          </p>   
        </div>

        {/* Problems & Solutions */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch">
          {/* Problems */}
          <div className="flex flex-col h-full">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-5 sm:mb-6 lg:mb-8 flex items-center">
              <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-500 mr-2 sm:mr-3" />
              The Industry’s Biggest Challenges
            </h3>
          
            <div className="space-y-4 sm:space-y-5 md:space-y-6 flex-1">
              {problems.map((p, i) => (
                <div
                  key={i}
                  className="bg-red-50 border border-red-100 rounded-xl p-3 sm:p-4 md:p-5 flex"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">{p.icon}</div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1">
                        {i + 1}. {p.title}
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress (industry today) */}
            <div className="mt-5 sm:mt-6 md:mt-8 p-4 sm:p-5 md:p-6 bg-gray-100 rounded-xl">
              <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
                <span>Current Industry Efficiency</span>
                <span className="font-semibold text-red-600">35%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: '35%' }}
                />
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="flex flex-col h-full">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-5 sm:mb-6 lg:mb-8 flex items-center">
              <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-500 mr-2 sm:mr-3" />
              How the Platform Fixes It
            </h3>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 flex-1">
              {solutions.map((s, i) => (
                <div
                  key={i}
                  className="bg-green-50 border border-green-100 rounded-xl p-3 sm:p-4 md:p-5 flex"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">{s.icon}</div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1">
                        {i + 1}. {s.title}
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress (with platform) */}
            <div className="mt-5 sm:mt-6 md:mt-8 p-4 sm:p-5 md:p-6 bg-green-100 rounded-xl">
              <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
                <span>With This Platform</span>
                <span className="font-semibold text-green-600">100%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-white shadow-lg">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-4">
              Ready to transform your business?
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-green-100 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2 sm:px-0">
              Join the visionaries redefining solar trade with this platform.
              Scale faster, buy smarter and grow stronger with a network built
              for trust and results.
            </p>

            {/* Métricas mejoradas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-5 flex flex-col items-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">50%</div>
                <div className="text-green-100 text-xs sm:text-sm md:text-base mt-1">Faster Deals</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-5 flex flex-col items-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">15%</div>
                <div className="text-green-100 text-xs sm:text-sm md:text-base mt-1">Cost Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-5 flex flex-col items-center col-span-2 sm:col-span-1">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">100%</div>
                <div className="text-green-100 text-xs sm:text-sm md:text-base mt-1">Verified Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
