import Styles from './footer.module.css'
import { Link } from 'react-router-dom'

function Footer() {
    return(
        <div className={Styles.Box}>
            <div>
                <h1 className={Styles.h1}>Sidor</h1>
                <ul className={Styles.text}>
                    <li><Link to ="/About" className={Styles.text}>Om oss</Link></li>
                    <li><Link to ="/faq" className={Styles.text}>Vanliga frågor</Link></li>
                    <li><Link to ="/Contact" className={Styles.text}>Kontakt</Link></li>
                </ul>
            </div>
            <div>
                <h5 className={Styles.h5}>© 2021 Caferaider SWE, inc. All Rights Reserved</h5>
            </div>
        </div>
    )
}

export default Footer;