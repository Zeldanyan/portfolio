import React, { useEffect } from 'react';
import './Home.scss';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import useLang from '../Components/useLang';

import pp from '../Images/pp.png';
import C1 from '../Images/1-removebg-preview.png';
import C2 from '../Images/2-removebg-preview.png';
import C3 from '../Images/3-removebg-preview.png';

const Home = () => {
    const [lang, upLang] = useLang();
    // useEffect(() => { upLang('en'); }, [upLang]);
    console.log(lang);

    return (
        <div className='Home'>
            <Header />
            <main>
                <section className='About'>
                    <h1>Portfolio - Zelda Vigneron</h1>
                    <h2>{lang === 'en' ? 'Front-End Developer' : 'Développeuse Front-End'}</h2>
                    <p>Je suis une passionée de technologie et de design depuis mon enfance.</p>
                    <div className='AboutPP'>
                        <img src={pp} alt="" />
                    </div>
                </section>
                <section className='Skills'>
                    <h3>Compétences</h3>
                    <div className='C1'>
                        <img src={C1} alt="" />
                    </div>
                    <div className='C2'>
                        <img src={C2} alt="" />
                    </div>
                    <div className='C1'>
                        <img src={C3} alt="" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;