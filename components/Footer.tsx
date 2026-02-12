
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Instagram, Twitter, Send } from 'lucide-react';

const LOGO_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABACAYAAABfuzNoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAkMSURBVHgB7V0JbBRVFP7f7ux2u93udrvtAtpeQCmHhAJSClIIDUghhAClEAIhBEIIhBALIYSYEEJiQgghJiSEMBIhBIiJhBALIRAjXkRMRI2JiNf5mNf9M88/s7vT6W4XyHzpTnezOztv9p1/9/33r7uLgEAkS9M0lY6O6v7v6p69H6WqI8pTleS9O5I0p7nOly73O5923O982nH76X6X/P1I6759R6nqnHKN5D1H6n7Xv677Xd867/ve39z/3f7O++f2991+99v7f9q/R1on5+873f+UfE79u+m8+v0L797Tuvm8Uvc67vePeV2fVv337m9+5vX/Xf7+75z3v/Z/j3v/+D9S9m/0H/3u+/9E+f9E/6+076j7f3S/r3vO+9/03nv+f790/3O+9/1X/D+E/72X7fvePuudm6/f/3u//XfPz2/0/3e+e7v/Xv697vfd97/T36OfE9+p/5v8H75f/N2u//7XN/T/T/W3+G8f7J9Dvt/rO/+X/99O+5f7X7P998TzvveH/X79e3O8977uuf86Xn3e997Pnfv8e7v+977uue97v6+7z3vf+/53f093Xv87r8f9e/pP5/P7V/v/j/un7vefU+6v/fvc9/X3X/ve/896XnPvT7vOf893z9vX7ve3vPe071H/x7/fX/v078fPe+f8f8v9O9f6L//vPfXvPe6uueSnnvUn1O/p3/P9973vff43e/qH3BOfU/eT//e577v/e5/v98f7e/p3uN3v73//vve/77z/ve93/3/S9u/6P+O/p77nvffE8553fM63Xue7/6e7veE8/539e99X37Pe+e17ve5u/f0Pz2X53Pv4+93/T33O36Xu87rO/Y++B3O6zzP61zn73Vev6dzndf5u93vPd99T+f9m87zOs/Xf4/v6v9e/+879/m693S+6/673++0v8f997jXfXfvu1zfXf973e6+5/v97v9pX7ve7+re47u6/7/u7/7O7Z/+Hv99T77f/+U5Pfc99/m9/r9X/3/0n8/f79/nv++vfa7v6v/Pve657+ve071Hf9+9r3PP61v3f7e7/0v9X+/P5fv97vXvc697rv9/Wfe8v/Ydve73On9Xf8859Xfd93TPed639e/5f6/7e/y39e/p3/u9/+X/9f7e43e7X8fvc7/7H3iv+7vuv/vvR/v/+b77e77re93ffbfre537Xve+X77v/+f98/bc932/+7m79/R9ue+/d7/vf7/f/fbe/+/+v7777T/077/n++ff9+/R/339fTof/O8f9N/nd999v799Xv9+X/c3fU/f0/f1/+f/T+d3ueue7nf6f9T/t697v/+B99vve99739X3fffe86fne/fu9973nef6z+u7nvP67v6X5/Xv83+u8+r3ve6533f/ve7vufe077+v70n3Pe99/TnP6z+X53W/9zrv/+T/S+995Tz9+57mXfe7+nu633+63+n/Xve96p/v/+e7/27/v+k83zf1X/ff79/3n9Pf8/rvP/3vL9v3f/3nuvznvM++T59v+89379/ut/n7v6f/p36fv09/0PP8z6f977+Pf573OvveT79/36n+73vvN9vf0/+ntM9f3p+t+/u7z+n/m/9/X++77/ve/ru9vS99O/Uf4/+n+v73N/j/l/vv9P/7z/XvS89T9/vv9P9jv497vefv/vte97v/f6evs/vPe2v+p/f3d/zvO/u7+k79f7+nu49fvd93fXvu8/3X/D6e5/7u56rv6v/e3qOnst3v7/ve899Pvdz3/3ef0+f97yv9/f7Xp/Xvccf9++ve++X63f63+N3Xvf9u9/Tde9/v+f1u99rv/d99zvP9Tve3/Vcfc9//47e/Yf7e/ru99/xve/uvf57+nted7+7v6e/53XPe7p7Xu9/4P3v6d7jeV/X/T09j+ff073v/T195/u+7nm9f9/f83mP5/U/8H7Pu9f9Xp/X/Wf7vPv/078f+T/S/+N13v8dve753Pf939fVv6fndc/reL+re999Xfe+/47+fc/re/9773/93+s79/S+P6fn635/z/+Onsc/7vF93Wf7rP7v+HqPuv9OfY/7vfv/03Xue6/uv3Pf/fve87rnXue57nfd776ve7/H9bnu8R7P57rvv+N7f99997r7z9f9f/qu/t9X/7/veV3X+zve47vef0/X9T/Sve/u/p36fv09/0PP8z6f977+Pf573OvveT79/36n+73vvN9vf0/+ntM9f3p+t+/u7z+n/m/9/X++77/ve/ru9vS99O/Uf4/+n+v73N/j/l/vv9P/7z/XvS89T9/vv9P9jv497vefv/vte97v/f6evs/vPe2v+p/f3d/zvO/u7+k79f7+nu49fvd93fXvu8/3X/D6e5/7u56rv6v/e3qOnst3v7/ve899Pvdz3/3ef0+f97yv9/f7Xp/Xvccf9++ve++X63f63+N3Xvf9u9/Tde9/v+f1u99rv/d99zvP9Tve3/Vcfc9//47e/Yf7e/ru99/xve/uvf57+nted7+7v6e/53XPe7p7Xu9/4P3v6d7jeV/X/T09j+ff073v/T195/u+7nm9f9/f83mP5/U/8H7Pu9f9Xp/X/Wf7vPv/078f+T/S/+N13v8dve753Pf939fVv6fndc/reL+re999Xfe+/47+fc/re/9773/93+s79/S+P6fn635/z/+Onsc/7vF93Wf7rP7v+HqPuv9OfY/7vfv/03Xue6/uv3Pf/fve87rnXue57nfd776ve7/H9bnu8R7P57rvv+N7f99997r7z9f9f/qu/t9X/7/veV3X+zve47vef0/X9T/Sve/u/p36fv09/0PP8z6f977+Pf573OvveT79/36n+73vvN9vf0/+ntM9f3p+t+/u7z+n/m/9/X++77/ve/ru9vS99O/Uf4/+n+v73N/j/l/vv9P/7z/XvS89T9/vv9P9jv497vefv/vte97v/f6evs/vPe2v+p/f3d/zvO/u7+k79f7+nu49fvd93fXvu8/3X/D6e5/7u56rv6v/e3qOnst3v7/ve899Pvdz3/3ef0+f97yv9/f7Xp/Xvccf9++ve++X63f63+N3Xvf9u9/Tde9/v+f1u99rv/d99zvP9Tve3/Vcfc9//47e/Yf7e/ru99/xve/uvf57+nted7+7v6e/53XPe7p7Xu9/4P3v6d7jeV/X/T09j+ff073v/T195/u+7nm9f9/f83mP5/U/8H7Pu9f9Xp/X/Wf7vPv/078f+T/S/+N13v8dve753Pf939fVv6fndc/reL+re999Xfe+/47+fc/re/9773/93+s79/S+P6fn635/z/+Onsc/7vF93Wf7rP7v+HqPuv9OfY/7vfv/03Xue6/uv3Pf/fve87rnXue57nfd776ve7/H9bnu8R7P57rvv+N7f99997r7z9f9f/qu/t9X/7/veV3X+zve47vef0/X9T/Sve/u/p36fv09/0PP8z6f977+Pf573OvveT79/36n+73vvN9vf0/+ntM9f3p+t+/u7z+n/m/9/X++77/ve/ru9vS99O/Uf4/+n+v73N/j/l/vv9P/7z/XvS89T9/vv9P9jv497vefv/vte97v/f6evs/vPe2v+p/f3d/zvO/u7+k79f7+nu49fvd93fXvu8/3X/D6e5/7u56rv6v/e3qOnst3v7/ve899Pvdz3/3ef0+f97yv9/f7Xp/Xvccf9++ve++X63f63+N3Xvf9u9/Tde9/v+f1u99rv/d99zvP9Tve3/Vcfc9//47e/Yf7e/ru99/xve/uvf57+nted7+7v6e/53XPe7p7Xu9/4P3v6d7jeV/X/T09j+ff073v/T195/u+7nm9f9/f83mP5/U/8H7Pu9f9Xp/X/Wf7vPv/078f+T/S/+N13v8dve753Pf939fVv6fndc/reL+re999Xfe+/47+fc/re/9773/93+s79/S+P6fn635/z/+Onsc/7vF93Wf7rP7v+HqPuv9OfY/7vfv/03Xue6/uv3Pf/fve87rnXue57nfd776ve7/H9bnu8R7P57rvv+N7f99997r7z9f9f/qu/t9X/7/veV3X+zve47vef0/X9T/Sve/u/p36fv09/0PP8z6f977+Pf573OvveT79/36n+73vvN9vf0/+ntM9f3p+t+/u7z+n/m/9/X++77/ve/ru9vS99O/Uf4/+n+v73N/j/l/vv9P/7z/XvS89T9/vv9P9jv497vefv/vte97v/f6evs/vPe2v+p/f3d/zvO/u7+k79f7+nu49fvd93fXvu8/3X/D6e5/7u56rv6v/e3qOnst3v7/ve899Pvdz3/3ef0+f97yv9/f7Xp/Xvccf9++ve++X63f63+N3Xvf9u9/Tde9/v+f1u99rv/d99zvP9Tve3/Vcfc9//47e/Yf7e/ru99/xve/uvf57+nted7+7v6e/53XPe7p7Xu9/4P3v6d7jeV/X/T09j+ff073v/T195/u+7nm9f9/f83mP5/U/8H7Pu9f9Xp/X/Wf7vPv/078f+T/S/+N13v8dve753Pf939fVv6fndc/reL+re999Xfe+/47+fc/re/9773/93+s79/S+P6fn635/z/+Onsc/7vF93Wf7rP7v+HqPuv9OfY/7vfv/03Xue6/uv3Pf/fve87rnXue57nfd776ve7/H9bnu8R7P57rvv+N7f99997r7z9f9f/qu/t9X/7/veV3X+zve47vef0/X9T/Sve/u/p36fv09/0PP8z6f977+Pf573OvveT79/36n+73vvN9vf0/+ntM9f3p+t+/u7z+n/m/9/X++77/ve/ru9vS99O/Uf4/+n+v73N/j/l/vv9P/7z/XvS89T9/vv9P9jv497vefv/vte97v/f6evs/vPe2v+p/f3d/zvO/u7+k79f7+nu49fvd93fXvu8/3X/D6e5/7u56rv6v/e3qOnst3v7/ve899Pvdz3/3ef0+f97yv9/f7Xp/Xvccf9++ve++X63f63+N3Xvf9u9/Tde9/v+f1u99rv/d99zvP9Tve3/Vcfc9//47e/Yf7e/ru99/xve/uvf57+nted7+7v6e/53XPe7p7Xu9/4P3v6d7jeV/X/T09j+ff073v/T195/u+7nm9f9/f83mP5/U/8H7Pu9f9Xp/X/Wf7vPv/078f+T/S/+N13v8dve753Pf939fVv6fndc/reL+re999Xfe+/47+fc/re/9773/93+s79/S+P6fn635/z/+Onsc/7vF93Wf7rP7v+HqPuv9OfY/7vfv/03Xue6/uv3Pf/fve87rnXue57nfd776ve7/H9bnu8R7P57rvv+N7f99997r7z9f9f/qu/t9X/7/veV3X+zve47vef0/X9T/Sve/u/p36fv09/0PP8z6f977+Pf573OvveT79/36n+73vvN9vf0/+ntM9f3p+t+/u7z+n/m/9/X++77/ve/ru9vS99O/Uf4/+n+v73N/j/l/vv9P/7z/XvS89T9/vv9P9jv497vefv/vte97v/f6evs/vPe2v+p/f3d/zvO/u7+k79f7+nu49fvd93fXvu8/3X/D6e5/7u56rv6v/e3qOnst3v7/ve899Pvdz3/3ef0+f97yv9/f7Xp/Xvccf9++ve++X63f63+N3Xvf9u9/Tde9/v+f1u99rv/d99zvP9Tve3/Vcfc9//47e/Yf7e/ru99/xve/uvf57+nted7+7v6e/53XPe7p7Xu9/4P3v6d7jeV/X/T09j+ff073v/T195/u+7nm9f9/f83mP5/U/8H7Pu9f9Xp/X/Wf7vPv/078f+T/S/+N13v8dve753Pf939fVv6fndc/reL+re999Xfe+/47+fc/re/9773/93+s79/S+P6fn635/z/+Onsc/7vF93Wf7rP7v+HqPuv9OfY/7vfv/03Xue6/uv3Pf/fve87rnXue57nfd776ve7/H9bnu8R7P57rvv+N7f99997r7z9f9f/qu/t9X/7/veV3X+zve47vef0/X9T/Sve/u/p36fv09/0PP8z6f977+Pf573OvveT79/36n+73vvN9vf0/+ntM9f3p+t+/u7z+n/m/9/X++77/ve/ru9vS99O/Uf4/+n+v73N/j/l/vv9P/7z/XvS89T9/vv9P9jv497vefv/vte97v/f6evs/vPe2v+p/f3d/zvO/u7+k79f7+nu49fvd93fXvu8/3X/D6e5/7u56rv6v/e3qOnst3v7/ve899Pvdz3/3ef0+f97yv9/f7Xp/Xvccf9++ve++X63f63+N3Xvf9u9/Tde9/v+f1u99rv/d99zvP9Tve3/Vcfc9//47e/Yf7e/ru99/xve/uvf57+nted7+7v6e/53XPe7p7Xu9/4P3v6d7jeV/X/T09j+ff073v/T195/u+7nm9f9/f83mP5/U/8H7Pu9f9Xp/X/Wf7vPv/078f+T/S/+N13v8dve753Pf939fVv6fndc/reL+re999Xfe+/47+fc/re/9773/93+s79/S+P6fn635/z/+Onsc/7vF93Wf7rP7v+HqPuv9OfY/7vfv/03Xue6/uv3Pf/fve87rnXue57nfd776ve7/H9bnu8R7P57rvv+N7f99997r7z9f9f/qu/t9X/7/veV3X+zve47vef0/X9T/Sve/u/p36fv09/0PP8z6f977+Pf573OvveT79/36n+73vvN9vf0/+ntM9f3p+t+/u7z+n/m/9/X++77/ve/ru9vS99O/Uf4/+n+v73N/j/l/vv9P/7z/XvS89T9/vv9P9jv497vefv/vte97v/f6evs/vPe2v+p/f3d/zvO/u7+k79f7+nu49fvd93fXvu8/3X/D6e5/7u56rv6v/e3qOnst3v7/ve899Pvdz3/3ef0+f97yv9/f7Xp/Xvccf9++ve++X63f63+N3Xvf9u9/Tde9/v+f1u99rv/d99zvP9Tve3/Vcfc9//47e/Yf7e/ru99/xve/uvf57+nted7+7v6e/53XPe7p7Xu9/4P3v6d7jeV/X/T09j+ff073v/T195/u+7nm9f9/f83mP5/U/8H7Pu9f9Xp/X/Wf7vPv/078f+T/S/+N13v8dve753Pf939fVv6fndc/reL+re999Xfe+/47+fc/re/9773/93+s79/S+P6fn635/z/+Onsc/7vF93Wf7rP7v+HqPuv9OfY/7vfv/03Xue6/uv3Pf/fve87rnXue57nfd776ve7/H9bnu8R7P57rvv+N7f99997r7z9f9f/qu/t9X/7/veV3X+zve47vef0/X9T/Sve/u/p36fv09/0PP8z6f977+Pf573OvveT79/36n+73vvN9vf0/+ntM";

const LogoIcon = ({ size = 40 }: { size?: number }) => (
  <div className="relative group" style={{ width: size, height: size }}>
    {/* Refined brand glows from the background of the image */}
    <div className="absolute -top-1 -right-1 w-2/3 h-2/3 bg-red-500/15 blur-md rounded-full pointer-events-none"></div>
    <div className="absolute -bottom-1 -left-1 w-2/3 h-2/3 bg-blue-500/25 blur-md rounded-full pointer-events-none"></div>

    <div
      className="relative z-10 w-full h-full rounded-[10px] overflow-hidden bg-[#0B0F3F] flex items-center justify-center border border-white/5"
    >
      <img
        src="/Untitled design (4).png"
        alt="Qasberry Tech Logo Icon"
        className="w-full h-full object-contain p-1.5"
      />
    </div>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0B0F3F] border-t border-white/5 pt-24 pb-12 px-6 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-[#9A6CFF]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <LogoIcon size={32} />
              <span className="text-xl font-light tracking-tight text-white/90 group-hover:text-white transition-colors">
                qasberrytech
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Pioneering the ethical integration of AI across industrial sectors in the African market. We build for performance, safety, and longevity.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="p-2 glass rounded-lg text-gray-400 hover:text-[#00F5FF] transition-colors"><Linkedin size={18} /></Link>
              <Link to="#" className="p-2 glass rounded-lg text-gray-400 hover:text-[#FF0000] transition-colors"><Youtube size={18} /></Link>
              <Link to="#" className="p-2 glass rounded-lg text-gray-400 hover:text-[#E4405F] transition-colors"><Instagram size={18} /></Link>
              <Link to="#" className="p-2 glass rounded-lg text-gray-400 hover:text-[#1DA1F2] transition-colors"><Twitter size={18} /></Link>
            </div>
          </div>

          {/* Sectors */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00F5FF]">Core Sectors</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link to="/solutions/oil-gas" className="hover:text-white transition-colors">Oil & Gas (Titan)</Link></li>
              <li><Link to="/solutions/healthcare" className="hover:text-white transition-colors">Healthcare AI</Link></li>
              <li><Link to="/solutions/agriculture" className="hover:text-white transition-colors">Precision Agriculture</Link></li>
              <li><Link to="/solutions/automotive" className="hover:text-white transition-colors">Automotive & Telemetry</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#9A6CFF]">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link to="/roadmap-builder" className="hover:text-white transition-colors">Roadmap Generator</Link></li>
              <li><Link to="/knowledge-center" className="hover:text-white transition-colors">The Laboratory (Videos)</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Technical Library</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Insights & Briefings</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Newsletter</h4>
            <p className="text-xs text-gray-500 leading-relaxed font-light">Receive curated briefings on African industrial AI trends.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs focus:outline-none focus:border-[#00F5FF] flex-grow" />
              <button className="bg-[#00F5FF] text-[#0B0F3F] p-2 rounded-lg hover:scale-105 transition-all">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
          <div>© 2024 QASBERRY TECH (PTY) LTD. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Ethics Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
