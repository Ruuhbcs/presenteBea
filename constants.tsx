
import React from 'react';

export const APP_DEFAULTS = {
  BRANDING: "Um presente meu, para você",
  CARD_TITLE: "Bea, obrigada por 2025!",
  RECIPIENT: "Bea",
  SENDER: "Ruth",
  MESSAGE: "Passei algumas horas codando esse site simples, mas com carinho para te dar um simples mimo. Para agradecer seu cuidado comigo em 2025, minha autoestima é outra desde que conheci seu trabalho, obrigada. Espero que seu 2026 seja incrível, você merece!",
  
  // 🔗 MUDE O LINK ABAIXO: Cole aqui o link do Vale Presente ou do site que você quer que o QR Code leve.
  GIFT_URL: "https://giftcard.todo.gift/apx6FrmmcBFvMurKPG6yH8tFJs6vzl4liSC3"
};

export const DecorativeGoldLeaf = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
    <path d="M10 90C10 90 20 40 80 10C80 10 90 40 50 80C30 95 10 90 10 90Z" stroke="#bf953f" strokeWidth="1"/>
    <path d="M15 85L45 55" stroke="#bf953f" strokeWidth="0.5"/>
    <path d="M45 55L75 25" stroke="#bf953f" strokeWidth="0.5"/>
    <circle cx="80" cy="10" r="2" fill="#bf953f"/>
  </svg>
);

export const THEME = {
  ROSE_950: '#2b0216',
  ROSE_900: '#4a0f29',
  ROSE_800: '#7f2b47',
  GOLD: '#bf953f',
  PARCHMENT: '#fcfaf2'
};

export const FloatingHeart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#bf953f" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
  </svg>
);
