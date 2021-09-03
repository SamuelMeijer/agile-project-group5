import Styles from './index.module.css'

import Bike1 from '../../resources/images/bike1.png';
import Bike2 from '../../resources/images/bike2.png';
import Bike3 from '../../resources/images/bike3.png';

function Index() {
    return (
    <div>
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

        <div id={ Styles.bikeSection }>
            <div>
                <h1>Popular Bikes</h1>
                <section>
                    <article>
                        <header>
                            <img src={ Bike1 } alt="Bike" />
                            <h3>89 000 SEK</h3>
                        </header>
                        <h4>BMW F 900 R</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className={ Styles.specTitle }>Specs:</p>
                        <footer>
                            <div>
                                <p>Maximum speed:</p> 
                                <p>189 mph</p>
                            </div>
                            <div>
                                <p>Capacity:</p> 
                                <p>999 cc</p>
                            </div>
                            <div>
                                <p>Output:</p> 
                                <p>205 hp</p>
                            </div>
                            <div>
                                <p>Max. torque:</p> 
                                <p>83 lbs-ft</p>
                            </div>
                        </footer>
                        <div className={ Styles.buyBtnContainer }>
                            <span>BUY</span>
                        </div>
                    </article>
                    <article>
                        <header>
                            <img src={ Bike2 } alt="Bike"/>
                            <h3>79 000 SEK</h3>
                        </header>
                        <h4>TRIUMPTH BV T1</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className={ Styles.specTitle }>Specs:</p>
                        <footer>
                            <div>
                                <p>Maximum speed:</p> 
                                <p>189 mph</p>
                            </div>
                            <div>
                                <p>Capacity:</p> 
                                <p>999 cc</p>
                            </div>
                            <div>
                                <p>Output:</p> 
                                <p>205 hp</p>
                            </div>
                            <div>
                                <p>Max. torque:</p> 
                                <p>83 lbs-ft</p>
                            </div>
                        </footer>
                        <div className={ Styles.buyBtnContainer }>
                            <span>BUY</span>
                        </div>
                    </article>
                    <article>
                        <header>
                            <img src={ Bike3 } alt="Bike" />
                            <h3>69 000 SEK</h3>
                        </header>
                        <h4>HARLEY DAVIDSON R5</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className={ Styles.specTitle }>Specs:</p>
                        <footer>
                            <div>
                                <p>Maximum speed:</p> 
                                <p>189 mph</p>
                            </div>
                            <div>
                                <p>Capacity:</p> 
                                <p>999 cc</p>
                            </div>
                            <div>
                                <p>Output:</p> 
                                <p>205 hp</p>
                            </div>
                            <div>
                                <p>Max. torque:</p> 
                                <p>83 lbs-ft</p>
                            </div>
                        </footer>
                        <div className={ Styles.buyBtnContainer }>
                            <span>BUY</span>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    </div>
    )
}

export default Index
