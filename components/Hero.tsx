
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Download, Linkedin, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-32 pb-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-100 rounded-full blur-[100px] opacity-60"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.5fr] gap-12 items-center relative z-10">
        <div className="flex flex-col items-center md:items-start">
          <div className="relative mb-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src={PERSONAL_INFO.profileImage} 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white shadow-sm border border-slate-100 rounded-2xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 bg-white shadow-sm border border-slate-100 rounded-2xl text-slate-600 hover:bg-slate-800 hover:text-white transition-all duration-300"
              title="Send Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200"
            >
              <Download className="w-5 h-5" /> Download CV
            </button>
          </div>
        </div>

        <div className="text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold uppercase tracking-widest animate-pulse border border-blue-100">
            <Sparkles className="w-4 h-4" /> Available for Global HR Leadership
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-blue-600">
            {PERSONAL_INFO.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            {PERSONAL_INFO.summary}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            <div className="flex items-center justify-center md:justify-start gap-3 text-slate-600 group">
              <Mail className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-600 transition-colors truncate">{PERSONAL_INFO.email}</a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 text-slate-600 group">
              <Phone className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
              <span>{PERSONAL_INFO.phone}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 text-slate-600 group">
              <MapPin className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
