import Styles from './index.module.css'

function Index() {
    return (
        <div className={Styles.heroContainer}>
            <div className={Styles.heroBanner}>
                <div className={Styles.heroBannerText}>
                    We have the best bikes
                </div>
            </div>
            <div className={Styles.textSection}>
                <h2 className={Styles.h2Styling}>
                    Caferaiders offers the best bikes on the market. We promise you high quality build bikes that you'll love!
                </h2>
            </div>
            <button className={Styles.btnStyling}>VIEW BIKES</button>
        </div>
    )
}

export default Index