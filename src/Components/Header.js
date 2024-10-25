import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Header.scss";
import useLang from '../Components/useLang';

const Header = ({ page }) => {
    const location = useLocation();
    const path = location.pathname;

    const [lang, upLang] = useLang();

    const toggleLang = () => {
        const newLang = lang === 'en' ? 'fr' : 'en';
        upLang(newLang);
        window.location.reload();
    };

    return (
        <header className='Header'>
            <p className='title'>{page === '404' ? 'Zelda 404' : 'Zelda Vigneron'}</p>
            <nav className='NavBanner'>
                <ul>
                    <li className={path === "/" || "/portfolio" ? 'NavActive' : ''}><Link to="/portfolio/">{lang === 'en' ? 'HOME' : 'ACCUEIL'}</Link></li>
                    <li className={path === "/Skill" ? 'NavActive' : ''}><a href='#skill'>{lang === 'en' ? 'SKILLS' : 'COMPETENCES'}</a></li>
                    <li className={path === "/Project" ? 'NavActive' : ''}><a href='#project'>{lang === 'en' ? 'PROJECTS' : 'PROJETS'}</a></li>
                    <li className={path === "/Contact" ? 'NavActive' : ''}><a href='#contact'>CONTACT</a></li>
                    <li onClick={toggleLang} className='toggleLang'>
                        {lang === 'en' ? '/EN' : '/FR'}</li>
                </ul>
            </nav>
            <div className='border'></div>
        </header>
    );
};

export default Header;