import { SupportedLanguages } from 'data/cucinaTree';
import { useState } from 'react';
import Dropdown from 'react-dropdown';
import setLanguage from 'next-translate/setLanguage'
import { useRouter } from 'next/router';
import { setCookie } from 'utils/genericUtils';

const languageToEmoji = (lang) => {
    switch (lang) {
        case SupportedLanguages.AL: return '🇦🇱'
        case SupportedLanguages.EN: return '🇺🇸'
        case SupportedLanguages.MK: return '🇲🇰'
        case SupportedLanguages.TR: return '🇹🇷'
        default: return ''
    }
}

const languageLabelRenderer = (lang) => {
    return <>
        <span className='Dropdown-placeholder__text'>{lang}</span>
        <span>
            {languageToEmoji(lang)}
            {/* <img src={`/images/flags/${lang}.svg`}></img> */}
        </span>
    </>
}

const options = Object.values(SupportedLanguages).map(lang => {
    return {
        value: lang,
        label: <div className='d-flex justify-content-between align-items-center'>
            {languageLabelRenderer(lang)}
        </div>,
    }
});

const LanguageSelection = () => {
    const router = useRouter()
    const { locale } = router

    const onSelectHandler = async (selected) => {
        setCookie(selected.value);
        await setLanguage(selected.value);
    }

    return (
        <Dropdown
            options={options}
            onChange={onSelectHandler}
            value={locale}
            placeholder="Select an option"
        />
    )
}

export default LanguageSelection;