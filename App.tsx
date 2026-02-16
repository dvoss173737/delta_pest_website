
import React, { useState } from 'react';
import StickyFooter from './components/StickyFooter';
import { 
  ShieldCheck, 
  Bug, 
  Zap, 
  Building2, 
  MapPin, 
  CheckCircle,
  PhoneIcon,
  MessageCircle,
  ArrowRight,
  DeltaLogo
} from './components/Icons';
import { 
  COMPANY_NAME, 
  PHONE_NUMBER, 
  SERVICES, 
  SERVICE_AREAS, 
  SERVICE_AREA,
  LOCATION,
  PHONE_RAW 
} from './constants';

const ServiceIcon = ({ name, className }: { name: string, className?: string }) => {
  switch (name) {
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Bug': return <Bug className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Building2': return <Building2 className={className} />;
    default: return <ShieldCheck className={className} />;
  }
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen pb-32">
      {/* Navigation */}
      <nav className="bg-white sticky top-0 z-40 border-b border-slate-100">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DeltaLogo className="w-10 h-10 text-delta-orange" />
            <div className="flex flex-col -gap-1">
              <span className="text-xl font-black text-slate-900 leading-none tracking-tighter uppercase">DELTA PEST</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-bold text-slate-600 uppercase text-xs tracking-widest">
            <a href="#services" className="hover:text-delta-orange transition-colors">Services</a>
            <a href="#about" className="hover:text-delta-orange transition-colors">About</a>
            <a href="#areas" className="hover:text-delta-orange transition-colors">Areas</a>
            <a 
              href={`tel:${PHONE_RAW}`} 
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-black transition-all"
            >
              <PhoneIcon className="w-4 h-4" />
              {PHONE_NUMBER}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-slate-900"
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4 font-bold text-slate-900 uppercase text-sm tracking-widest">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-2">Services</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2">About</a>
            <a href="#areas" onClick={() => setIsMenuOpen(false)} className="block py-2">Areas</a>
            <a href={`tel:${PHONE_RAW}`} className="block py-3 px-6 bg-delta-orange text-white rounded-xl text-center">
              Call {PHONE_NUMBER}
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-20 grayscale" 
            alt="Clean Home"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-delta-orange px-4 py-1.5 rounded-full border border-delta-orange/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-delta-orange"></span>
              </span>
              <span className="text-sm font-bold tracking-wide uppercase">Serving the Treasure Valley</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[1] mb-6 tracking-tighter">
              BEYOND PEST <br/> CONTROL
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-2xl font-medium">
              Headquartered in {LOCATION}. High-performance pest solutions for homes and businesses across the {SERVICE_AREA}.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${PHONE_RAW}`}
                className="bg-delta-orange text-white text-lg font-black px-12 py-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(255,121,0,0.3)] hover:-translate-y-1 transition-all shadow-xl uppercase tracking-wider"
              >
                <PhoneIcon className="w-6 h-6" />
                Call Now
              </a>
              <a 
                href={`sms:${PHONE_RAW}`}
                className="bg-white/5 backdrop-blur-md text-white border border-white/20 text-lg font-black px-12 py-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all uppercase tracking-wider"
              >
                <MessageCircle className="w-6 h-6" />
                Text Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase">THE DELTA ADVANTAGE</h2>
            <div className="h-2 w-16 bg-delta-orange mx-auto rounded-full mb-6"></div>
            <p className="text-slate-500 max-w-xl mx-auto text-lg font-medium">Professional treatment for residential and commercial environments.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="group bg-slate-50 p-10 rounded-[32px] border border-slate-100 hover:border-delta-orange/30 hover:bg-white hover:shadow-2xl transition-all">
                <div className="bg-white p-4 w-16 h-16 rounded-2xl shadow-sm mb-8 flex items-center justify-center group-hover:bg-delta-orange group-hover:text-white transition-colors">
                  <ServiceIcon name={s.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-none">ROOTED IN <span className="text-delta-orange">{LOCATION}</span></h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              Delta Pest is built on local expertise. We know the specific pest pressures of the Treasure Valley because we live here. Our technicians arrive in uniform, fully equipped to resolve your issues immediately.
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
              {['Locally Owned & Operated', 'Licensed & Insured Professionals'].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-delta-orange flex-shrink-0" />
                  <span className="font-bold text-slate-800 text-lg uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="p-8 md:p-12 bg-slate-900 rounded-[32px] shadow-2xl flex flex-col md:flex-row items-center justify-center gap-8 border border-white/5">
              <div className="p-4 bg-delta-orange rounded-2xl">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-black text-white text-2xl mb-1 uppercase tracking-tight">Need an Estimate?</h4>
                <p className="text-slate-400 mb-6 font-medium">Text a photo of the issue for an instant quote.</p>
                <a href={`sms:${PHONE_RAW}`} className="bg-white text-slate-900 px-8 py-4 rounded-xl font-black inline-flex items-center gap-2 hover:bg-delta-orange hover:text-white transition-all uppercase tracking-widest text-sm">
                  Text {PHONE_NUMBER} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-24 bg-white overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-2 bg-slate-950 text-white px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest mb-6">
                <MapPin className="w-4 h-4 text-delta-orange" /> SQUAD DEPLOYMENT
              </div>
              <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-none">WHERE WE <span className="text-delta-orange">ELIMINATE.</span></h2>
              <p className="text-slate-500 mb-10 text-xl font-medium">Mobile service across the entire Treasure Valley corridor.</p>
              <div className="grid grid-cols-2 gap-y-5 gap-x-8">
                {SERVICE_AREAS.map(area => (
                  <div key={area} className="flex items-center gap-3 text-slate-900 font-black text-lg uppercase tracking-tight">
                    <div className="w-3 h-3 bg-delta-orange rounded-sm rotate-45"></div>
                    {area}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-2/3 w-full">
              <div className="relative bg-slate-950 rounded-[40px] p-8 md:p-12 aspect-[16/9] flex items-center justify-center overflow-hidden border border-white/5 shadow-2xl">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#FF7900 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-28 h-28 bg-delta-orange text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(255,121,0,0.5)]">
                    <DeltaLogo className="w-16 h-16" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-4 italic tracking-tighter uppercase">DELTA PEST IS EN ROUTE.</h3>
                  <p className="text-orange-400 font-black text-xl uppercase tracking-widest">Rapid response standard.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Contact Section (No Form) */}
      <section className="py-24 bg-delta-orange relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <DeltaLogo className="w-96 h-96 text-white" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">TERMINATE THE <br/> PROBLEM.</h2>
            <p className="text-2xl text-orange-100 mb-12 font-black uppercase tracking-widest">Call or text for immediate service.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a 
                href={`tel:${PHONE_RAW}`}
                className="group bg-slate-950 p-10 md:p-14 rounded-[40px] flex flex-col items-center gap-6 hover:scale-[1.02] transition-all shadow-2xl border border-white/5"
              >
                <div className="w-20 h-20 bg-delta-orange text-white rounded-3xl flex items-center justify-center shadow-xl">
                  <PhoneIcon className="w-10 h-10" />
                </div>
                <div className="text-center">
                  <p className="text-slate-500 font-black uppercase tracking-widest text-sm mb-2">Voice Dispatch</p>
                  <p className="text-4xl md:text-5xl font-black text-white tracking-tighter">{PHONE_NUMBER}</p>
                </div>
              </a>
              
              <a 
                href={`sms:${PHONE_RAW}`}
                className="group bg-white p-10 md:p-14 rounded-[40px] flex flex-col items-center gap-6 hover:scale-[1.02] transition-all shadow-2xl"
              >
                <div className="w-20 h-20 bg-slate-950 text-white rounded-3xl flex items-center justify-center shadow-xl">
                  <MessageCircle className="w-10 h-10" />
                </div>
                <div className="text-center">
                  <p className="text-slate-400 font-black uppercase tracking-widest text-sm mb-2">Instant Text</p>
                  <p className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter">{PHONE_NUMBER}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-10">
            <DeltaLogo className="w-16 h-16 text-delta-orange mb-4" />
            <span className="text-3xl font-black text-slate-950 tracking-tighter uppercase">DELTA PEST</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-slate-950 font-black mb-10 uppercase tracking-widest text-sm">
            <a href="#services" className="hover:text-delta-orange transition-colors">Services</a>
            <a href="#about" className="hover:text-delta-orange transition-colors">History</a>
            <a href="#areas" className="hover:text-delta-orange transition-colors">Coverage</a>
            <a href={`tel:${PHONE_RAW}`} className="hover:text-delta-orange transition-colors">Dispatch</a>
          </div>
          <p className="text-slate-400 text-sm mb-4 font-medium uppercase tracking-tight">&copy; {new Date().getFullYear()} {COMPANY_NAME} &bull; Star, Idaho &bull; Treasure Valley</p>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">Headquartered in Star, ID. Providing advanced residential and commercial pest management across Boise, Meridian, Eagle, and the Greater Treasure Valley region.</p>
        </div>
      </footer>

      {/* Main Sticky CTA Footer */}
      <StickyFooter />
    </div>
  );
};

export default App;