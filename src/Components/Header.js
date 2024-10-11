import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Header.scss";
import useLang from '../Components/useLang';

const Header = ({ page }) => {
    const location = useLocation();
    const path = location.pathname;

    const [lang, upLang] = useLang();
    console.log(page);

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
                    <li className={path === "/" ? 'NavActive' : ''}><Link to="/">{lang === 'en' ? 'HOME' : 'ACCUEIL'}</Link></li>
                    <li className={path === "/Skill" ? 'NavActive' : ''}><Link to="/Skill">{lang === 'en' ? 'SKILLS' : 'COMPETENCES'}</Link></li>
                    <li className={path === "/Project" ? 'NavActive' : ''}><Link to="/Project">{lang === 'en' ? 'PROJECTS' : 'PROJETS'}</Link></li>
                    <li className={path === "/Contact" ? 'NavActive' : ''}><Link to="/Contact">CONTACT</Link></li>
                    <li onClick={toggleLang} className='toggleLang'>
                        {lang === 'en' ? '/EN' : '/FR'}</li>
                </ul>
            </nav>
            <div className='border'></div>
        </header>
    );
};

export default Header;