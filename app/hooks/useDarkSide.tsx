import { useState, useEffect } from 'react';

export default function useDarkSide() {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const item = localStorage.getItem('key');
  }
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];

  return null;
}
