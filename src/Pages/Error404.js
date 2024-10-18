import React from 'react';
import './Error404.scss';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import useLang from '../Components/useLang';

const Error404 = () => {
    const [lang] = useLang();

    return (
        <div className='E404'>
            <Header page="404" />
            <main>
                <h1>{lang === 'en' ? 'Error 404' : 'Erreur 404'}</h1>
                <Link to="/" className='portalHome'>
                    <img src='./IMG/portal.png' alt="portal to the home" />
                    <p className='p1'>Portal</p><p className='p2'>{lang === 'en' ? 'to the home' : `vers l'accueil`}</p>
                </Link>

            </main>
        </div>
    );
};

export default Error404;