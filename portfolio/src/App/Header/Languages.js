import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

const Languages = () => {
    const {t, i18n} = useTranslation();

    const translateClick = (lang)=>{
        i18n.changeLanguage(lang);
    }

    return (
        <LanguageSelect onChange={(e)=>translateClick(e.target.value)}>
            <option value='en'>
                English
            </option>
            <option value='es'>
                Español
            </option>
        </LanguageSelect>
    );
}


const LanguageSelect = styled.select`
    margin-left: .5rem;
    background: none;
    border: none;
    color: ${props=>props.theme.colors.primary}
`


export default Languages;