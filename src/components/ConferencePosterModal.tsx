import React from 'react';
import { X, ExternalLink, Calendar, MapPin, Clock } from 'lucide-react';
import { Language } from '../types/presentation';
import { PRESENTATION_INFO } from '../data/presentationData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ConferencePosterModal: React.FC<Props> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative bg-[#08275A] border border-[#168BFF]/40 rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 px-6 border-b border-[#168BFF]/20 flex items-center justify-between bg-[#061A3D]">
          <div>
            <h3 className="font-bold text-white text-base">
              {lang === 'en' ? 'Official Conference Poster' : 'الملصق الرسمي للمؤتمر'}
            </h3>
            <p className="text-xs text-[#38C8FF]">
              {PRESENTATION_INFO.conference[lang]}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Poster Image Container */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col items-center bg-[#061A3D]/50">
          <img
            src="/assets/logos/conference-poster.jpeg"
            alt="Official Conference Poster - Dr. Anwr Altahir"
            className="w-full max-w-lg rounded-xl shadow-2xl border border-white/10 object-contain"
            onError={(e) => {
              // fallback to uploaded path if needed
              (e.target as HTMLImageElement).src = '/public/assets/aistudio/WhatsApp_Image_2026-11-06_at_13.03.27__2__c7468d22.jpeg';
            }}
          />
        </div>

        {/* Footer with key event facts */}
        <div className="p-4 px-6 border-t border-[#168BFF]/20 bg-[#061A3D] flex flex-wrap items-center justify-between gap-3 text-xs text-[#DCE5F2]/80">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#38C8FF]" />
            <span>{PRESENTATION_INFO.location[lang]}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-[#38C8FF]" />
            <span>{PRESENTATION_INFO.date[lang]}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-[#38C8FF]" />
            <span>{PRESENTATION_INFO.time[lang]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
