import { useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';

const useLang = () => {
    const [lang, setLang] = useState('en');


    const upLang = useCallback((newLang = null) => {
        if (newLang) {
            setLang(newLang);
            document.documentElement.lang = newLang;
            Cookies.set('language', newLang, { expires: 365 });
        } else {
            const savedLanguage = Cookies.get('language');
            if (savedLanguage) {
                setLang(savedLanguage);
                document.documentElement.lang = savedLanguage;
            } else {
                const userLang = navigator.language || navigator.userLanguage;
                const initialLanguage = userLang.startsWith('fr') ? 'fr' : 'en';
                setLang(initialLanguage);
                document.documentElement.lang = initialLanguage;
            }
        }
    }, []);

    useEffect(() => {
        upLang();
    }, [upLang]);

    return [lang, upLang];
};

// const [lang, upLang] = useLang();
// useEffect(() => { upLang('fr'); }, [upLang]);

export default useLang;