import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Gift, Heart, Sparkles, ExternalLink, MousePointerClick } from 'lucide-react';
import { FaEye } from 'react-icons/fa';
import { APP_DEFAULTS, DecorativeGoldLeaf, FloatingHeart } from './constants';

const GoldDust: React.FC<{ count?: number }> = ({ count = 160 }) => {
  const particles = Array.from({ length: count }).map((_, i) => {
    const type = i % 5 === 0 ? 'star' : 'dot';
    const size = type === 'star' ? 10 + Math.round(Math.random() * 12) : 4 + Math.round(Math.random() * 8);
    const left = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = 5 + Math.random() * 12;
    const opacity = 0.6 + Math.random() * 0.4;
    return { id: i, type, size, left, delay, duration, opacity };
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((p) => {
        if (p.type === 'star') {
          return (
            <div
              key={p.id}
              className="absolute glitter-star"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.left}%`,
                top: `${-12 + Math.random() * 22}%`,
                opacity: p.opacity,
                borderRadius: '50%',
                background: 'radial-gradient(circle, #fff 0%, rgba(255,255,255,0.6) 30%, var(--color-gold) 100%)',
                boxShadow: '0 4px 14px rgba(191,149,63,0.6)',
                transformOrigin: 'center',
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                mixBlendMode: 'screen',
                filter: 'blur(0.6px) drop-shadow(0 4px 12px rgba(191,149,63,0.6))',
              }}
            />
          );
        }

        return (
          <div
            key={p.id}
            className="absolute glitter-dot"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              top: `${-10 + Math.random() * 26}%`,
              opacity: p.opacity,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #fff 0%, var(--color-gold) 100%)',
              boxShadow: '0 4px 14px rgba(191,149,63,0.28)',
              mixBlendMode: 'screen',
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        );
      })}
    </div>
  );
};

const PasswordModal: React.FC<{ isOpen: boolean; onClose: () => void; onUnlock: () => void }> = ({ isOpen, onClose, onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setPassword('');
      setError('');
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (password === '1236') {
      onUnlock();
    } else {
      setError('Senha incorreta');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-parchment rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-gold/40">
        <h3 className="font-display text-2xl text-rose-900 text-center mb-2">🔐 Digite a Senha</h3>
        <p className="text-rose-800/60 text-center text-sm mb-6">Este presente está protegido!</p>

        <div className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder="Digite a senha"
            className="w-full px-4 py-3 rounded-lg border border-rose-900/20 bg-white text-rose-900 placeholder-rose-800/40 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/20"
            autoFocus
          />

          {error && <p className="text-red-600 text-sm text-center font-semibold">{error}</p>}

          <div className="flex gap-3 pt-4">
            <button onClick={onClose} className="flex-1 px-4 py-2 rounded-lg border border-rose-900/20 text-rose-900 font-semibold hover:bg-rose-900/5 transition-colors">
              Cancelar
            </button>
            <button onClick={handleSubmit} className="flex-1 px-4 py-2 rounded-lg bg-gold text-rose-950 font-semibold hover:brightness-110 transition-all active:scale-95">
              Desbloquear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const giftSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToGift = () => giftSectionRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen flex flex-col items-center bg-rose-950 text-rose-50 overflow-x-hidden selection:bg-gold/30">
      <style>{`
        @keyframes particle {
          0% { transform: translateY(-20vh) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.9; }
          50% { transform: translateY(50vh) translateX(20px) rotate(8deg); opacity: 0.8; }
          90% { opacity: 0.6; }
          100% { transform: translateY(120vh) translateX(-10px) rotate(18deg); opacity: 0; }
        }
        @keyframes fade-in { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scale-up { from{opacity:0;transform:scale(.98)} to{opacity:1;transform:scale(1)} }
        @keyframes float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)} }
        .glitter-dot{animation-name:particle;animation-timing-function:linear;animation-iteration-count:infinite;animation-fill-mode:both;will-change:transform,opacity}
        .glitter-star{animation-name:particle;animation-timing-function:linear;animation-iteration-count:infinite;animation-fill-mode:both;will-change:transform,opacity}
        .animate-fade-in{animation:fade-in .9s ease-out forwards}
        .animate-scale-up{animation:scale-up .9s cubic-bezier(.16,1,.3,1) forwards}
        .animate-float{animation:float 5s ease-in-out infinite}
      `}</style>

      <GoldDust />
      <PasswordModal isOpen={showPasswordModal} onClose={() => setShowPasswordModal(false)} onUnlock={() => { setIsRevealed(true); setShowPasswordModal(false); }} />

      <section className="relative w-full min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden bg-rose-950">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(136,47,74,0.4)_0%,transparent_70%)]" />

        <div className="absolute top-24 left-12 animate-float opacity-10 hidden md:block">
          <FloatingHeart />
        </div>
        <div className="absolute top-40 left-24 animate-float opacity-10 hidden md:block">
          <FaEye size={24} className="text-[#bf953f]" />
        </div>

        <div className="absolute top-12 flex flex-col items-center z-10 animate-fade-in w-full px-4 text-center">
          <span className="font-display text-sm sm:text-lg tracking-[0.2em] gold-gradient font-bold uppercase opacity-80">{APP_DEFAULTS.BRANDING}</span>
        </div>

        <div className="relative z-20 w-full max-w-sm mt-12 bg-parchment rounded-tr-[3rem] rounded-bl-[3rem] shadow-2xl p-8 border border-gold/20 animate-scale-up">
          <div className="absolute -top-4 -right-4 rotate-90 scale-x-[-1] pointer-events-none"><DecorativeGoldLeaf /></div>
          <div className="absolute -bottom-4 -left-4 pointer-events-none"><DecorativeGoldLeaf /></div>

          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="font-display text-2xl text-rose-900 pt-4 leading-tight">{APP_DEFAULTS.CARD_TITLE}</h1>

            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-rose-800/20" />
              <Heart size={16} className="text-rose-800/30" />
              <div className="w-12 h-[1px] bg-rose-800/20" />
            </div>

            <p className="font-serif italic text-lg leading-relaxed text-rose-800 px-2 whitespace-pre-line">"{APP_DEFAULTS.MESSAGE}"</p>

            <div className="pt-4 flex flex-col items-center">
              <span className="text-rose-700 font-semibold tracking-wide uppercase text-[10px]">Com profunda gratidão,</span>
              <span className="font-display text-xl text-[#bf953f] mt-1 relative">{APP_DEFAULTS.SENDER}<Sparkles size={10} className="absolute -top-2 -right-4 text-[#bf953f] animate-pulse" /></span>
            </div>
          </div>
        </div>

        {!scrolled && (
          <button onClick={scrollToGift} className="absolute bottom-8 z-10 flex flex-col items-center text-[#bf953f] animate-bounce cursor-pointer group">
            <span className="text-[10px] uppercase tracking-[0.3em] mb-2 opacity-60">Toque para abrir seu presente</span>
            <ChevronDown size={28} />
          </button>
        )}
      </section>

      <section ref={giftSectionRef} className="w-full min-h-screen flex flex-col items-center justify-center p-6 bg-rose-900 border-t border-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(136,47,74,0.3)_0%,transparent_80%)]" />

        <div className="max-w-md w-full flex flex-col items-center space-y-10 relative z-20">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4 group">
              <div className="absolute inset-0 bg-white/20 blur-xl rounded-full animate-pulse" />
              <Gift className="text-white relative z-10 w-12 h-12" strokeWidth={1.5} />
              <Sparkles className="absolute -top-2 -right-4 text-white animate-pulse" size={20} />
            </div>
            <h2 className="font-display text-3xl gold-gradient mb-2">Vale-Presente</h2>
            <p className="text-rose-100/60 max-w-[280px] text-sm italic">Pegue seu mimo, diva</p>
          </div>

          <div onClick={() => !isRevealed && setShowPasswordModal(true)} className={`relative p-8 bg-parchment rounded-3xl shadow-2xl border-2 border-gold/40 transition-all duration-700 ${!isRevealed ? 'cursor-pointer hover:scale-105' : ''}`}>
            {!isRevealed && (
              <div className="absolute inset-0 z-20 bg-rose-900/90 rounded-3xl flex flex-col items-center justify-center p-6 text-center animate-pulse-slow">
                <MousePointerClick className="text-gold mb-3 animate-bounce" size={32} />
                <span className="font-display text-gold text-sm tracking-widest uppercase">Toque para abrir</span>
              </div>
            )}

            <div className={`w-56 h-56 bg-white p-3 rounded-lg overflow-hidden flex items-center justify-center border border-rose-900/10 transition-all duration-1000 ${!isRevealed ? 'blur-md grayscale' : 'blur-0 grayscale-0'}`}>
              <a href={APP_DEFAULTS.GIFT_URL} target="_blank" rel="noopener noreferrer" className={`w-full h-full flex items-center justify-center ${!isRevealed ? 'pointer-events-none' : ''}`}>
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(APP_DEFAULTS.GIFT_URL)}&color=7f2b47`} alt="QR Code do Presente" className="w-full h-full object-contain" />
              </a>
            </div>

            <div className="mt-4 text-center">
              <div className="flex justify-center gap-2 mb-1">
                <Heart size={10} className="text-[#bf953f]" />
                <Sparkles size={10} className="text-[#bf953f] animate-pulse" />
                <Heart size={10} className="text-[#bf953f]" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-rose-900/60 font-bold mt-2">Vale 30 reais na Oboti!</p>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a href={APP_DEFAULTS.GIFT_URL} target="_blank" rel="noopener noreferrer" className="gold-button flex items-center gap-3 px-12 py-5 rounded-full text-rose-950 font-bold text-lg transition-all active:scale-95 hover:brightness-110 shadow-[0_10px_30px_rgba(191,149,63,0.4)]">
              RESGATAR NO SITE
              <ExternalLink size={20} />
            </a>
          </div>

          <div className="pt-12 flex flex-col items-center opacity-40">
            <div className="flex items-center gap-3 mb-2">
              <Heart size={12} fill="#bf953f" className="text-[#bf953f]" />
              <span className="font-display text-xs tracking-[0.4em] text-[#bf953f] uppercase">Ruth & Bea</span>
              <Heart size={12} fill="#bf953f" className="text-[#bf953f]" />
            </div>
            <p className="text-[9px] uppercase tracking-widest text-center">Obrigada por cuidar da minha autoestima em 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
