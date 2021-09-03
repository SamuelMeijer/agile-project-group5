import Styles from './header.module.css'
import { NavLink } from 'react-router-dom'
import Img from '../../resources/images/logo.png'

function Header() {
    return (
        <div className={Styles.headerWrapper}>
            <div className={Styles.innerHeader}>
                <div className={Styles.siteLogo}>
                    <img className={Styles.logo} src={Img} alt=''/>
                </div>
                <div className={Styles.siteNavWrapper}>
                    <nav className={Styles.siteNavigation}>
                        <NavLink exact to='/' activeStyle={{fontWeight: "bold"}}>Hem</ NavLink>
                        <NavLink exact to='about' activeStyle={{fontWeight: "bold"}}>Om oss</NavLink>
                        <NavLink exact to='faq' activeStyle={{fontWeight: "bold"}}>Vanliga frågor</NavLink>
                        <NavLink exact to='contact' activeStyle={{fontWeight: "bold"}}>Kontakt</NavLink>
                    </nav>
                    <div className={Styles.changeLang}>
                        <p className={Styles.langHead}>SV</p>
                        <i className={`fas fa-chevron-down`}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
