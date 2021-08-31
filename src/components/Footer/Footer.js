import Styles from './footer.module.css'

function Footer() {
    return(
        <div className={Styles.Box}>
            <div>
                <h1 className={Styles.h1}>Sidor</h1>
                <ul className={Styles.text}>
                    <li>Om oss</li>
                    <li>Vanliga frågor</li>
                    <li>Kontakt</li>
                </ul>
            </div>
            <div>
                <h5 className={Styles.h5}>© 2021 Caferaider SWE, inc. All Rights Reserved</h5>
            </div>
        </div>
    )
}

export default Footer;