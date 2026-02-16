
import React from 'react';
import { PhoneIcon, MessageCircle } from './Icons';
import { PHONE_NUMBER, PHONE_RAW } from '../constants';

const StickyFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:py-4 py-3">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="hidden md:block">
          <p className="text-slate-600 font-medium">Protecting your home in the Treasure Valley.</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-3">
          <a 
            href={`tel:${PHONE_RAW}`} 
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-delta-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all active:scale-95 shadow-lg"
          >
            <PhoneIcon className="w-5 h-5" />
            <span>Call Us</span>
          </a>
          <a 
            href={`sms:${PHONE_RAW}`} 
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white font-bold py-3 px-8 rounded-full transition-all active:scale-95 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Text Us</span>
          </a>
        </div>
        
        <div className="hidden lg:block">
          <p className="text-delta-orange font-black text-lg tracking-tight">{PHONE_NUMBER}</p>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
