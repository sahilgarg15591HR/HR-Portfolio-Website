
import React, { useState, useRef, useEffect } from 'react';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Competencies } from './components/Competencies';
import { Education } from './components/Education';
import { JDMatcher } from './components/JDMatcher';
import { Mail, Linkedin, ArrowUpRight, MessageCircle, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactMenuRef = useRef<HTMLDivElement>(null);

  const whatsappNumber = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contactMenuRef.current && !contactMenuRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for the fixed navbar + a bit of padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={PERSONAL_INFO.profileImage} 
              alt={PERSONAL_INFO.name} 
              className="w-10 h-10 rounded-xl object-cover shadow-lg border border-slate-200"
            />
            <span className="font-bold text-slate-900 hidden sm:block">Sahil Garg</span>
          </div>
          <div className="flex items-center gap-8 text-sm font-semibold text-slate-600">
            <button 
              onClick={() => scrollToSection('experience')}
              className="hover:text-blue-600 transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="hover:text-blue-600 transition-colors"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('ai-matcher')}
              className="hover:text-blue-600 transition-colors hidden md:block"
            >
              JD Matcher
            </button>
            
            <div className="relative" ref={contactMenuRef}>
              <button 
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="px-5 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 shadow-md"
              >
                Contact Me <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isContactOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl py-2 animate-in fade-in zoom-in-95 duration-200 z-[60]">
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Email</span>
                  </a>
                  <a 
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Me</span>
                  </a>
                  <a 
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-t border-slate-50"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <ExperienceTimeline />
        <Education />
        <Competencies />
        <JDMatcher />
      </main>

      <footer className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Let's build high-impact teams together.</h2>
              <p className="text-slate-500 text-lg mb-8">Currently based in Dubai, open to global leadership opportunities in progressive organizations.</p>
              <div className="flex gap-4">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 bg-white rounded-xl text-slate-400 hover:text-blue-600 shadow-sm border border-slate-100 transition-all"><Mail className="w-6 h-6" /></a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" className="p-3 bg-white rounded-xl text-slate-400 hover:text-blue-600 shadow-sm border border-slate-100 transition-all"><Linkedin className="w-6 h-6" /></a>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" className="p-3 bg-white rounded-xl text-slate-400 hover:text-green-600 shadow-sm border border-slate-100 transition-all"><MessageCircle className="w-6 h-6" /></a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-slate-400">Navigation</h4>
                <ul className="space-y-2 text-slate-600">
                  <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-blue-600">Top</button></li>
                  <li><button onClick={() => scrollToSection('experience')} className="hover:text-blue-600">Experience</button></li>
                  <li><button onClick={() => scrollToSection('education')} className="hover:text-blue-600">Education</button></li>
                  <li><button onClick={() => scrollToSection('ai-matcher')} className="hover:text-blue-600">AI Matcher</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-slate-400">Contact</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>Dubai, UAE</li>
                  <li>{PERSONAL_INFO.email}</li>
                  <li>{PERSONAL_INFO.phone}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10 border-t border-slate-200 text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Sahil Garg. All rights reserved.</p>
            <p className="flex items-center gap-1">Designed for HR Leadership Excellence</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
