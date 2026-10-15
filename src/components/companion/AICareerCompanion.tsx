import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { askCareerCompanion, CompanionResponse } from '../../services/aiService';
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  RefreshCw,
  ChevronDown
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  isFallback?: boolean;
  fallbackReason?: string;
  timestamp: string;
}

export const AICareerCompanion: React.FC = () => {
  const { companionOpen, setCompanionOpen, language, profile, activeTab } = useApp();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isMr = language === 'mr';

  // Seed initial contextual greeting when opened
  useEffect(() => {
    if (companionOpen && messages.length === 0) {
      const initialGreeting = isMr
        ? `नमस्कार ${profile.name}! मी तुमचा **कौशल्यदिशा AI मार्गदर्शक** आहे.
तुम्ही सध्या **${profile.currentStage.replace('_', ' ')}** (${profile.currentClassOrYear || 'शिक्षणाचा टप्पा'}) मध्ये आहात.

तुम्हाला महाराष्ट्रातील शिक्षण मार्ग, पात्रता किंवा करिअरबद्दल काय प्रश्न विचारायचा आहे?`
        : `Hello ${profile.name}! I am your **KaushalyaDisha Career Companion**.
You are currently exploring at the **${profile.currentStage.replace('_', ' ')}** stage (${profile.currentClassOrYear || 'Active'}).

Ask me anything about verified Maharashtra education routes, admission requirements, or skills!`;

      setMessages([
        {
          id: 'msg_initial',
          sender: 'assistant',
          text: initialGreeting,
          isFallback: false,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  }, [companionOpen, profile, language, isMr]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  if (!companionOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || inputPrompt).trim();
    if (!query || loading) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputPrompt('');
    setLoading(true);

    try {
      const resp: CompanionResponse = await askCareerCompanion({
        prompt: query,
        learnerStage: profile.currentStage,
        currentStream: profile.currentStreamOrTrade || profile.currentClassOrYear,
        language,
        careerContext: profile.targetCareerId,
      });

      const assistantMsg: ChatMessage = {
        id: `ai_${Date.now()}`,
        sender: 'assistant',
        text: resp.text,
        isFallback: resp.isFallback,
        fallbackReason: resp.fallbackReason,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Failed to get companion response:', err);
    } finally {
      setLoading(false);
    }
  };

  // Stage-aware quick suggested prompt chips
  const quickChips = isMr
    ? profile.currentStage === 'class_10'
      ? [
          'दहावीनंतर ११वी सायन्स, पॉलिटेक्निक आणि ITI मध्ये काय फरक आहे?',
          'पॉलिटेक्निकनंतर इंजिनिअरिंगला थेट दुसऱ्या वर्षात कसे जातात?',
          'दहावीनंतर कमी खर्चात कोणते उत्तम पर्याय आहेत?',
        ]
      : profile.currentStage === 'class_8_9'
      ? [
          'माझ्या आवडीच्या विषयांवरून मी कोणती क्षेत्रे एक्सप्लोर करू?',
          'UI/UX डिझायनरचे रोजचे काम काय असते?',
          '८वी-९वीत करिअर निवडणे आवश्यक आहे का?',
        ]
      : profile.currentStage === 'diploma_iti'
      ? [
          'DSE इंजिनिअरिंगसाठी कोणती कागदपत्रे लागतात?',
          'डिप्लोमानंतर NATS अप्रेंटिसशिपचे काय फायदे आहेत?',
          'मेकॅनिकल किंवा संगणक शाखेत सध्या कोणत्या कौशल्यांना मागणी आहे?',
        ]
      : [
          'माझ्या पदवीनंतर डेटा अ‍ॅनालिस्ट कसे होता येईल?',
          'MPSC परीक्षा आणि कॉर्पोरेट नोकरीत काय फरक आहे?',
          'कौशल्य पासपोर्टमध्ये कोणते प्रोजेक्ट्स ठेवावेत?',
        ]
    : profile.currentStage === 'class_10'
    ? [
        'What is the difference between 11th Science and Polytechnic Diploma?',
        'How does Direct Second Year (DSE) lateral entry work?',
        'What are the best low-cost vocational options after Class 10?',
      ]
    : profile.currentStage === 'class_8_9'
    ? [
        'How do my favorite school subjects connect to careers?',
        'What does a Front-End Developer or Designer do daily?',
        'What should I discuss with my parents about career choices?',
      ]
    : profile.currentStage === 'diploma_iti'
    ? [
        'What are the eligibility criteria for DSE Engineering lateral entry?',
        'How does the 1-year NATS industrial apprenticeship work?',
        'Which technical skills should I build during final year?',
      ]
    : [
        'What concrete skills are needed for a Junior Data Analyst in Pune/Mumbai?',
        'How can I build a portfolio if I come from a non-tech degree?',
        'What should I verify before deciding on competitive exams?',
      ];

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full sm:w-[420px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-slate-300 flex flex-col max-h-[620px] h-[580px] overflow-hidden animate-in fade-in slide-in-from-bottom-3">
      {/* Companion Header */}
      <div className="bg-[#101828] text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#F2A541] flex items-center justify-center text-[#101828]">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-sm flex items-center gap-2">
              <span>{isMr ? 'कौशल्यदिशा AI मार्गदर्शक' : 'Career Discovery Companion'}</span>
            </div>
            <div className="text-[11px] text-slate-300 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Grounded in Maharashtra rules</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCompanionOpen(false)}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAF8F3]">
        {messages.map((m) => {
          const isUser = m.sender === 'user';
          return (
            <div
              key={m.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[88%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                  isUser
                    ? 'bg-[#101828] text-white rounded-br-xs'
                    : 'bg-white text-[#101828] border border-[#e2dacb] shadow-2xs rounded-bl-xs'
                }`}
              >
                {m.text}
              </div>

              {/* Honest Fallback or Source Badge */}
              {!isUser && (
                <div className="mt-1 flex items-center gap-2 px-1 text-[10px]">
                  {m.isFallback ? (
                    <span className="inline-flex items-center gap-1 text-amber-800 bg-amber-100/90 border border-amber-300 px-1.5 py-0.5 rounded font-medium">
                      <AlertCircle className="w-2.5 h-2.5" />
                      <span>{isMr ? 'स्थानिक पडताळणी मोड (Local Grounded Guidance)' : 'Local Grounded Guidance'}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded font-medium">
                      <ShieldCheck className="w-2.5 h-2.5" />
                      <span>Gemini 3.8 Flash · Verified Context</span>
                    </span>
                  )}
                  <span className="text-slate-400 font-mono">{m.timestamp}</span>
                </div>
              )}
            </div>
          );
        })}

        {loading && (
          <div className="flex items-center gap-2 text-xs text-slate-500 bg-white p-3 rounded-xl border border-slate-200 w-fit">
            <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#168C86]" />
            <span>{isMr ? 'मार्गदर्शक विचार करत आहे...' : 'Companion is thinking...'}</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompt Chips */}
      <div className="p-2 bg-white border-t border-slate-200 overflow-x-auto flex gap-1.5 shrink-0 scrollbar-none">
        {quickChips.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(chip)}
            disabled={loading}
            className="whitespace-nowrap px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#FAF8F3] text-slate-700 border border-slate-200 hover:border-[#168C86] hover:text-[#168C86] transition-colors shrink-0"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputPrompt}
          onChange={(e) => setInputPrompt(e.target.value)}
          placeholder={
            isMr
              ? 'प्रवेश, पात्रता किंवा करिअरबद्दल विचारा...'
              : 'Ask about pathways, entrance tests, skills...'
          }
          className="flex-1 px-3 py-2 text-xs sm:text-sm bg-[#FAF8F3] border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#168C86]"
        />
        <button
          type="submit"
          disabled={!inputPrompt.trim() || loading}
          className="p-2.5 bg-[#101828] text-white rounded-xl hover:bg-[#243B64] disabled:opacity-40 transition-colors shrink-0"
          title="Send"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
