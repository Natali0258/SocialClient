import HeaderSearch from './HeaderSearch';
import {IoNotificationsSharp} from 'react-icons/io5';
import {IoCameraSharp} from 'react-icons/io5';
import {IoIosArrowDown} from 'react-icons/io';
import SwitchLang from './SwitchLang/SwitchLang';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__left">
                        <h1 className="header__title">IT-RUN web</h1>
                        <HeaderSearch />
                    </div>
                    <div className="header__right">
                        <span className="header__notif">
                            <IoNotificationsSharp />
                        </span>
                        <SwitchLang />
                        <div className='header__user'>
                            <span className="header__user-icon">
                                <IoCameraSharp />
                            </span>
                            <div className='header__user-circle'></div>
                            <span className='header-arrow'>
                            <IoIosArrowDown />
                            </span>
                        </div>
                        
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header;