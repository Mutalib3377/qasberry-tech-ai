
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Terminal, 
  ChevronRight, 
  ChevronLeft, 
  Zap, 
  Layers, 
  Database, 
  Cpu, 
  Eye 
} from 'lucide-react';
import { Industry, RoadmapInputs } from '../types';
import { INDUSTRIES } from '../constants';

const RoadmapBuilder: React.FC = () => {
  const [step, setStep] = useState(1);
  const [inputs, setInputs] = useState<RoadmapInputs>({
    industry: Industry.Healthcare,
    manualProcesses: [],
    infrastructure: [],
    email: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<boolean>(false);

  const toggleSelection = (field: 'manualProcesses' | 'infrastructure', value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(i => i !== value)
        : [...prev[field], value]
    }));
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate complex calculation
    setTimeout(() => {
      setIsGenerating(false);
      setResult(true);
    }, 2500);
  };

  const currentIndustry = INDUSTRIES.find(i => i.id === inputs.industry);

  if (result) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 animate-in zoom-in-95 duration-700">
        <div className="text-center mb-16 space-y-4">
          <div className="text-[#00F5FF] font-bold tracking-widest uppercase text-sm">Strategic Output Generated</div>
          <h2 className="text-5xl font-bold">Your AI <span className="text-[#9A6CFF]">Roadmap</span></h2>
          <p className="text-gray-400">A custom 4-pillar evolution strategy for {currentIndustry?.name}.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { 
              pillar: 'Digitization', 
              icon: <Database className="text-[#00F5FF]" />, 
              action: 'Converting physical logs to cloud-native data architectures.',
              details: 'Move from ' + (inputs.manualProcesses[0] || 'manual paper') + ' to structured SQL tables.'
            },
            { 
              pillar: 'Connectivity', 
              icon: <Layers className="text-[#9A6CFF]" />, 
              action: 'IoT & Real-time Cloud Integration.',
              details: 'Enabling edge sensors to feed live operational metrics into the central brain.'
            },
            { 
              pillar: 'Augmentation', 
              icon: <Cpu className="text-[#00F5FF]" />, 
              action: 'Initial AI Assistants & Predictive Insights.',
              details: 'Human-in-the-loop decision support systems to maximize ' + (inputs.infrastructure.includes('No digital data') ? 'early-stage visibility' : 'operational uptime') + '.'
            },
            { 
              pillar: 'Transformation', 
              icon: <Eye className="text-[#9A6CFF]" />, 
              action: 'Digital Twins & Full AI Agency.',
              details: 'Complete autonomous optimization of the ' + inputs.industry + ' lifecycle.'
            }
          ].map((p, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-white/5 to-transparent -mr-12 -mt-12 group-hover:scale-150 transition-transform"></div>
              <div className="mb-6">{p.icon}</div>
              <h4 className="text-xl font-bold mb-4">{p.pillar}</h4>
              <p className="text-sm font-medium text-white mb-4">{p.action}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{p.details}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 glass p-10 rounded-3xl border-[#00F5FF]/30 text-center space-y-8">
           <h3 className="text-2xl font-bold">Ready to implement this roadmap?</h3>
           <p className="text-gray-400 max-w-xl mx-auto">This high-level overview is just the beginning. Our consultants can provide a detailed technical audit and execution timeline.</p>
           <div className="flex justify-center gap-4">
              <button onClick={() => setResult(false)} className="px-6 py-3 glass rounded-lg text-sm">Edit Parameters</button>
              <Link to="/contact" className="px-8 py-3 bg-[#00F5FF] text-[#0B0F3F] font-bold rounded-lg shadow-lg hover:scale-105 transition-all">
                Book Implementation Call
              </Link>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold">Analog-to-AI <span className="text-[#00F5FF]">Generator</span></h1>
        <p className="text-gray-400">Map your journey from manual operational silos to autonomous AI agency.</p>
      </div>

      <div className="glass rounded-[32px] border-white/10 overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-white/5 border-b border-white/5 p-4 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
            <Terminal size={12} />
            QASBERRY_CORE_V2.0 // STEP_0{step}
          </div>
        </div>

        <div className="p-8 md:p-12 space-y-12">
          {/* Progress Dots */}
          <div className="flex justify-center gap-2">
            {[1, 2, 3].map(s => (
              <div key={s} className={`h-1.5 rounded-full transition-all duration-500 ${step === s ? 'w-12 bg-[#00F5FF]' : 'w-4 bg-white/10'}`}></div>
            ))}
          </div>

          {/* Step 1: Industry */}
          {step === 1 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Select Your Primary Industry</h2>
                <p className="text-gray-400 text-sm">Targeting sector-specific AI logic and compliance frameworks.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {INDUSTRIES.map(i => (
                  <button
                    key={i.id}
                    onClick={() => setInputs(prev => ({ ...prev, industry: i.id }))}
                    className={`p-6 rounded-2xl border transition-all text-left group ${inputs.industry === i.id ? 'bg-[#00F5FF]/10 border-[#00F5FF]' : 'glass border-white/5 hover:border-white/20'}`}
                  >
                    <div className={`mb-4 transition-colors ${inputs.industry === i.id ? 'text-[#00F5FF]' : 'text-gray-500 group-hover:text-white'}`}>
                      {i.icon}
                    </div>
                    <div className="font-bold">{i.name}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Analog Audit */}
          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">The Analog Audit</h2>
                <p className="text-gray-400 text-sm">Identify current manual processes and data friction points.</p>
              </div>
              <div className="space-y-3">
                {[
                  'Paper-based logs & reports',
                  'Manual data entry into spreadsheets',
                  'Siloed on-premise hardware',
                  'Verbal communication of key metrics',
                  'Reactive maintenance schedules',
                  'Manual asset tracking'
                ].map(process => (
                  <button
                    key={process}
                    onClick={() => toggleSelection('manualProcesses', process)}
                    className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all ${inputs.manualProcesses.includes(process) ? 'bg-[#9A6CFF]/10 border-[#9A6CFF]' : 'glass border-white/5 hover:border-white/20'}`}
                  >
                    <span className="text-sm">{process}</span>
                    {inputs.manualProcesses.includes(process) ? <CheckCircle2 size={18} className="text-[#9A6CFF]" /> : <div className="w-[18px] h-[18px] rounded-full border border-white/20"></div>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Infrastructure */}
          {step === 3 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Infrastructure Check</h2>
                <p className="text-gray-400 text-sm">Current tech stack status for AI integration readiness.</p>
              </div>
              <div className="space-y-4">
                 {[
                  { label: 'Cloud Storage (AWS/Azure/GCP)', id: 'cloud' },
                  { label: 'Edge Sensors / IoT Devices', id: 'iot' },
                  { label: 'Legacy ERP/CRM Systems', id: 'legacy' },
                  { label: 'No digital data infrastructure', id: 'none' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => toggleSelection('infrastructure', item.label)}
                    className={`w-full p-6 rounded-2xl border text-left flex items-center justify-between transition-all ${inputs.infrastructure.includes(item.label) ? 'bg-[#00F5FF]/10 border-[#00F5FF]' : 'glass border-white/5'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${inputs.infrastructure.includes(item.label) ? 'bg-[#00F5FF] text-[#0B0F3F]' : 'bg-white/5 text-gray-400'}`}>
                        <Zap size={20} />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="flex items-center justify-between pt-8 border-t border-white/5">
            <button 
              disabled={step === 1}
              onClick={() => setStep(s => s - 1)}
              className="flex items-center gap-2 text-gray-500 hover:text-white disabled:opacity-0 transition-all"
            >
              <ChevronLeft size={20} />
              Back
            </button>
            
            {step < 3 ? (
              <button 
                onClick={() => setStep(s => s + 1)}
                className="flex items-center gap-2 px-8 py-3 bg-[#00F5FF] text-[#0B0F3F] font-bold rounded-xl hover:scale-105 transition-all"
              >
                Continue
                <ChevronRight size={20} />
              </button>
            ) : (
              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#00F5FF] to-[#9A6CFF] text-[#0B0F3F] font-bold rounded-xl hover:scale-105 transition-all disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <Zap className="animate-spin" size={20} />
                    Processing Data...
                  </>
                ) : (
                  <>
                    Generate Roadmap
                    <ChevronRight size={20} />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapBuilder;
