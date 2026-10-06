
import React from 'react';
import {
  Target,
  TrendingUp,
  Megaphone,
  MessageSquare,
  PieChart,
  Database,
  Filter,
  Mail,
  BarChart3,
  Workflow,
  Users,
  Bot
} from 'lucide-react';
import { Industry } from './types';

export const COLORS = {
  bg: '#0B0F3F',
  cyan: '#00F5FF',
  purple: '#9A6CFF',
};

export const INDUSTRIES = [
  {
    id: Industry.LeadGeneration,
    name: 'Lead Generation',
    icon: <Target className="w-8 h-8" />,
    description: 'Find, qualify, and score prospects automatically so your reps only talk to buyers who are ready.',
    capabilities: [
      { title: 'AI Lead Scoring', icon: <Filter className="text-[#00F5FF]" />, desc: 'Rank every inbound lead by likelihood to buy, using your own historical win data.' },
      { title: 'Prospect Enrichment', icon: <Users className="text-[#9A6CFF]" />, desc: 'Fill in company size, role, and contact details automatically the moment a lead arrives.' },
      { title: 'Automated Qualification', icon: <Bot className="text-[#00F5FF]" />, desc: 'Chat and form assistants that ask the right questions and route hot leads straight to sales.' },
      { title: 'Source Performance Tracking', icon: <BarChart3 className="text-[#9A6CFF]" />, desc: 'See which channels bring leads that actually close, not just leads that fill the funnel.' }
    ]
  },
  {
    id: Industry.SalesAutomation,
    name: 'Sales Automation',
    icon: <TrendingUp className="w-8 h-8" />,
    description: 'Automated follow-ups, pipeline updates, and proposal generation that keep deals moving without manual admin.',
    capabilities: [
      { title: 'Follow-Up Sequences', icon: <Mail className="text-[#00F5FF]" />, desc: 'Personalised follow-ups sent at the right moment, so no deal goes cold from silence.' },
      { title: 'Pipeline Hygiene', icon: <Workflow className="text-[#9A6CFF]" />, desc: 'Deal stages, notes, and next steps updated automatically from emails and calls.' },
      { title: 'Proposal & Quote Drafting', icon: <Bot className="text-[#00F5FF]" />, desc: 'Generate tailored proposals in minutes from your templates and the deal history.' },
      { title: 'Sales Forecasting', icon: <BarChart3 className="text-[#9A6CFF]" />, desc: 'Realistic revenue forecasts based on pipeline behaviour rather than gut feel.' }
    ]
  },
  {
    id: Industry.CampaignAutomation,
    name: 'Campaign Automation',
    icon: <Megaphone className="w-8 h-8" />,
    description: 'Plan, create, and launch email, social, and ad campaigns faster with AI-assisted content and scheduling.',
    capabilities: [
      { title: 'AI Content Production', icon: <Bot className="text-[#00F5FF]" />, desc: 'On-brand copy, captions, and email variants drafted for your team to review and approve.' },
      { title: 'Multi-Channel Scheduling', icon: <Workflow className="text-[#9A6CFF]" />, desc: 'One plan pushed to email, social, and ads, with timing optimised for each audience.' },
      { title: 'Audience Segmentation', icon: <Users className="text-[#00F5FF]" />, desc: 'Segments built from real behaviour so each message reaches the people it fits.' },
      { title: 'Automated A/B Testing', icon: <BarChart3 className="text-[#9A6CFF]" />, desc: 'Variants tested and winners promoted automatically while the campaign runs.' }
    ]
  },
  {
    id: Industry.CustomerEngagement,
    name: 'Customer Engagement',
    icon: <MessageSquare className="w-8 h-8" />,
    description: 'AI assistants on WhatsApp, web chat, and email that answer enquiries, book calls, and nurture leads 24/7.',
    capabilities: [
      { title: 'WhatsApp & Web Chat Agents', icon: <MessageSquare className="text-[#00F5FF]" />, desc: 'Instant, accurate answers to product and pricing questions at any hour.' },
      { title: 'Automated Booking', icon: <Workflow className="text-[#9A6CFF]" />, desc: 'Prospects book demos and consultations straight into your team’s calendars.' },
      { title: 'Lead Nurturing', icon: <Mail className="text-[#00F5FF]" />, desc: 'Timely, relevant messages that keep prospects warm until they are ready to buy.' },
      { title: 'Smart Hand-Off', icon: <Users className="text-[#9A6CFF]" />, desc: 'Conversations passed to a human rep with full context the moment it matters.' }
    ]
  },
  {
    id: Industry.MarketingAnalytics,
    name: 'Marketing Analytics',
    icon: <PieChart className="w-8 h-8" />,
    description: 'Clear dashboards and attribution that show which campaigns drive revenue, not just clicks.',
    capabilities: [
      { title: 'Revenue Attribution', icon: <PieChart className="text-[#00F5FF]" />, desc: 'Connect spend to closed deals so you know what every channel is really worth.' },
      { title: 'Live Performance Dashboards', icon: <BarChart3 className="text-[#9A6CFF]" />, desc: 'All your ad, email, and sales numbers in one place, refreshed automatically.' },
      { title: 'Automated Reporting', icon: <Mail className="text-[#00F5FF]" />, desc: 'Weekly client and leadership reports written and sent without anyone building slides.' },
      { title: 'Budget Recommendations', icon: <TrendingUp className="text-[#9A6CFF]" />, desc: 'AI suggestions on where to shift spend for the best return.' }
    ]
  },
  {
    id: Industry.CrmIntegration,
    name: 'CRM & Data Integration',
    icon: <Database className="w-8 h-8" />,
    description: 'Connect your CRM, ad platforms, and spreadsheets so customer data flows automatically between tools.',
    capabilities: [
      { title: 'CRM Setup & Clean-Up', icon: <Database className="text-[#00F5FF]" />, desc: 'Duplicates removed, fields standardised, and records enriched so your data can be trusted.' },
      { title: 'Tool Integrations', icon: <Workflow className="text-[#9A6CFF]" />, desc: 'HubSpot, Salesforce, Zoho, Meta, Google Ads, and more connected without copy-pasting.' },
      { title: 'Spreadsheet Migration', icon: <Filter className="text-[#00F5FF]" />, desc: 'Move scattered sheets into a single, structured system your whole team uses.' },
      { title: 'Automated Data Sync', icon: <Bot className="text-[#9A6CFF]" />, desc: 'Leads, deals, and campaign results kept in sync across every tool in real time.' }
    ]
  }
];
