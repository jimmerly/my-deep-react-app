import React, { useState } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#FFF';
    } else {
      setTheme('light');
      document.body.style.backgroundColor = '#FFF';
      document.body.style.color = '#333';
    }
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}

export default ThemeToggle;
