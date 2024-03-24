import { createContext } from 'react';
import { useRouter } from "next/router";
import nextConfig from '../../next.config.mjs';
import es from '../../public/locale/es';
import en from '../../public/locale/en';

export interface I18nConfig {
    locales: string[];
    defaultLocale: string;
}

export const LangContext = createContext<any>(undefined);
export const LangContextProvider = ({children}:any) => {
    const router = useRouter();
    const { locale } = router;
    const { i18n } = nextConfig as { i18n: I18nConfig }
    let t 

    switch (locale) {
        case 'es':
            t  = es;
            break;
        case 'en':
            t  = en;
            break;
        default:
            t  = i18n.defaultLocale;
            break;
    }

    let value = {
        locale: locale,
        t: t
    }
    
    return (
        <LangContext.Provider value={value}>
            {children}
        </LangContext.Provider>
    )
}