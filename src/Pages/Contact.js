import React from 'react';
import './Home.scss';
import Header from '../Components/Header';
import useLang from '../Components/useLang';

const Contact = () => {
    const [lang] = useLang();

    return (
        <div>
            <Header />
        </div>
    );
};

export default Contact;