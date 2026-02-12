
import React from 'react';
import { Mail, Phone, MapPin, Calendar, Clock, ArrowRight, Globe } from 'lucide-react';

const Contact: React.FC = () => {
   return (
      <div className="pb-32 px-6">
         <div className="max-w-7xl mx-auto pt-20 space-y-20">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
               <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Start Your <span className="text-[#9A6CFF]">Evolution</span></h1>
               <p className="text-gray-400 text-lg">Connect with our senior architects to discuss strategic AI implementation for your business.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
               {/* Booking UI Mockup */}
               <div className="glass rounded-[40px] border-white/10 overflow-hidden shadow-2xl">
                  <div className="p-8 border-b border-white/5 flex items-center justify-between">
                     <div>
                        <h2 className="text-2xl font-bold">1:1 Strategy Session</h2>
                        <p className="text-sm text-gray-500">45 Minutes • Video Conference</p>
                     </div>
                     <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-[#00F5FF]">
                        <Calendar />
                     </div>
                  </div>
                  <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-6">
                        <h3 className="font-bold text-sm uppercase tracking-widest text-[#9A6CFF]">Select a Date</h3>
                        {/* Mock Calendar Grid */}
                        <div className="grid grid-cols-7 gap-2 text-center text-xs">
                           {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => <div key={d} className="text-gray-500 font-bold mb-2">{d}</div>)}
                           {Array.from({ length: 31 }).map((_, i) => (
                              <div key={i} className={`py-2 rounded-lg cursor-pointer hover:bg-[#00F5FF]/20 ${i + 1 === 24 ? 'bg-[#00F5FF] text-[#0B0F3F] font-bold' : 'glass'}`}>
                                 {i + 1}
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="space-y-6">
                        <h3 className="font-bold text-sm uppercase tracking-widest text-[#9A6CFF]">Select a Time</h3>
                        <div className="space-y-3">
                           {['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'].map(time => (
                              <button key={time} className="w-full py-3 glass border-white/5 rounded-xl hover:border-[#00F5FF]/50 transition-all text-sm font-medium">
                                 {time}
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="p-8 bg-white/5 flex items-center justify-between">
                     <div className="flex items-center gap-3 text-sm text-gray-400">
                        <Clock size={16} />
                        Timezone: WAT (West Africa Time)
                     </div>
                     <button className="px-8 py-3 bg-[#00F5FF] text-[#0B0F3F] font-bold rounded-xl shadow-lg hover:scale-105 transition-all">
                        Continue
                     </button>
                  </div>
               </div>

               {/* Conventional Contact Info */}
               <div className="space-y-12">
                  <div className="space-y-8">
                     <h2 className="text-3xl font-bold">Get in Touch</h2>
                     <div className="space-y-6">
                        <div className="flex items-center gap-6 group cursor-pointer">
                           <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-[#00F5FF] group-hover:bg-[#00F5FF] group-hover:text-[#0B0F3F] transition-all">
                              <Mail size={24} />
                           </div>
                           <div>
                              <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email Us</div>
                              <div className="text-xl font-medium">qasberrytech@gmail.com</div>
                           </div>
                        </div>
                        <div className="flex items-center gap-6 group cursor-pointer">
                           <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-[#00F5FF] group-hover:bg-[#00F5FF] group-hover:text-[#0B0F3F] transition-all">
                              <Globe size={24} />
                           </div>
                           <div>
                              <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Presence</div>
                              <div className="text-xl font-medium">Remote-First • Pan-African Reach</div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="glass p-10 rounded-3xl border-white/5 space-y-6">
                     <h3 className="text-2xl font-bold">Global Network</h3>
                     <p className="text-gray-400">While our core is in South Africa, we operate globally, providing remote AI architecture and on-site industrial audits across the continent and beyond.</p>
                     <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                           <div className="w-3 h-3 rounded-full bg-[#00F5FF] neon-cyan-glow mb-2"></div>
                           <div className="text-[10px] font-bold text-gray-500 uppercase">Africa</div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
