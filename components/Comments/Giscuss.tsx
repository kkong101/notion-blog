import { useEffect } from 'react';
import React from 'react';

const Giscus = () => {
  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem('preferences')).isDarkMode;
    const theme = darkMode ? 'dark_dimmed' : 'light_high_contrast';
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'jeonghyeon00/notion-blog');
    script.setAttribute('data-repo-id', 'R_kgDOMHNymA');
    script.setAttribute('data-category', 'Comments');
    script.setAttribute('data-category-id', 'DIC_kwDOMHNymM4Cf-mA');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', theme);
    script.setAttribute('data-lang', 'ko');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [darkMode]);

  return <div className="giscus"></div>;
};

export default Giscus;
