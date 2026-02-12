
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Globe, Youtube, Download, Cpu, Sparkles, Layers } from 'lucide-react';
import { INDUSTRIES, CASE_STUDIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-32 pb-32">
      {/* Immersive Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden bg-tech-mesh">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00F5FF]/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#9A6CFF]/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Left: Text Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-12 duration-1000">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full text-[10px] font-bold tracking-[0.2em] text-[#00F5FF] uppercase border border-[#00F5FF]/30">
              <Sparkles size={12} className="animate-pulse" />
              Intelligence Reimagined
            </div>

            <h1 className="text-5xl md:text-8xl font-black leading-[0.95] tracking-tighter">
              Bridging the <br />
              <span className="animate-shimmer">Analog Gap</span> <br />
              with <span className="text-white">Ethical AI.</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-light">
              Qasberry Tech empowers industrial giants to transition from legacy manual processes to autonomous, AI-driven agency without compromising on safety or ethics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                to="/contact"
                className="group relative px-10 py-5 bg-[#00F5FF] text-[#0B0F3F] font-black rounded-2xl shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                Book Strategic Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/roadmap-builder"
                className="px-10 py-5 glass text-white font-bold rounded-2xl border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-3"
              >
                Start Roadmap Builder
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-10 border-t border-white/5">
              <div>
                <div className="text-2xl font-bold">150%</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Efficiency Gain</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Asset Monitoring</div>
              </div>
            </div>
          </div>

          {/* Hero Right: The Neural Core Visual */}
          <div className="relative flex items-center justify-center animate-in fade-in slide-in-from-right-12 duration-1000 delay-300">
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] animate-float">
              {/* Outer Glow Rings */}
              <div className="absolute inset-0 rounded-full border border-[#00F5FF]/20 animate-pulse-ring"></div>
              <div className="absolute inset-[-20%] rounded-full border border-[#9A6CFF]/10 animate-pulse-ring" style={{ animationDelay: '1s' }}></div>

              {/* Central Core Shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-80 md:h-80 glass rounded-[60px] rotate-45 border-[#00F5FF]/30 flex items-center justify-center shadow-[0_0_100px_rgba(0,245,255,0.15)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/20 to-[#9A6CFF]/20"></div>
                  <div className="relative -rotate-45 flex flex-col items-center gap-4">
                    <Cpu size={64} className="text-[#00F5FF] animate-pulse" />
                    <div className="text-[10px] font-mono text-[#00F5FF]/60 uppercase tracking-widest">Processing Core</div>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute top-0 right-0 glass p-4 rounded-2xl border-[#00F5FF]/40 -mr-10 animate-float" style={{ animationDelay: '0.5s' }}>
                <ShieldCheck className="text-[#00F5FF]" />
              </div>
              <div className="absolute bottom-10 left-0 glass p-4 rounded-2xl border-[#9A6CFF]/40 -ml-10 animate-float" style={{ animationDelay: '1.5s' }}>
                <Zap className="text-[#9A6CFF]" />
              </div>
              <div className="absolute top-1/2 -right-16 glass p-3 rounded-full border-white/20">
                <div className="w-2 h-2 rounded-full bg-[#00F5FF] animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Value Prop Section with Premium Cards */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Layers className="text-[#00F5FF]" />, title: 'Deep Digitalization', desc: 'We don\'t just layer AI over mess. We restructure your data foundation for maximum model accuracy.' },
          { icon: <Globe className="text-[#9A6CFF]" />, title: 'Regional Expertise', desc: 'Bespoke frameworks built for the unique infrastructure challenges of the African industrial market.' },
          { icon: <ShieldCheck className="text-[#00F5FF]" />, title: 'Governance First', desc: 'Every model we deploy is transparent, auditable, and strictly compliant with global ethical standards.' }
        ].map((item, idx) => (
          <div key={idx} className="group relative glass p-10 rounded-[32px] overflow-hidden hover:translate-y-[-8px] transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
            <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-[#00F5FF]/10 transition-colors">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm font-light">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Industry Solutions with Hover Effects */}
      <section className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Sector <span className="text-[#00F5FF]">Mastery.</span></h2>
            <p className="text-gray-400 max-w-xl">Highly specialized AI implementation across critical industrial verticals.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.id}
              to={`/solutions/${industry.id}`}
              className={`group glass p-8 rounded-[40px] border-white/5 hover:border-[#00F5FF]/30 transition-all duration-500 relative overflow-hidden flex flex-col h-full ${industry.isTitan ? 'bg-gradient-to-br from-[#0B0F3F] to-[#9A6CFF]/10 border-[#9A6CFF]/30' : ''}`}
            >
              {industry.isTitan && (
                <div className="absolute top-6 right-6 text-[10px] font-bold text-[#9A6CFF] tracking-[0.2em] px-3 py-1 glass border-[#9A6CFF]/30 rounded-full uppercase">
                  Titan Sector
                </div>
              )}
              <div className="p-5 bg-white/5 rounded-3xl w-fit mb-8 text-[#00F5FF] group-hover:scale-110 group-hover:bg-[#00F5FF] group-hover:text-[#0B0F3F] transition-all duration-500">
                {industry.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4">{industry.name}</h3>
              <p className="text-gray-400 text-sm mb-10 leading-relaxed flex-grow">{industry.description}</p>
              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-[#00F5FF]">
                Explore Framework
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* YouTube Knowledge Center Preview */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02] -skew-y-3"></div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 text-[#FF0000] font-bold tracking-[0.3em] uppercase text-[10px]">
              <Youtube size={16} />
              The Laboratory
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">Welcome  <br /><span className="text-[#FF0000]">to the Future of AI Learning</span></h2>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              Artificial Intelligence is transforming every industry — and those who understand it will lead the future. At our AI Academy, we provide practical, real-world AI training designed to help you innovate, analyze, strategize, and grow with confidence.            </p>
            <Link to="/knowledge-center" className="inline-flex items-center gap-3 px-10 py-5 glass border-[#FF0000]/20 text-white font-bold rounded-2xl hover:bg-[#FF0000]/10 transition-all">
              Watch Deep Dives <Youtube size={20} />
            </Link>
          </div>
          <div className="relative group">
            <div className="aspect-video glass rounded-[40px] overflow-hidden border-white/10 shadow-2xl relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/3OFvOPa08Qs?si=WHFDqfQY4UI3MpMZ"
                title="Qasberry AI Academy Training"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl border-[#FF0000]/20 hidden md:block animate-float">
              <div className="text-4xl font-black tracking-tighter">150+</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Technical Tutorials</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="glass bg-gradient-to-br from-[#00F5FF]/10 to-[#9A6CFF]/10 p-16 md:p-24 rounded-[60px] border-[#00F5FF]/20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-tech-mesh opacity-10"></div>
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter">Ready to evolve <br /> your operations?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-xl font-light">Our architects are ready to audit your legacy systems and build your custom AI roadmap today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="px-12 py-5 bg-white text-[#0B0F3F] font-black rounded-2xl hover:scale-105 transition-all shadow-2xl">
                Schedule Audit
              </Link>
              <Link to="/roadmap-builder" className="px-12 py-5 glass text-white font-black rounded-2xl hover:bg-white/5 transition-all">
                Try Roadmap Generator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
