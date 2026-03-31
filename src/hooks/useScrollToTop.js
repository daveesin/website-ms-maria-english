import { useEffect } from 'react';

export const useScrollToTop = () => {
  useEffect(() => {
    // Força o topo
    window.scrollTo(0, 0);
    
    // Garante que o navegador não tente restaurar a posição anterior
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);
};