import { useState, useEffect } from 'react';

export default function useDarkSide() {
  const [theme, setTheme] = useState('dark');

  if (typeof window !== 'undefined') {
    setTheme(localStorage.getItem('theme') || 'dark');
  }
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme ? colorTheme : 'light');
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];

  return null;
}
