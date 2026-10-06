
import React from 'react';
import { ArrowUpRight, Clock, User, Tag } from 'lucide-react';

const Blog: React.FC = () => {
   return (
      <div className="pb-32 px-6">
         <div className="max-w-7xl mx-auto pt-20 space-y-20">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
               <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Qasberry <span className="text-[#9A6CFF]">Insights</span></h1>
               <p className="text-gray-400 text-lg">Practical thinking on how AI and automation are changing sales and marketing.</p>
            </div>

            {/* Featured Post */}
            <div className="glass rounded-[40px] border-white/10 overflow-hidden group cursor-pointer">
               <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-[16/10] overflow-hidden">
                     <img src="https://picsum.photos/seed/blog-feat/1200/800" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80" />
                  </div>
                  <div className="p-12 md:p-16 flex flex-col justify-center space-y-8">
                     <div className="flex items-center gap-4 text-[10px] font-bold text-[#00F5FF] uppercase tracking-widest">
                        <Tag size={12} /> Strategic AI
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <Clock size={12} /> 12 Min Read
                     </div>
                     <h2 className="text-4xl font-bold leading-tight group-hover:text-[#00F5FF] transition-colors">The Roadmap to an AI-Powered Sales Pipeline</h2>
                     <p className="text-gray-400 leading-relaxed">Buyers expect instant, personalised responses, and manual follow-up can't keep up. We explore how AI lead scoring, automated follow-ups, and conversational agents are redefining sales productivity and ROI.</p>
                     <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-3">
                           <img src="https://picsum.photos/seed/author/100/100" className="w-10 h-10 rounded-full border border-[#00F5FF]/30" alt="Author" />
                           <div className="text-sm">
                              <div className="font-bold">Dr. Sarah Khumalo</div>
                              <div className="text-xs text-gray-500 uppercase">Chief AI Architect</div>
                           </div>
                        </div>
                        <ArrowUpRight size={24} className="text-gray-500 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                     </div>
                  </div>
               </div>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  { title: 'Beyond the Hype: Practical AI for Sales Teams', cat: 'Sales', img: '1' },
                  { title: 'WhatsApp vs. Email: Where AI Follow-Ups Convert Best', cat: 'Engagement', img: '2' },
                  { title: 'Consent & Compliance: NDPR and GDPR for Marketers', cat: 'Governance', img: '3' },
                  { title: 'Attribution That Works: Tying Ad Spend to Revenue', cat: 'Analytics', img: '4' },
                  { title: 'AI-Written Content Without Losing Your Brand Voice', cat: 'Marketing', img: '5' },
                  { title: 'Cleaning Up Your CRM Before You Add AI', cat: 'CRM', img: '6' }
               ].map((post, idx) => (
                  <div key={idx} className="glass rounded-3xl border-white/5 overflow-hidden group hover:border-[#00F5FF]/20 transition-all flex flex-col">
                     <div className="aspect-[16/10] overflow-hidden relative">
                        <img src={`https://picsum.photos/seed/post${idx}/600/400`} alt={post.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all" />
                        <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[10px] font-bold text-[#00F5FF] uppercase tracking-widest">
                           {post.cat}
                        </div>
                     </div>
                     <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                        <h3 className="text-xl font-bold leading-tight group-hover:text-[#00F5FF] transition-colors">{post.title}</h3>
                        <div className="flex items-center justify-between">
                           <div className="text-xs text-gray-500 font-medium">May 24, 2024</div>
                           <ArrowUpRight size={18} className="text-gray-500 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Blog;
