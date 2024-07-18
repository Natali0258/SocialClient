import { useTranslation } from "react-i18next"

const SwitchLang = () => {

    const { t, i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    return(
        <div className="switchLang">
            <button type="button" className={`switchLangBtn ${i18n.language === 'ru' ? 'active' : ''}`} 
            onClick={() => changeLanguage("ru")}>RU</button>
            <button type="button" className={`switchLangBtn ${i18n.language === 'en' ? 'active' : ''}`} 
            onClick={() => changeLanguage("en")}>EN</button>
        </div>
    )
}
export default SwitchLang;

