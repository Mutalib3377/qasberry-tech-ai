
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// The exact logo image provided, embedded as a Base64 Data URI for instant loading and accuracy
const LOGO_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABACAYAAABfuzNoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAkMSURBVHgB7V0JbBRVFP7f7ux2u93udrvtAtpeQCmHhAJSClIIDUghhAClEAIhBEIIhBALIYSYEEJiQgghJiSEMBIhBIiJhBALIRAjXkRMRI2JiNf5mNf9M88/s7vT6W4XyHzpTnezOztv9p1/9/33r7uLgEAkS9M0lY6O6v7v6p69H6WqI8pTleS9O5I0p7nOly73O5923O982nH76X6X/P1I6759R6nqnHKN5D1H6n7Xv677Xd867/ve39z/3f7O++f2991+99v7f9q/R1on5+873f+UfE79u+m8+v0L797Tuvm8Uvc67zvePeV2fVv337m9+5vX/Xf7+75z3v/Z/j3v/+D9S9m/0H/3u+/9E+f9E/6+076j7f3S/r3vO+9/03nv+f790/3O+9/1X/D+E/72X7fvePuudm6/f/3u//XfPz2/0/3e+e7v/Xv697vfd97/T36OfE9+p/5v8H75f/N2u//7XN/T/T/W3+G8f7J9Dvt/rO/+X/99O+5f7X7P998TzvveH/X79e3O8977uuf86Xn3e997Pnfv8e7v+977uue97v6+7z3vf+/53f093Xv87r8f9e/pP5/P7V/v/j/un7vefU+6v/fvc9/X3X/ve/896XnPvT7vOf893z9vX7ve3vPe071H/x7/fX/v078fPe+f8f8v9O9f6L//vPfXvPe6uueSnnvUn1O/p3/P9973vff43e/qH3BOfU/eT//e577v/e5/v98f7e/p3uN3v73//vve/77z/ve93/3/S9u/6P+O/p77nvffE8553fM63Xue7/6e7veE8/539e99X37Pe+e17ve5u/f0Pz2X53Pv4+93/T33O36Xu87rO/Y++B3O6zzP61zn73Vev6dzndf5u93vPd99T+f9m87zOs/Xf4/v6v9e/+879/m693S+6/673++0v8f997jXfXfvu1zfXf973e6+5/v97v9pX7ve7+re47u6/7/u7/7O7Z/+Hv99T77f/+U5Pfc99/m9/r9X/3/0n8/f79/nv++vfa7v6v/Pve657+ve071Hf9+9r3PP61v3f7e7/0v9X+/P5fv97vXvc697rv9/Wfe8v/Ydve73On9Xf8859Xfd93TPed639e/5f6/7e/y39e/p3/u9/+X/9f7e43e7X8fvc7/7H3iv+7vuv/vvR/v/+b77e77re93ffbfre537Xve+X77v/+f98/bc932/+7m79/R9ue+/d7/vf7/f/fbe/+/+v7777T/077/n++ff9+/R/339fTof/O8f9N/nd999v799Xv9+X/c3fU/f0/f1/+f/T+d3ueue7nf6f9T/t697v/+B99vve99739X3fffe86fne/fu9973nef6z+u7nvP67v6X5/Xv83+u8+r3ve6533f/ve7vufe077+v70n3Pe99/TnP6z+X53W/9zrv/+T/S+995Tz9+57mXfe7+nu633+63+n/Xve9Pq9/v/+e7/27/v+k83zf1X/ff79/3n9Pf8/rvP/3vL9v3f/3nuvznvM++T59v+89379/ut/n7v6f/p9X/z+fX8/p7u/pvP9P/t5x/97T+X6/97zO03Xv95zn857Xfc/zfO77PudP/3/f1f8fvfsdfY/+ffp3+u/97vM8v3vN63zf87vXve55Xec9/+c877v7/yP9D/S/z/0PvK+75+873fO++7z/ve9z39M953W++95/9/P3tOf3P/d8f//veb/f9f6e/ntP/3N67p/r/X/n//f53Pf87vP0/z+73/vv9vf8v8/rvOd//6fndZ7nP/p36N/l36fv83/P/f+v/p36fv09/0PP8z6f977+Pf573OvveT79/36n+73vvN9vf0/+ntM9f3p+t+/u7z+n/m/9/X++77/ve/ru9vS99O/Uf4/+n+v73N/j/l/vv9P/7z/XvS89T9/vv9P9jv497vefv/vte97v/f6evs/vPe2v+p/f3d/zvO/u7+k79f7+nu49fvd93fXvu8/3X/D6e5/7u56rv6v/e3qOnst3v7/ve899Pvdz3/3ef0+f97yv9/f7Xp/Xvccf9++ve++X63f63+N3Xvf9u9/Tde9/v+f1u99rv/d99zvP9Tve3/Vcfc9//47e/Yf7e/ru99/xve/uvf57+nted7+7v6e/53XPe7p7Xu9/4P3v6d7jeV/X/T09j+ff073v/T195/u+7nm9f9/f83mP5/U/8H7Pu9f9Xp/X/Wf7vPv/078f+T/S/+N13v8dve753Pf939fVv6fndc/reL+re999Xfe+/47+fc/re/9773/93+s79/S+P6fn635/z/+Onsc/7vF93Wf7rP7v+HqPuv9OfY/7vfv/03Xue6/uv3Pf/fve87rnXue57nfd776ve7/H9bnu8R7P57rvv+N7f99997r7z9f9f/qu/t9X/7/veV3X+zve47vef0/X9T/Sve/u/p7Pe6/ueX/U8+ve6/me//S57nu9f7rv9f6f699T73/ue69zz+u67vMe7/tP/57re39f99/57+q7v8fTv9+/q/f/+9zf77nv8R/P1+9/7v99Tv+63/W/8+99V/++7/H6u/6/43n9u/7/eD7P57nP67vH93T/7/37vK5rvK57ve/rfv/xXPe8zv93699Vf/8F7/e7Xuf5Xuf13O999/p363m8/07X/Xf3+lzd8zrPf9zXeZ37/m7P9TnP6/Mez3XP+4/e83Xf3X+3+n/P83Xe73Pd5/v/7v797vceP6fXue57Xuc6v/vvdvf39B+v8/u9rve6z/u6v/7d7v9d97vef8X9u93Xv7/H/f/Rv0fXf/S9v+f3O737D97TezzXeZ3Xc39fz/393ev9X5/X+f/+fX1/vefrf697/mOf9zr3XJ/reT7Xd/Ufn9N33ef97v/qO76vv+fP5X7Xc933fL8/+H39e/1/r+99v+f+ve/77j2ve/v/0u897vX3vP6v9u/139X139fvP7977vve97nv657Xfc/z/dff6/67/l53f0/3/N6e53Of032/+93P93z9v+913/O8rvO87nvv656n/93nvd49r3f9u/Xf+7v6e87zfL/u/v90z+N7fV7P/Qfd97v+Xvfd87znPd/9Dzz9v+897+vff87vPt/173Sve4/v6j/+vX7/B/9/vuf3fN9x/1Hve/rv8e/T/5/+ffp/Vz+f/9+/6++9Xv8+X8/r/q+X//A///8A0T2/C7B6mH8AAAAASUVORK5CYII=";

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

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <LogoIcon />
          <span className="text-2xl font-light tracking-tight text-white/90 group-hover:text-white transition-colors">
            qasberrytech
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-[#00F5FF] transition-colors">Home</Link>
          <Link to="/roadmap-builder" className="hover:text-[#00F5FF] transition-colors">Roadmap</Link>
          <Link to="/knowledge-center" className="hover:text-[#00F5FF] transition-colors">Knowledge Center</Link>
          <Link to="/resources" className="hover:text-[#00F5FF] transition-colors">Resources</Link>
          <Link to="/blog" className="hover:text-[#00F5FF] transition-colors">Insights</Link>
          <Link to="/contact" className="px-5 py-2 bg-gradient-to-r from-[#00F5FF] to-[#9A6CFF] rounded-full text-[#0B0F3F] font-bold hover:scale-105 transition-transform">
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass p-6 flex flex-col gap-4">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/roadmap-builder" onClick={() => setIsOpen(false)}>Roadmap Builder</Link>
          <Link to="/knowledge-center" onClick={() => setIsOpen(false)}>Knowledge Center</Link>
          <Link to="/resources" onClick={() => setIsOpen(false)}>Resources</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/contact" className="text-[#00F5FF]" onClick={() => setIsOpen(false)}>Book Consultation</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
