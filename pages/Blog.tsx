
import React from 'react';
import { ArrowUpRight, Clock, User, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="pb-32 px-6">
      <div className="max-w-7xl mx-auto pt-20 space-y-20">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Qasberry <span className="text-[#9A6CFF]">Insights</span></h1>
          <p className="text-gray-400 text-lg">Thought leadership on the convergence of digitalization, heavy industry, and artificial intelligence.</p>
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
                 <h2 className="text-4xl font-bold leading-tight group-hover:text-[#00F5FF] transition-colors">The Roadmap to Autonomous Extraction: AI in the Oil & Gas Sector</h2>
                 <p className="text-gray-400 leading-relaxed">As the energy landscape shifts, the need for hyper-efficient extraction becomes paramount. We explore how Digital Twins and Computer Vision are redefining rig safety and operational ROI.</p>
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
            { title: 'Beyond the Hype: Practical AI for African SMEs', cat: 'Economy', img: '1' },
            { title: 'Computer Vision vs. Sensors: The Hardware Debate', cat: 'Technical', img: '2' },
            { title: 'Regulatory Landscapes: GDPR in the African Market', cat: 'Governance', img: '3' },
            { title: 'Predicting the Unpredictable: Agriculture Yields', cat: 'AgriTech', img: '4' },
            { title: 'AI Ethics: Bridging the Algorithmic Bias Gap', cat: 'Ethics', img: '5' },
            { title: 'Future-Proofing Your Data Infrastructure', cat: 'Cloud', img: '6' }
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
