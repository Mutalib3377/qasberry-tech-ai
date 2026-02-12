
import React from 'react';
import { Download, FileText, BarChart3, ShieldCheck, Mail } from 'lucide-react';

const Resources: React.FC = () => {
  return (
    <div className="pb-32 px-6">
      <div className="max-w-7xl mx-auto pt-20 space-y-20">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Resource <span className="text-[#00F5FF]">Library</span></h1>
          <p className="text-gray-400 text-lg">Download exclusive reports, industry frameworks, and ethical AI guidelines developed by Qasberry engineers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: 'Ethical AI Governance Framework', 
              type: 'PDF Report', 
              icon: <ShieldCheck className="text-[#9A6CFF]" />, 
              desc: 'A comprehensive guide to ensuring transparency and regulatory compliance in African AI deployments.' 
            },
            { 
              title: '2024 Industrial AI Trends', 
              type: 'Industry Report', 
              icon: <BarChart3 className="text-[#00F5FF]" />, 
              desc: 'Data-driven insights into AI adoption rates across Oil & Gas, Healthcare, and Agriculture sectors.' 
            },
            { 
              title: 'Analog-to-AI Transition Guide', 
              type: 'Whitepaper', 
              icon: <FileText className="text-[#00F5FF]" />, 
              desc: 'Step-by-step methodology for digitizing legacy industrial workflows for machine learning readiness.' 
            },
            { 
              title: 'Computer Vision for Safety', 
              type: 'Technical Specs', 
              icon: <ShieldCheck className="text-[#9A6CFF]" />, 
              desc: 'Detailed breakdown of rig safety monitoring using edge-deployed vision models.' 
            },
            { 
              title: 'AI ROI Calculator Template', 
              type: 'Excel Framework', 
              icon: <BarChart3 className="text-[#00F5FF]" />, 
              desc: 'Framework for projecting financial impact and operational efficiency gains from AI implementation.' 
            },
            { 
              title: 'Regulatory Compliance Checklist', 
              type: 'Legal Brief', 
              icon: <FileText className="text-[#00F5FF]" />, 
              desc: 'Local and international (GDPR) data sovereignty requirements for African tech operations.' 
            }
          ].map((item, idx) => (
            <div key={idx} className="glass p-10 rounded-3xl border-white/5 hover:border-[#00F5FF]/30 transition-all flex flex-col group">
               <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {item.icon}
               </div>
               <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">{item.type}</div>
               <h3 className="text-xl font-bold mb-4">{item.title}</h3>
               <p className="text-gray-400 text-sm mb-8 flex-grow">{item.desc}</p>
               <button className="w-full py-4 glass border-[#00F5FF]/20 text-[#00F5FF] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#00F5FF] hover:text-[#0B0F3F] transition-all">
                  <Download size={18} /> Download Resource
               </button>
            </div>
          ))}
        </div>

        {/* Gated Lead Gen Section */}
        <div className="relative overflow-hidden glass rounded-[40px] border-[#9A6CFF]/20 p-12 md:p-24">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#9A6CFF]/10 blur-[100px] rounded-full"></div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-6">
                 <h2 className="text-4xl font-bold leading-tight">Get Exclusive Industry Intelligence</h2>
                 <p className="text-gray-300">Join 5,000+ industry leaders who receive our bi-weekly "Deep Space" intelligence briefing—curated AI trends specifically for the African market.</p>
                 <div className="space-y-4">
                    {['Priority Access to Reports', 'Invites to Technical Webinars', 'Monthly AI ROI Benchmarks'].map(li => (
                      <div key={li} className="flex items-center gap-3 text-sm font-medium">
                        <div className="w-5 h-5 bg-[#00F5FF]/20 rounded flex items-center justify-center text-[#00F5FF]">
                           <Download size={12} />
                        </div>
                        {li}
                      </div>
                    ))}
                 </div>
              </div>
              <div className="glass p-8 rounded-3xl border-white/10 space-y-6 bg-white/5 shadow-2xl">
                 <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-400">Full Name</label>
                    <input type="text" className="w-full glass py-3 px-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#00F5FF]" placeholder="John Doe" />
                 </div>
                 <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-400">Work Email</label>
                    <input type="email" className="w-full glass py-3 px-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#00F5FF]" placeholder="john@company.com" />
                 </div>
                 <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-400">Industry</label>
                    <select className="w-full glass py-3 px-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#00F5FF] appearance-none">
                       <option>Oil & Gas</option>
                       <option>Healthcare</option>
                       <option>Agriculture</option>
                       <option>Automotive</option>
                    </select>
                 </div>
                 <button className="w-full py-4 bg-[#9A6CFF] text-white font-bold rounded-xl shadow-lg hover:scale-[1.02] transition-all">
                    Unlock Premium Content
                 </button>
                 <p className="text-[10px] text-gray-500 text-center">By signing up, you agree to our Privacy Policy and ethical data usage terms.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
