import React, { useEffect } from 'react';
import './Home.scss';
import Header from '../Components/Header';
import useLang from '../Components/useLang';

const Home = () => {
    const [lang, upLang] = useLang();
    // useEffect(() => { upLang('en'); }, [upLang]);
    console.log(lang);

    return (
        <div className='Home'>
            <Header />
        </div>
    );
};

export default Home;