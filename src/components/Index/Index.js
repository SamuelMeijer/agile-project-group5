import Bike1 from '../../resources/images/bike1.png';
import Bike2 from '../../resources/images/bike2.png';
import Bike3 from '../../resources/images/bike3.png';
import Styles from './index.module.css';

function Index() {
    return (
        <div id={ Styles.bikeSection }>
            <div>
                <h1>Popular Bikes</h1>
                <section>
                    <article>
                        <header>
                            <img src={ Bike1 } />
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
                            <a href="#">BUY</a>
                        </div>
                    </article>
                    <article>
                        <header>
                            <img src={ Bike2 } />
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
                            <a href="#">BUY</a>
                        </div>
                    </article>
                    <article>
                        <header>
                            <img src={ Bike3 } />
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
                            <a href="#">BUY</a>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default Index
