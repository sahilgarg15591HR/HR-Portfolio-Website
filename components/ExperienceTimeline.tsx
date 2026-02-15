import React from 'react';
import { EXPERIENCES } from '../constants';
import { ExternalLink, MapPin, Calendar, Briefcase } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://ui-avatars.com/api/?name=Company&background=0D8ABC&color=fff";
  };

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">Professional Journey</h2>
          <p className="text-slate-500 text-lg">10+ years of HR leadership across continents.</p>
        </div>
        <div className="flex items-center gap-2 text-blue-600 font-medium">
          <Briefcase className="w-5 h-5" />
          <span>Timeline View</span>
        </div>
      </div>

      <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-16">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12 group">
            {/* Timeline dot */}
            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-white border-4 border-blue-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
            
            <div className="grid md:grid-cols-[1fr_2fr] gap-8">
              <div className="space-y-4">
                <div className="w-20 h-20 hover:scale-150 transition-all duration-300 flex items-center justify-center cursor-pointer z-10 overflow-hidden">
                  <img 
                    src={exp.logo} 
                    alt={exp.company}
                    onError={handleImageError}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{exp.company}</h3>
                  <a 
                    href={exp.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 flex items-center gap-1 hover:underline text-sm font-medium"
                  >
                    Visit Website <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="space-y-1 text-slate-500 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {exp.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> {exp.location}
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 group-hover:shadow-md transition-all duration-300">
                <h4 className="text-xl font-bold text-slate-800 mb-2">{exp.role}</h4>
                <p className="text-slate-600 mb-6 italic leading-relaxed">{exp.description}</p>
                <ul className="space-y-3">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 inline-block px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {exp.industry}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};