import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Youtube, Layers, CheckCircle2, PlayCircle, BarChart3, Clock } from 'lucide-react';
import { INDUSTRIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-24 bg-[#0B0F3F] text-white selection:bg-[#00F5FF] selection:text-[#0B0F3F] font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 pt-20 overflow-hidden">
        {/* Soft Premium Gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#00F5FF]/10 blur-[150px] rounded-full mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#9A6CFF]/10 blur-[150px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[#00F5FF]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F5FF]"></span>
              </span>
              Simple. Smart. Automated.
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
              We Make Your Business <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#9A6CFF]">Run Itself.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              Stop wasting hours on manual work. We build custom software and AI tools that automate your daily tasks, so you can focus on what truly matters: growing your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-[#0B0F3F] font-semibold rounded-xl hover:bg-gray-100 hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                Get a Free Audit
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/roadmap-builder"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                See How It Works
                <PlayCircle size={18} />
              </Link>
            </div>
            
            <div className="flex items-center gap-6 pt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00F5FF]" /> No technical skills required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00F5FF]" /> Built for your exact needs
              </div>
            </div>
          </div>

          {/* Visual Content: Clean, minimal abstract representation of automation */}
          <div className="relative w-full aspect-square max-w-lg mx-auto lg:ml-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-sm p-8 flex flex-col justify-between transform rotate-2 hover:rotate-0 transition-transform duration-700">
              
              {/* Fake UI Elements representing time saved */}
              <div className="flex justify-between items-center pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00F5FF]/20 flex items-center justify-center text-[#00F5FF]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Hours Saved This Week</div>
                    <div className="text-2xl font-bold text-white">42.5 hrs</div>
                  </div>
                </div>
                <BarChart3 className="text-gray-500" size={24} />
              </div>

              <div className="space-y-4 my-auto">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="w-6 h-6 rounded-full bg-[#9A6CFF]/20 flex items-center justify-center">
                      <CheckCircle2 size={14} className="text-[#9A6CFF]" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-2 bg-white/20 rounded-full w-3/4"></div>
                      <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
                    </div>
                    <div className="text-xs text-[#00F5FF] font-medium uppercase tracking-wider">Automated</div>
                  </div>
                ))}
              </div>

            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 bg-[#0B0F3F] border border-white/10 p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <div>
                  <div className="text-xs text-gray-400">Efficiency</div>
                  <div className="text-sm font-bold text-[#00F5FF]">+150%</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Value Props - Layman Terms */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            icon: <Layers size={28} className="text-[#00F5FF]" />, 
            title: 'Works for Any Business', 
            desc: 'Whether you run a local shop or a large company, our tools are custom-built to fit exactly how you work.' 
          },
          { 
            icon: <Zap size={28} className="text-[#9A6CFF]" />, 
            title: 'Save Hours Every Day', 
            desc: 'Imagine your repetitive tasks happening instantly without you lifting a finger. That is what we deliver.' 
          },
          { 
            icon: <ShieldCheck size={28} className="text-[#00F5FF]" />, 
            title: 'Safe & Secure', 
            desc: 'Your data is highly protected. We build everything with top-tier security so you can have total peace of mind.' 
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300">
            <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm font-light">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Industry Solutions - Clean Cards */}
      <section className="max-w-7xl mx-auto px-6 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Solutions Built for You.</h2>
          <p className="text-gray-400 text-lg font-light">We have helped businesses across various fields automate their most painful workflows. See what we can do for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.id}
              to={`/solutions/${industry.id}`}
              className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-[#00F5FF]/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            >
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/0 to-[#00F5FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 rounded-xl text-white group-hover:bg-[#00F5FF] group-hover:text-[#0B0F3F] transition-colors duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow font-light">
                  {industry.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#00F5FF] group-hover:text-white transition-colors">
                  Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Educational Section - Simple & Friendly */}
      <section className="max-w-7xl mx-auto px-6 pt-16">
        <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#FF0000] font-semibold text-sm bg-[#FF0000]/10 px-4 py-2 rounded-full">
              <Youtube size={16} /> Free Training
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Want to see exactly how <br className="hidden md:block"/> automation works?
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              You don't need to be a tech expert. Watch our simple, easy-to-understand videos where we break down how AI and automation can save you time and money.
            </p>
            <div className="pt-4">
              <Link to="/knowledge-center" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all">
                Watch Free Tutorials <PlayCircle size={18} />
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 aspect-video bg-black/50 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/3OFvOPa08Qs?si=WHFDqfQY4UI3MpMZ"
              title="Qasberry AI Academy Training"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Final CTA - Super Clean */}
      <section className="max-w-4xl mx-auto px-6 pt-16 text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Ready to save time?
        </h2>
        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
          Let's chat. We'll look at how you currently work and show you exactly what tasks can be taken off your plate.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link to="/contact" className="px-10 py-5 bg-[#00F5FF] text-[#0B0F3F] font-bold rounded-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,245,255,0.3)]">
            Contact Us Today
          </Link>
          <Link to="/roadmap-builder" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
            Try the Free Tool
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
