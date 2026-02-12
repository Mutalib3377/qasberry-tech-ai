
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { INDUSTRIES } from '../constants';
import { Industry } from '../types';
import { 
  ShieldAlert, 
  Cpu, 
  BarChart3, 
  Settings, 
  ArrowRight,
  ChevronRight,
  Zap
} from 'lucide-react';

const IndustryDetail: React.FC = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const industry = INDUSTRIES.find(i => i.id === industryId);

  if (!industry) return <div>Industry not found</div>;

  const isOilGas = industry.id === Industry.OilGas;

  return (
    <div className={`pb-32 ${isOilGas ? 'bg-gradient-to-b from-[#0B0F3F] via-[#0B0F3F] to-[#0B0F3F]' : ''}`}>
      {/* Hero */}
      <section className="relative pt-20 pb-40 px-6 overflow-hidden">
        {isOilGas && (
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="absolute top-0 right-0 w-[50%] h-full bg-[#9A6CFF] blur-[150px] rounded-full"></div>
          </div>
        )}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-[#00F5FF] tracking-widest uppercase mb-4 hover:translate-x-[-4px] transition-transform">
              <ChevronRight className="rotate-180" size={14} /> Back to Sectors
            </Link>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              {industry.name} <span className="text-[#9A6CFF]">Evolution</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              {industry.description} We deploy industrial-grade AI that handles the harsh realities of {industry.name} operations.
            </p>
            <div className="flex gap-4">
               <Link to="/contact" className="px-8 py-4 bg-[#00F5FF] text-[#0B0F3F] font-bold rounded-xl hover:scale-105 transition-all inline-block text-center">
                 Book Sector Audit
               </Link>
               <button className="px-8 py-4 glass text-white font-bold rounded-xl">View Solutions</button>
            </div>
          </div>
          <div className="relative aspect-square">
            <div className={`absolute inset-0 rounded-[40px] glass border-white/10 ${isOilGas ? 'rotate-3 scale-105 border-[#9A6CFF]/30 shadow-[0_0_50px_rgba(154,108,255,0.1)]' : ''}`}></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-20 text-[#00F5FF] animate-pulse">
                   {industry.icon}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Breakdown */}
      <section className="max-w-7xl mx-auto px-6 space-y-24">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">Comprehensive <span className="text-[#00F5FF]">Frameworks</span></h2>
          <p className="text-gray-400">Our modular AI engines are designed for rapid deployment and seamless integration into existing operational workflows.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { 
              title: isOilGas ? 'Rig Safety Computer Vision' : 'AI-Enhanced Diagnostics', 
              icon: <ShieldAlert className="text-[#FF0055]" />, 
              desc: 'Continuous real-time monitoring of personnel and equipment to prevent hazardous incidents before they occur.' 
            },
            { 
              title: isOilGas ? 'Predictive Maintenance' : 'Resource Allocation AI', 
              icon: <Settings className="text-[#00F5FF]" />, 
              desc: 'Algorithmic forecasting of asset failure based on telemetry, vibration, and historical usage patterns.' 
            },
            { 
              title: 'Digital Twin Simulations', 
              icon: <Cpu className="text-[#9A6CFF]" />, 
              desc: 'High-fidelity virtual replicas of physical assets for scenario planning and stress testing.' 
            },
            { 
              title: 'ROI Optimization Engine', 
              icon: <BarChart3 className="text-[#00F5FF]" />, 
              desc: 'Dynamic analysis of operational efficiency, highlighting bottlenecks and suggesting automated fixes.' 
            }
          ].map((item, idx) => (
            <div key={idx} className="glass p-12 rounded-[40px] border-white/5 hover:border-white/10 transition-all group">
              <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">{item.desc}</p>
              <button className="text-[#00F5FF] font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                LEARN MORE <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Specific Titan Content (if Oil & Gas) */}
      {isOilGas && (
        <section className="max-w-7xl mx-auto px-6 mt-32">
          <div className="glass bg-gradient-to-r from-[#9A6CFF]/20 to-[#00F5FF]/10 p-12 md:p-20 rounded-[40px] border-[#9A6CFF]/30">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-6">
                   <div className="inline-block px-4 py-1 glass border-[#9A6CFF]/40 text-[#9A6CFF] text-[10px] font-bold tracking-widest rounded-full uppercase">Titan Protocol</div>
                   <h2 className="text-4xl font-bold">Securing the Future of Extraction.</h2>
                   <p className="text-gray-300">The Qasberry Titan Protocol is specifically engineered for high-risk offshore and onshore extraction environments, providing unparalleled predictive accuracy and safety assurance.</p>
                   <ul className="space-y-4">
                      {['99.8% Incident Prevention Rate', 'Real-time Telemetry Processing', 'Autonomous Rig Re-balancing'].map(li => (
                        <li key={li} className="flex items-center gap-3 text-sm font-medium">
                           <Zap size={16} className="text-[#00F5FF]" /> {li}
                        </li>
                      ))}
                   </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   {[1, 2, 3, 4].map(i => (
                     <div key={i} className="aspect-square glass rounded-2xl border-white/10 flex items-center justify-center">
                        <Cpu className="text-[#9A6CFF] opacity-30" size={40} />
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>
      )}

      {/* Case Study Summary */}
      <section className="max-w-7xl mx-auto px-6 mt-40 space-y-12">
        <h2 className="text-3xl font-bold text-center">Sector <span className="text-[#9A6CFF]">Success Stories</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="glass p-10 rounded-3xl border-white/5 space-y-6">
              <div className="text-4xl font-black text-[#00F5FF]">24%</div>
              <div className="text-sm font-bold uppercase tracking-widest">Reduction in Operational Costs</div>
              <p className="text-sm text-gray-400">Achieved through autonomous fuel management and predictive maintenance cycles for a leading energy firm.</p>
           </div>
           <div className="glass p-10 rounded-3xl border-white/5 space-y-6">
              <div className="text-4xl font-black text-[#9A6CFF]">15%</div>
              <div className="text-sm font-bold uppercase tracking-widest">Efficiency Increase</div>
              <p className="text-sm text-gray-400">Delivered via automated logistics scheduling and AI-driven supply chain transparency.</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;
