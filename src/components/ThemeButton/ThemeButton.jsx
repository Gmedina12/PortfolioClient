import React, { useState } from 'react';
import style from './ThemeButton.module.css';

export const ThemeButton = ({ onClick }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleClick = () => {
        setIsDarkTheme(!isDarkTheme);
        onClick();
    };

    return (
        <div className={style.buttonPosition}>
            <button onClick={handleClick} className={style.theme__icon}>
                {isDarkTheme ? <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/sun--v1.png" alt="sun--v1"/> : <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/bright-moon--v1.png" alt="bright-moon--v1"/>}
            </button>
        </div>
    );
};
