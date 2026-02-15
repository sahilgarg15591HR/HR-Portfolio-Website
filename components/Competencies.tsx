
import React from 'react';
import { SKILL_GROUPS, INDUSTRIES } from '../constants';
import { Award, Globe2, Building2 } from 'lucide-react';

export const Competencies: React.FC = () => {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* HR Roles & Skills */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Strategic Competencies</h2>
            </div>
            <div className="space-y-6">
              {SKILL_GROUPS.map((group, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm">
                  <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, j) => (
                      <span 
                        key={j} 
                        className="px-4 py-2 bg-slate-50 text-slate-700 rounded-xl text-sm font-medium border border-slate-100 hover:border-blue-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries & Sectors */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Globe2 className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold">Industry Reach</h2>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Versatile experience driving human capital strategy across a broad spectrum of high-growth sectors.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {INDUSTRIES.map((industry, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
                  >
                    <Building2 className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    <span className="font-semibold text-slate-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[40px] text-white">
              <h3 className="text-2xl font-bold mb-4">Key HR Achievements</h3>
              <div className="space-y-4 text-blue-100 text-sm">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Hiring TAT Reduction</span>
                  <span className="text-white font-bold text-xl">50%</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>OKR Adoption Rate</span>
                  <span className="text-white font-bold text-xl">95%</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Retention Improvement</span>
                  <span className="text-white font-bold text-xl">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Offer Acceptance Increase</span>
                  <span className="text-white font-bold text-xl">60%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
