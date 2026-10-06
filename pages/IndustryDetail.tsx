
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { INDUSTRIES } from '../constants';
import {
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const IndustryDetail: React.FC = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const industry = INDUSTRIES.find(i => i.id === industryId);

  // Retired sector URLs (e.g. /solutions/healthcare) fall back to the homepage.
  if (!industry) return <Navigate to="/" replace />;

  return (
    <div className="pb-32">
      {/* Hero */}
      <section className="relative pt-20 pb-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-[#00F5FF] tracking-widest uppercase mb-4 hover:translate-x-[-4px] transition-transform">
              <ChevronRight className="rotate-180" size={14} /> Back to Solutions
            </Link>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              {industry.name} <span className="text-[#9A6CFF]">for Sales & Marketing</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              {industry.description} Built for sales teams and marketing agencies that want more pipeline with less manual work.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-8 py-4 bg-[#00F5FF] text-[#0B0F3F] font-bold rounded-xl hover:scale-105 transition-all inline-block text-center">
                Book a Free Audit
              </Link>
              <Link to="/roadmap-builder" className="px-8 py-4 glass text-white font-bold rounded-xl inline-block text-center">Build Your Roadmap</Link>
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-[40px] glass border-white/10"></div>
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
          <h2 className="text-4xl font-bold">What We <span className="text-[#00F5FF]">Build</span></h2>
          <p className="text-gray-400">Modular AI and automation that plugs into the CRM, ad platforms, and messaging tools your team already uses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {industry.capabilities.map((item, idx) => (
            <div key={idx} className="glass p-12 rounded-[40px] border-white/5 hover:border-white/10 transition-all group">
              <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">{item.desc}</p>
              <Link to="/contact" className="text-[#00F5FF] font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                TALK TO US <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Other solutions */}
      <section className="max-w-7xl mx-auto px-6 mt-40 space-y-12">
        <h2 className="text-3xl font-bold text-center">More <span className="text-[#9A6CFF]">Sales & Marketing Solutions</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.filter(i => i.id !== industry.id).map(other => (
            <Link key={other.id} to={`/solutions/${other.id}`} className="glass p-8 rounded-3xl border-white/5 hover:border-[#00F5FF]/30 transition-all space-y-4 group">
              <div className="text-[#00F5FF]">{other.icon}</div>
              <div className="text-lg font-bold group-hover:text-[#00F5FF] transition-colors">{other.name}</div>
              <p className="text-sm text-gray-400">{other.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;
