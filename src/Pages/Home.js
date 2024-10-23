import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import './Home.scss';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CardProject from '../Components/CardProject';
import useLang from '../Components/useLang';

import pp from '../Images/pp.png';

const Home = () => {
    const [lang, upLang] = useLang();
    // useEffect(() => { upLang('en'); }, [upLang]);
    //console.log(lang);

    const [formData, setFormData] = useState({
        Name: '',
        Contact: '',
        Text: '',
    });

    const formChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        console.log('Formulaire soumis : ', formData);
        emailjs.send('zelda_v', 'form_portfolio', formData, 'd5LSTrDl9TyguQNrN');
        //alert('Formulaire soumis avec succès !');
    };

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
                        <img src="./IMG/C1.png" alt="Front-End Skills, git, github, scss, html, javascript, react" />
                    </div>
                    <div className='C2'>
                        <img src="./IMG/C2.png" alt="Back-End Skills, git, github, javascript, mongoDB, node.js, express.js" />
                    </div>
                    <div className='C1'>
                        <img src="./IMG/C3.png" alt="Other Skills Tools, git, github, blender, unity, Clip Studio Paint, Figma" />
                    </div>
                </section>
                <section className='MindSkills'>
                    <h3>Carte de compétences</h3>
                    <iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVLU7VfVg=/?moveToViewport=-1021,-183,2101,1047&embedId=736124108246" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>
                </section>
                <section className='Career'>
                    <h3>Experience</h3>
                    <ul>
                        <li><a href="https://openclassrooms.com/fr/paths/899-developpeur-web" target='_blank'>Openclassrooms - Formation Développeuse Web (Front-End)</a></li>
                        <li><a href="https://42.fr/" target='_blank'>42 - Ecole de programmation (Langage C)</a></li>
                        <li>Baccalauréat STI2D</li>
                    </ul>
                </section>
                <section className='Projects'>
                    <h3>{lang === 'en' ? 'Projects' : 'Projets'}</h3>
                    <CardProject //OC - P2
                        title={'Booki'}
                        info={"Page d'accueil d'une agence de voyage avec HTML & CSS"}
                        img={'./IMG/Booki.png'}
                        link={'https://zeldanyan.github.io/openclassroom_projet_2/'}
                        github={'https://github.com/Zeldanyan/openclassroom_projet_2'}
                        tag={'Front-End'} />
                    <CardProject //OC - P5
                        title={'Nina Carducci'}
                        info={'Débuggez et optimisez un site de photographe'}
                        img={'https://zeldanyan.github.io/openclassroom_projet_5/assets/images/slider/ryoji-iwata-wUZjnOv7t0g-unsplash.webp'}
                        link={'https://zeldanyan.github.io/openclassroom_projet_5/'}
                        github={'https://github.com/Zeldanyan/openclassroom_projet_5'}
                        tag={'Front-End CEO'} />
                    <CardProject //OC - P6
                        title={'Kasa'}
                        info={'Application web de location immobilière avec React'}
                        img={'./IMG/Kasa.png'}
                        link={'https://zeldanyan.github.io/openclassroom_projet_6/'}
                        github={'https://github.com/Zeldanyan/openclassroom_projet_6'}
                        tag={'Front-End React'} />
                    <CardProject //OC - P7
                        title={'Mon vieux grimoire'}
                        info={'Site de notation de livres'}
                        img={''}
                        link={''}
                        github={'https://github.com/Zeldanyan/openclassroom_projet_7_backend'}
                        tag={'Front-End Back-End Database API'} />
                </section>
                <section className='Contact' id='a_contact'>
                    <h3>Contact</h3>
                    <form onSubmit={formSubmit}>
                        <div className='form formName'>
                            <label htmlFor="Name">Nom</label>
                            <input type="text" id='Name' name='Name' value={formData.Name} onChange={formChange} />
                        </div>
                        <div className='form formContact'>
                            <label htmlFor="Contact">Email / Phone</label>
                            <input type="text" id='Contact' name='Contact' value={formData.Contact} onChange={formChange} />
                        </div>
                        <div className='form formText'>
                            <label htmlFor="Text">Message</label>
                            <textarea name="Text" id="Text" value={formData.Text} onChange={formChange}></textarea>
                        </div>

                        <button type="submit">Envoyer</button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;