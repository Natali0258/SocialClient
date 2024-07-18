import { useTranslation } from 'react-i18next';
import {IoSearchSharp} from 'react-icons/io5';

const HeaderSearch = () => {

    const {t} = useTranslation()
    
    return (
            <label className='header__search'>
                <span className="header__search-icon">
                    <IoSearchSharp />
                </span>
                <input placeholder={t('header.input')} className="header__search-input" type="text" />
            </label>
    )
}
export default HeaderSearch;