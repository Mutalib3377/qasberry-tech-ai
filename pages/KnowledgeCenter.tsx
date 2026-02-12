
import React from 'react';
import { Youtube, Play, ArrowUpRight, GraduationCap, Sparkles, TrendingUp, Users, BookOpen, Award } from 'lucide-react';

const KnowledgeCenter: React.FC = () => {
   return (
      <div className="pb-32 px-6">
         <div className="max-w-7xl mx-auto pt-20 space-y-20">
            {/* Hero Section */}
            <div className="text-center space-y-6 max-w-4xl mx-auto">
               <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-[#FF0000] text-xs font-bold tracking-widest uppercase">
                  <Youtube size={16} />
                  Learn • Transform • Lead
               </div>
               <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-[#00F5FF] to-[#9A6CFF] bg-clip-text text-transparent">
                  Transform Your Career with AI
               </h1>
               <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                  Join thousands of professionals mastering AI through our <span className="text-[#FF0000] font-bold">YouTube channel</span> and <span className="text-[#00F5FF] font-bold">Qasberry Academy</span> — tailored learning paths for every career.
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a href="https://www.youtube.com/@QasberryTech" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 bg-[#FF0000] text-white font-bold rounded-xl shadow-2xl hover:scale-105 transition-all">
                     <Youtube size={24} />
                     Subscribe on YouTube
                     <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                  <a href="https://edu.qasberry.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 glass border-2 border-[#00F5FF] text-[#00F5FF] font-bold rounded-xl hover:bg-[#00F5FF]/10 transition-all">
                     <GraduationCap size={24} />
                     Explore Academy
                  </a>
               </div>
            </div>

            {/* YouTube Channel Showcase */}
            <div className="space-y-8">
               <div className="flex items-center justify-between">
                  <div className="space-y-2">
                     <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                        <Youtube className="text-[#FF0000]" size={36} />
                        Latest from Our Channel
                     </h2>
                     <p className="text-gray-400">Real-world AI applications, tutorials, and case studies</p>
                  </div>
                  <a href="https://www.youtube.com/@QasberryTech" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-[#FF0000] font-bold hover:gap-4 transition-all">
                     View All Videos
                     <ArrowUpRight size={20} />
                  </a>
               </div>

               {/* Featured Video */}
               <a href="https://youtu.be/RJvJpxziQ2c" target="_blank" rel="noopener noreferrer" className="glass rounded-[40px] overflow-hidden border-white/10 group cursor-pointer shadow-2xl hover:border-[#FF0000]/30 transition-all block">
                  <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                     <div className="aspect-video relative overflow-hidden">
                        <img src="https://img.youtube.com/vi/RJvJpxziQ2c/maxresdefault.jpg" alt="GenAI vs Agentic AI" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-24 h-24 bg-[#FF0000]/90 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform shadow-2xl">
                              <Play size={40} className="text-white fill-white translate-x-1" />
                           </div>
                        </div>
                        <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-lg text-xs font-bold text-[#FF0000] flex items-center gap-2">
                           <span className="w-2 h-2 bg-[#FF0000] rounded-full animate-pulse"></span>
                           FEATURED
                        </div>
                     </div>
                     <div className="p-12 space-y-6">
                        <div className="text-xs font-bold text-[#00F5FF] tracking-widest uppercase">Latest Tutorial</div>
                        <h2 className="text-3xl font-bold leading-tight">GenAI vs Agentic AI Explained in 10 Minutes</h2>
                        <p className="text-gray-400">Missed the full AI webinar? Here's a 10-minute recap that breaks it all down. Explore the key insights from our exclusive deep dive into GenAI and Agentic AI.</p>
                        <div className="flex items-center gap-8 pt-4">
                           <div className="text-center">
                              <div className="text-2xl font-bold text-[#FF0000]">▶</div>
                              <div className="text-[10px] text-gray-500 uppercase tracking-wider">Watch Now</div>
                           </div>
                           <div className="text-center">
                              <div className="text-2xl font-bold text-[#00F5FF]">10min</div>
                              <div className="text-[10px] text-gray-500 uppercase tracking-wider">Duration</div>
                           </div>
                           <div className="text-center">
                              <div className="text-2xl font-bold text-[#00F5FF]">NEW</div>
                              <div className="text-[10px] text-gray-500 uppercase tracking-wider">Latest</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>

               {/* Video Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                     {
                        id: 'gatHQCYqzVI',
                        title: 'Machine Learning for Business — A Practical Guide for Leaders & Managers',
                        category: 'Business',
                        url: 'https://youtu.be/gatHQCYqzVI'
                     },
                     {
                        id: '3OFvOPa08Qs',
                        title: 'This AI Will Change Everything – Are You Ready for It?',
                        category: 'AI Trends',
                        url: 'https://youtu.be/3OFvOPa08Qs'
                     },
                     {
                        id: 'CcSV4VeCoU8',
                        title: 'Can You Spot the AI? 99% of People Get This WRONG 😳',
                        category: 'AI Detection',
                        url: 'https://youtu.be/CcSV4VeCoU8'
                     },
                     {
                        id: 'fUWCYNQ83sk',
                        title: 'Acquiring Data for AI in Oil & Gas — The Real Challenge',
                        category: 'Industry',
                        url: 'https://youtu.be/fUWCYNQ83sk'
                     },
                     {
                        id: 'T2JCRuwJGHQ',
                        title: 'Automating Your Workflow with AI Assistants - ChatGPT Secrets',
                        category: 'Productivity',
                        url: 'https://youtu.be/T2JCRuwJGHQ'
                     },
                     {
                        id: 'tW6M4qM0-wE',
                        title: 'AI For You — Simple Ways AI Makes Life Easier & Boosts Your Career',
                        category: 'Career Growth',
                        url: 'https://youtu.be/tW6M4qM0-wE'
                     }
                  ].map((video, idx) => (
                     <a key={idx} href={video.url} target="_blank" rel="noopener noreferrer" className="glass rounded-3xl overflow-hidden border-white/5 hover:border-[#FF0000]/30 group cursor-pointer transition-all hover:shadow-2xl block">
                        <div className="aspect-video relative">
                           <img src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} alt={video.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all" />
                           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center shadow-2xl">
                                 <Play size={24} className="text-white fill-white translate-x-0.5" />
                              </div>
                           </div>
                        </div>
                        <div className="p-6 space-y-4">
                           <div className="text-[10px] font-bold text-[#00F5FF] uppercase tracking-widest">{video.category}</div>
                           <h3 className="font-bold leading-tight group-hover:text-[#00F5FF] transition-colors line-clamp-2">{video.title}</h3>
                           <div className="flex items-center justify-between pt-2">
                              <div className="flex items-center gap-2 text-[10px] text-gray-500 font-medium">
                                 <Youtube size={12} className="text-[#FF0000]" /> Qasberry Tech
                              </div>
                              <ArrowUpRight size={16} className="text-gray-500 group-hover:text-[#FF0000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                           </div>
                        </div>
                     </a>
                  ))}
               </div>
            </div>

            {/* Academy Section */}
            <div id="academy" className="space-y-12">
               <div className="text-center space-y-4 max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-[#00F5FF] text-xs font-bold tracking-widest uppercase">
                     <GraduationCap size={16} />
                     Qasberry Academy
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                     Career-Specific AI Mastery
                  </h2>
                  <p className="text-gray-300 text-lg">
                     Structured learning paths designed for your industry. Go from AI-curious to AI-expert and lead your field.
                  </p>
               </div>

               {/* Academy Features */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="glass p-8 rounded-3xl border-white/5 hover:border-[#00F5FF]/30 transition-all space-y-4">
                     <div className="w-14 h-14 bg-gradient-to-br from-[#00F5FF] to-[#9A6CFF] rounded-2xl flex items-center justify-center">
                        <BookOpen size={28} className="text-white" />
                     </div>
                     <h3 className="text-xl font-bold">Industry-Tailored Courses</h3>
                     <p className="text-gray-400 text-sm">Learn AI applications specific to your career — healthcare, finance, marketing, engineering, and more.</p>
                  </div>
                  <div className="glass p-8 rounded-3xl border-white/5 hover:border-[#00F5FF]/30 transition-all space-y-4">
                     <div className="w-14 h-14 bg-gradient-to-br from-[#9A6CFF] to-[#FF0000] rounded-2xl flex items-center justify-center">
                        <TrendingUp size={28} className="text-white" />
                     </div>
                     <h3 className="text-xl font-bold">Hands-On Projects</h3>
                     <p className="text-gray-400 text-sm">Build real-world AI solutions with guided projects that you can showcase in your portfolio.</p>
                  </div>
                  <div className="glass p-8 rounded-3xl border-white/5 hover:border-[#00F5FF]/30 transition-all space-y-4">
                     <div className="w-14 h-14 bg-gradient-to-br from-[#FF0000] to-[#00F5FF] rounded-2xl flex items-center justify-center">
                        <Award size={28} className="text-white" />
                     </div>
                     <h3 className="text-xl font-bold">Certification & Recognition</h3>
                     <p className="text-gray-400 text-sm">Earn industry-recognized certificates that prove your AI expertise to employers and clients.</p>
                  </div>
               </div>

               {/* Learning Paths */}
               <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-center">Choose Your Learning Path</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {[
                        { career: 'Business Leaders & Executives', icon: '💼', color: 'from-purple-500 to-pink-500', topics: 'AI Strategy, ROI Analysis, Team Leadership' },
                        { career: 'Healthcare Professionals', icon: '🏥', color: 'from-blue-500 to-cyan-500', topics: 'Predictive Analytics, Patient Care, Diagnostics' },
                        { career: 'Engineers & Developers', icon: '⚙️', color: 'from-green-500 to-teal-500', topics: 'ML Models, Deployment, System Integration' },
                        { career: 'Marketing & Sales', icon: '📊', color: 'from-orange-500 to-red-500', topics: 'Customer Insights, Automation, Personalization' },
                        { career: 'Finance & Analytics', icon: '💰', color: 'from-yellow-500 to-orange-500', topics: 'Forecasting, Risk Analysis, Trading Algorithms' },
                        { career: 'Legal & Compliance', icon: '⚖️', color: 'from-indigo-500 to-purple-500', topics: 'Contract Analysis, Due Diligence, Compliance' }
                     ].map((path, idx) => (
                        <a key={idx} href="https://edu.qasberry.com/" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-2xl border-white/5 hover:border-[#00F5FF]/30 group cursor-pointer transition-all flex items-center gap-6">
                           <div className={`w-16 h-16 bg-gradient-to-br ${path.color} rounded-xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform`}>
                              {path.icon}
                           </div>
                           <div className="space-y-2">
                              <h4 className="font-bold text-lg group-hover:text-[#00F5FF] transition-colors">{path.career}</h4>
                              <p className="text-xs text-gray-400">{path.topics}</p>
                           </div>
                           <ArrowUpRight size={20} className="ml-auto text-gray-500 group-hover:text-[#00F5FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </a>
                     ))}
                  </div>
               </div>

               {/* Academy CTA */}
               <div className="glass p-12 md:p-16 rounded-[40px] text-center space-y-8 border-2 border-[#00F5FF]/20 bg-gradient-to-br from-[#00F5FF]/5 to-[#9A6CFF]/5">
                  <div className="space-y-4">
                     <h2 className="text-3xl md:text-5xl font-extrabold">Rise Above the Competition</h2>
                     <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Join <span className="text-[#00F5FF] font-bold">5,000+ professionals</span> who've transformed their careers with AI knowledge. Start your journey today.
                     </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                     <a href="https://edu.qasberry.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#00F5FF] to-[#9A6CFF] text-white font-bold rounded-xl shadow-2xl hover:scale-105 transition-all">
                        <GraduationCap size={24} />
                        Start Learning Free
                        <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                     </a>
                     <a href="https://edu.qasberry.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-10 py-5 glass border-2 border-white/20 font-bold rounded-xl hover:bg-white/5 transition-all">
                        <Users size={24} />
                        View Success Stories
                     </a>
                  </div>
                  <p className="text-xs text-gray-500">No credit card required • 7-day free trial • Cancel anytime</p>
               </div>
            </div>

            {/* Newsletter Section */}
            <div className="glass p-12 md:p-16 rounded-[40px] text-center space-y-8 border-white/5">
               <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">Stay Ahead of the Curve</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                     Get weekly AI insights, career tips, and exclusive content delivered to your inbox. Join our community of forward-thinking professionals.
                  </p>
               </div>
               <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                  <input
                     type="email"
                     placeholder="Enter your email"
                     className="flex-grow glass py-4 px-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00F5FF] border border-white/10"
                  />
                  <button className="px-8 py-4 bg-[#00F5FF] text-[#0B0F3F] font-bold rounded-xl shadow-lg hover:scale-105 transition-all whitespace-nowrap">
                     Subscribe Free
                  </button>
               </div>
               <p className="text-xs text-gray-500">Join 15,000+ subscribers • Unsubscribe anytime</p>
            </div>
         </div>
      </div>
   );
};

export default KnowledgeCenter;
