import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, Landmark, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 opacity-50 skew-x-12 translate-x-20"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="inline-flex items-center gap-2 mb-4 text-blue-600 font-bold tracking-widest uppercase text-sm">
          <GraduationCap className="w-5 h-5" /> Academic Excellence
        </div>
        
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Fortified by a World-Class <span className="text-blue-600">Management Foundation</span>
            </h2>
            
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-[40px] shadow-sm relative group hover:shadow-xl transition-all duration-500">
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <div className="w-32 h-24 flex items-center justify-center flex-shrink-0 hover:scale-125 transition-all duration-300 cursor-pointer z-10">
                  <img 
                    src={EDUCATION.logo} 
                    alt={EDUCATION.institution} 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{EDUCATION.degree}</h3>
                    <p className="text-blue-600 font-semibold text-lg">{EDUCATION.specialization}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <Landmark className="w-4 h-4" />
                    <span>{EDUCATION.institution}, {EDUCATION.location}</span>
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    {EDUCATION.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="aspect-square bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-[60px] p-12 flex flex-col justify-center text-white relative shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-16 translate-x-16"></div>
              <blockquote className="text-3xl font-bold leading-tight italic relative z-10 mb-6">
                "XLRI is not just an institution; it's a legacy of excellence in Human Resources."
              </blockquote>
              <div className="h-1 w-20 bg-white/40 mb-6 group-hover:w-32 transition-all duration-500"></div>
              <p className="text-blue-100 font-medium opacity-80 uppercase tracking-widest text-xs">
                Globally recognized for producing top HR leaders
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};