import React, { useState, useEffect } from 'react';
import { SwitcherWrapp } from './ThemeSwitcher.styled';

export const ThemeSwitcher = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
        const newTheme = !isDarkTheme ? 'dark' : 'light';
        document.body.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
    };
    useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.dataset.theme = savedTheme;
      setIsDarkTheme(savedTheme === 'dark');
    }
  }, []);

    return (
        <>
            <SwitcherWrapp className='switcher-wrapp'>
              <input type="checkbox" className='switcher' onChange={toggleTheme}
                checked={isDarkTheme} />
              <span className="switcher-slider"></span>
            </SwitcherWrapp>
        </>
    )
}

export default ThemeSwitcher;