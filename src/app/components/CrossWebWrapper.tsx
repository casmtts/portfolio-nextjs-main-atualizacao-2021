// src/components/CrossBrowserWrapper.tsx
'use client'

import { useEffect, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function CrossBrowserWrapper({ children }: Props) {
  useEffect(() => {
    // Detecta a largura da scrollbar
    const detectScrollbar = () => {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      if (scrollbarWidth > 0) {
        document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
        // Compensa a diferença da scrollbar
        document.body.style.marginRight = `${scrollbarWidth}px`;
      } else {
        document.documentElement.style.setProperty('--scrollbar-width', '0px');
        document.body.style.marginRight = '0px';
      }
    };

    detectScrollbar();

    window.addEventListener('resize', detectScrollbar);
    return () => window.removeEventListener('resize', detectScrollbar);
  }, []);

  return <>{children}</>;
}