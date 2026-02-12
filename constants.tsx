
import React from 'react';
import { 
  Droplets, 
  Stethoscope, 
  Leaf, 
  Car, 
  Headphones, 
  GraduationCap 
} from 'lucide-react';
import { Industry } from './types';

export const COLORS = {
  bg: '#0B0F3F',
  cyan: '#00F5FF',
  purple: '#9A6CFF',
};

export const INDUSTRIES = [
  {
    id: Industry.OilGas,
    name: 'Oil & Gas',
    icon: <Droplets className="w-8 h-8" />,
    description: 'Predictive maintenance, rig safety computer vision, and high-fidelity digital twins.',
    isTitan: true
  },
  {
    id: Industry.Healthcare,
    name: 'Healthcare AI',
    icon: <Stethoscope className="w-8 h-8" />,
    description: 'Diagnostic assistance, patient workflow optimization, and data-driven preventive care.'
  },
  {
    id: Industry.Agriculture,
    name: 'Agriculture AI',
    icon: <Leaf className="w-8 h-8" />,
    description: 'Precision farming, yield forecasting, and autonomous pest detection systems.'
  },
  {
    id: Industry.Automotive,
    name: 'Automotive AI',
    icon: <Car className="w-8 h-8" />,
    description: 'Supply chain intelligence, smart assembly line vision, and vehicle telemetry analysis.'
  },
  {
    id: Industry.CustomerService,
    name: 'Customer Service',
    icon: <Headphones className="w-8 h-8" />,
    description: 'Intelligent multi-modal agents and autonomous resolution frameworks.'
  },
  {
    id: Industry.Education,
    name: 'EdTech AI',
    icon: <GraduationCap className="w-8 h-8" />,
    description: 'Personalized learning pathways and automated administrative scaling.'
  }
];

export const CASE_STUDIES = [
  {
    id: '1',
    title: 'Offshore Rig Efficiency',
    industry: 'Oil & Gas',
    description: 'Implemented predictive computer vision to monitor equipment fatigue.',
    metrics: [
      { label: 'Cost Reduction', value: '24%' },
      { label: 'Uptime Increase', value: '15%' }
    ]
  },
  {
    id: '2',
    title: 'Hospital Workflow AI',
    industry: 'Healthcare',
    description: 'Reduced manual administrative entry time for nursing staff.',
    metrics: [
      { label: 'Efficiency', value: '+40%' },
      { label: 'Accuracy', value: '99.2%' }
    ]
  },
  {
    id: '3',
    title: 'Autonomous Yield Growth',
    industry: 'Agriculture',
    description: 'AI-driven irrigation and nutrient balancing for large-scale farms.',
    metrics: [
      { label: 'Yield Increase', value: '18%' },
      { label: 'Waste Reduction', value: '30%' }
    ]
  }
];
