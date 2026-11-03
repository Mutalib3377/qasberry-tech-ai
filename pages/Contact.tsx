
import React, { useState } from 'react';
import { Mail, Globe, Calendar, Clock, CheckCircle, Loader, AlertCircle } from 'lucide-react';

const MONTHS = [
   'January', 'February', 'March', 'April', 'May', 'June',
   'July', 'August', 'September', 'October', 'November', 'December',
];

const DAYS_IN_MONTH = (month: number, year: number) =>
   new Date(year, month + 1, 0).getDate();

const TIMES = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'];

// ── Web3Forms access key ─────────────────────────────────────────────────────
// Get your free key at https://web3forms.com → enter info@qasberry.com → check inbox
const WEB3FORMS_ACCESS_KEY = '2ebb84a9-252c-4a31-8c6e-7a883cb36ad5';
// ─────────────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
   const now = new Date();
   const [selectedMonth, setSelectedMonth] = useState<number>(now.getMonth());
   const [selectedYear] = useState<number>(now.getFullYear());
   const [selectedDate, setSelectedDate] = useState<number | null>(null);
   const [selectedTime, setSelectedTime] = useState<string | null>(null);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [status, setStatus] = useState<Status>('idle');

   const totalDays = DAYS_IN_MONTH(selectedMonth, selectedYear);

   const handleMonthChange = (direction: -1 | 1) => {
      setSelectedMonth(prev => {
         const next = prev + direction;
         if (next < 0) return 11;
         if (next > 11) return 0;
         return next;
      });
      setSelectedDate(null);
   };

   const handleBooking = async () => {
      if (!name.trim() || !email.trim() || !selectedDate || !selectedTime) {
         alert('Please fill in your name, email, and select a date & time slot.');
         return;
      }

      const dateLabel = `${MONTHS[selectedMonth]} ${selectedDate}, ${selectedYear}`;

      setStatus('sending');

      try {
         const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
               access_key: WEB3FORMS_ACCESS_KEY,
               subject: 'New Booking: 1:1 Strategy Session',
               from_name: name.trim(),
               email: email.trim(),
               message:
                  `Name: ${name.trim()}\n` +
                  `Email: ${email.trim()}\n\n` +
                  `Booking Date: ${dateLabel}\n` +
                  `Booking Time: ${selectedTime}\n` +
                  `Timezone: WAT (West Africa Time)`,
            }),
         });
         const data = await res.json();
         if (data.success) {
            setStatus('success');
         } else {
            throw new Error(data.message || 'Submission failed');
         }
      } catch (err) {
         console.error('Web3Forms error:', err);
         setStatus('error');
      }
   };

   const resetForm = () => {
      setName('');
      setEmail('');
      setSelectedDate(null);
      setSelectedTime(null);
      setStatus('idle');
   };

   return (
      <div className="pb-32 px-6">
         <div className="max-w-7xl mx-auto pt-20 space-y-20">

            {/* Heading */}
            <div className="text-center space-y-6 max-w-3xl mx-auto">
               <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                  Start Your <span className="text-[#9A6CFF]">Evolution</span>
               </h1>
               <p className="text-gray-400 text-lg">
                  Connect with our senior architects to discuss strategic AI implementation for your business.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

               {/* ── Booking Card ─────────────────────────────────────────────── */}
               <div className="glass rounded-[40px] border-white/10 overflow-hidden shadow-2xl">

                  {/* Card header */}
                  <div className="p-8 border-b border-white/5 flex items-center justify-between">
                     <div>
                        <h2 className="text-2xl font-bold">1:1 Strategy Session</h2>
                        <p className="text-sm text-gray-500">45 Minutes • Video Conference</p>
                     </div>
                     <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-[#00F5FF]">
                        <Calendar />
                     </div>
                  </div>

                  {/* ── Success state ────────────────────────────────────────── */}
                  {status === 'success' && (
                     <div className="p-12 flex flex-col items-center gap-6 text-center">
                        <div className="w-20 h-20 rounded-full bg-[#00F5FF]/10 flex items-center justify-center">
                           <CheckCircle size={40} className="text-[#00F5FF]" />
                        </div>
                        <div>
                           <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>
                           <p className="text-gray-400 text-sm leading-relaxed">
                              Your request has been sent to <span className="text-[#00F5FF]">info@qasberry.com</span>.<br />
                              We'll get back to you shortly.
                           </p>
                        </div>
                        <button
                           onClick={resetForm}
                           className="mt-4 px-8 py-3 glass border border-white/10 text-sm font-semibold rounded-xl hover:border-[#00F5FF]/50 transition-all"
                        >
                           Book Another Session
                        </button>
                     </div>
                  )}

                  {/* ── Error state ──────────────────────────────────────────── */}
                  {status === 'error' && (
                     <div className="p-12 flex flex-col items-center gap-6 text-center">
                        <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center">
                           <AlertCircle size={40} className="text-red-400" />
                        </div>
                        <div>
                           <h3 className="text-2xl font-bold mb-2">Something went wrong</h3>
                           <p className="text-gray-400 text-sm leading-relaxed">
                              We couldn't send your booking. Please try again or email us directly at{' '}
                              <a href="mailto:info@qasberry.com" className="text-[#00F5FF] hover:underline">
                                 info@qasberry.com
                              </a>.
                           </p>
                        </div>
                        <button
                           onClick={() => setStatus('idle')}
                           className="mt-4 px-8 py-3 glass border border-white/10 text-sm font-semibold rounded-xl hover:border-[#00F5FF]/50 transition-all"
                        >
                           Try Again
                        </button>
                     </div>
                  )}

                  {/* ── Booking form ─────────────────────────────────────────── */}
                  {(status === 'idle' || status === 'sending') && (
                     <>
                        <div className="p-8 space-y-8">

                           {/* Name & Email */}
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                 <label className="text-xs font-bold uppercase tracking-widest text-[#9A6CFF]">Your Name</label>
                                 <input
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Jane Doe"
                                    className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00F5FF] transition-all placeholder-gray-600"
                                 />
                              </div>
                              <div className="space-y-2">
                                 <label className="text-xs font-bold uppercase tracking-widest text-[#9A6CFF]">Your Email</label>
                                 <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="jane@company.com"
                                    className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00F5FF] transition-all placeholder-gray-600"
                                 />
                              </div>
                           </div>

                           {/* Calendar */}
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div className="space-y-4">
                                 {/* Month navigator */}
                                 <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-sm uppercase tracking-widest text-[#9A6CFF]">Select a Date</h3>
                                    <div className="flex items-center gap-2">
                                       <button
                                          onClick={() => handleMonthChange(-1)}
                                          className="w-7 h-7 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-[#00F5FF]/50 border border-white/10 transition-all text-sm font-bold"
                                       >
                                          ‹
                                       </button>
                                       <span className="text-xs font-bold text-white w-20 text-center">
                                          {MONTHS[selectedMonth].slice(0, 3)} {selectedYear}
                                       </span>
                                       <button
                                          onClick={() => handleMonthChange(1)}
                                          className="w-7 h-7 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-[#00F5FF]/50 border border-white/10 transition-all text-sm font-bold"
                                       >
                                          ›
                                       </button>
                                    </div>
                                 </div>

                                 {/* Day-of-week headers */}
                                 <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-gray-500 font-bold mb-1">
                                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                                       <div key={i}>{d}</div>
                                    ))}
                                 </div>

                                 {/* Day grid */}
                                 <div className="grid grid-cols-7 gap-1 text-center text-xs">
                                    {Array.from({ length: totalDays }).map((_, i) => (
                                       <div
                                          key={i}
                                          onClick={() => setSelectedDate(i + 1)}
                                          className={`py-2 rounded-lg cursor-pointer transition-all ${selectedDate === i + 1
                                                ? 'bg-[#00F5FF] text-[#0B0F3F] font-bold ring-2 ring-[#00F5FF]/50'
                                                : 'glass hover:bg-[#00F5FF]/10'
                                             }`}
                                       >
                                          {i + 1}
                                       </div>
                                    ))}
                                 </div>
                              </div>

                              {/* Time slots */}
                              <div className="space-y-4">
                                 <h3 className="font-bold text-sm uppercase tracking-widest text-[#9A6CFF]">Select a Time</h3>
                                 <div className="space-y-3">
                                    {TIMES.map(time => (
                                       <button
                                          key={time}
                                          onClick={() => setSelectedTime(time)}
                                          className={`w-full py-3 glass border-white/5 rounded-xl transition-all text-sm font-medium ${selectedTime === time
                                                ? 'border-[#00F5FF] bg-[#00F5FF]/10 text-[#00F5FF]'
                                                : 'hover:border-[#00F5FF]/50'
                                             }`}
                                       >
                                          {time}
                                       </button>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Footer */}
                        <div className="p-8 bg-white/5 flex items-center justify-between">
                           <div className="flex items-center gap-3 text-sm text-gray-400">
                              <Clock size={16} />
                              Timezone: WAT (West Africa Time)
                           </div>
                           <button
                              onClick={handleBooking}
                              disabled={status === 'sending'}
                              className="px-8 py-3 bg-[#00F5FF] text-[#0B0F3F] font-bold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                           >
                              {status === 'sending' ? (
                                 <>
                                    <Loader size={16} className="animate-spin" />
                                    Sending…
                                 </>
                              ) : (
                                 'Confirm Booking'
                              )}
                           </button>
                        </div>
                     </>
                  )}
               </div>

               {/* ── Contact info ─────────────────────────────────────────────── */}
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
                              <div className="text-xl font-medium">info@qasberry.com</div>
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
                     <p className="text-gray-400">
                        While our core is in Africa, we operate globally, providing remote AI architecture and on-site industrial audits across the continent and beyond.
                     </p>
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
