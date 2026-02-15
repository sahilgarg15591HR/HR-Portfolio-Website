
import React, { useState, useRef } from 'react';
import { analyzeJobDescription } from '../services/geminiService';
import { JDMatchResult } from '../types';
import { CheckCircle2, AlertCircle, Loader2, Sparkles, Upload, FileText, X, File, FileSearch } from 'lucide-react';
import mammoth from 'mammoth';

export const JDMatcher: React.FC = () => {
  const [jdText, setJdText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<JDMatchResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fileInfo, setFileInfo] = useState<{ name: string; mimeType: string; base64?: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleMatch = async () => {
    if (!jdText.trim() && !fileInfo?.base64) return;
    setLoading(true);
    setError(null);
    try {
      const fileData = fileInfo?.base64 && fileInfo.mimeType === 'application/pdf' 
        ? { data: fileInfo.base64, mimeType: fileInfo.mimeType } 
        : undefined;

      const matchResult = await analyzeJobDescription(jdText, fileData);
      setResult(matchResult);
    } catch (err) {
      setError("Failed to analyze. Please try again. Ensure the file content is readable.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    const fileName = file.name;
    const extension = fileName.split('.').pop()?.toLowerCase();

    try {
      if (extension === 'txt') {
        const text = await file.text();
        setJdText(text);
        setFileInfo({ name: fileName, mimeType: 'text/plain' });
      } else if (extension === 'pdf') {
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = (reader.result as string).split(',')[1];
          setFileInfo({ name: fileName, mimeType: 'application/pdf', base64 });
          setJdText(''); // Clear text area as we use the file part
        };
        reader.readAsDataURL(file);
      } else if (extension === 'docx') {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        setJdText(result.value);
        setFileInfo({ name: fileName, mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      } else {
        setError("Unsupported file format. Please upload .txt, .pdf, or .docx.");
      }
    } catch (err) {
      setError("Error processing file. Please try again.");
      console.error(err);
    }
  };

  const clearFile = () => {
    setFileInfo(null);
    setJdText('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="ai-matcher" className="py-20 bg-blue-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-blue-300" />
            AI Matcher for Recruiters
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Upload a JD (PDF, DOCX, TXT) or paste it to analyze alignment with Sahil's 10+ years of HR leadership experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-semibold uppercase tracking-wider opacity-70">
                Job Description
              </label>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 text-xs font-bold bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors border border-white/10"
              >
                <Upload className="w-3.5 h-3.5" /> Upload File
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
                className="hidden" 
                accept=".txt,.pdf,.docx"
              />
            </div>

            {fileInfo && (
              <div className="mb-4 p-3 bg-blue-800/50 rounded-xl border border-blue-400/30 flex items-center justify-between animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center gap-3 truncate">
                  {fileInfo.mimeType === 'application/pdf' ? <FileText className="w-5 h-5 text-red-300 flex-shrink-0" /> : <File className="w-5 h-5 text-blue-300 flex-shrink-0" />}
                  <span className="text-sm font-medium truncate">{fileInfo.name}</span>
                </div>
                <button onClick={clearFile} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-4 h-4 text-blue-300" />
                </button>
              </div>
            )}

            <textarea
              className="w-full h-64 bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6 resize-none transition-all disabled:opacity-50"
              placeholder={fileInfo?.mimeType === 'application/pdf' ? "PDF attached. Click Run below." : "Paste JD text here or upload a file..."}
              value={jdText}
              onChange={(e) => {
                setJdText(e.target.value);
                if (fileInfo) setFileInfo(null);
              }}
              disabled={fileInfo?.mimeType === 'application/pdf'}
            />
            <button
              onClick={handleMatch}
              disabled={loading || (!jdText.trim() && !fileInfo?.base64)}
              className="w-full py-4 bg-white text-blue-900 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-xl"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Analyzing with Gemini...
                </>
              ) : (
                'Run AI Alignment Check'
              )}
            </button>
          </div>

          <div className="min-h-[400px]">
            {!result && !loading && !error && (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 border-2 border-dashed border-white/20 rounded-3xl bg-white/5">
                <FileSearch className="w-12 h-12 mb-4 opacity-30 text-blue-300" />
                <p className="text-blue-200">Waiting for JD input to begin analysis...</p>
                <p className="text-xs text-blue-400 mt-2">Supports PDF, DOCX, and Text files.</p>
              </div>
            )}

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 p-6 rounded-2xl flex items-center gap-4 animate-in shake duration-500">
                <AlertCircle className="text-red-400 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            {result && !loading && (
              <div className="animate-in fade-in slide-in-from-right duration-700 bg-white p-8 rounded-3xl text-slate-900 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <Sparkles className="w-24 h-24" />
                </div>
                
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">Alignment Score</h3>
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-slate-100"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={251.2}
                        strokeDashoffset={251.2 - (251.2 * result.matchPercentage) / 100}
                        strokeLinecap="round"
                        className="text-blue-600 transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <span className="absolute text-xl font-bold">{result.matchPercentage}%</span>
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <div>
                    <h4 className="font-bold flex items-center gap-2 text-green-600 mb-2">
                      <CheckCircle2 className="w-5 h-5" /> Key Strengths
                    </h4>
                    <ul className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                      {result.keyStrengths.map((s, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-green-500 font-bold">•</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {result.missingGaps.length > 0 && (
                    <div>
                      <h4 className="font-bold flex items-center gap-2 text-amber-600 mb-2">
                        <AlertCircle className="w-5 h-5" /> Potential Gaps
                      </h4>
                      <ul className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                        {result.missingGaps.map((g, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-amber-500 font-bold">•</span>
                            {g}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-6 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">AI Summary</h4>
                    <p className="text-sm italic text-slate-600 leading-relaxed">"{result.summary}"</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
