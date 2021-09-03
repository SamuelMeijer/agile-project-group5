import Styles from './about.module.css';

import gents from '../../resources/images/distinguished-gents-ride.jpg';
import profile from '../../resources/images/profile.jpg';

function About() {
    return(
        <div className={Styles.wrapper}>
            <header className={Styles.top}>
                <div className={Styles.banner}>
                    <h1 className={Styles.h1}>We Were Born To Race</h1>
                </div>
            </header>

            <div className={Styles.middle}>
                <div className={Styles.mid}>
                    <div className={Styles.gentsDiv}>
                        <img className={Styles.gentsImg} src={gents} alt="Gentlemen" />
                    </div>
                        
                    <div className={Styles.middleText}>
                        <h2 className={Styles.h2}>About Us</h2>
                        <p className={Styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vulputate eu lectus sapien morbi odio. Scelerisque quis duis facilisis nunc, in augue porttitor. Eleifend pharetra urna pellentesque sed at ultricies sem. Sed odio eu et ut mattis sagittis venenatis sed maecenas.</p>
                    </div>
                </div>
            </div>

            <div className={Styles.emph2box}>
                <h2 className={Styles.h2}>Employees</h2>
            </div>

            <div className={Styles.boxWrapper}>
                <div className={Styles.boxTop}>

                    <div className={Styles.boxOne}>
                            <div className={Styles.cardImgContainer}>
                                <img className={Styles.cardImg} src={profile} alt="Profile" />
                            </div>
                        <div className={Styles.cardName}>
                            <h3 className={Styles.h3}>Stefan Helikoptersson</h3>
                        </div>
                        <div className={Styles.cardInfo}>
                            <p>VD</p>
                            <p>example@email.com</p>
                        </div>
                        <div className={Styles.cardLorem}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nulla nascetur eu congue tincidunt euismod.</p>
                        </div>
                    </div>

                    <div className={Styles.boxTwo}>
                            <div className={Styles.cardImgContainer}>
                                <img className={Styles.cardImg} src={profile} alt="Profile" />
                            </div>
                        <div className={Styles.cardName}>
                            <h3 className={Styles.h3}>Filip Hårdisksson</h3>
                        </div>
                        <div className={Styles.cardInfo}>
                            <p>Finansräv</p>
                            <p>example@email.com</p>
                        </div>
                        <div className={Styles.cardLorem}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nulla nascetur eu congue tincidunt euismod.</p>
                        </div>
                    </div>
                        

                    <div className={Styles.boxThree}>
                            <div className={Styles.cardImgContainer}>
                                <img className={Styles.cardImg} src={profile} alt="Profile" />
                            </div>
                        <div className={Styles.cardName}>
                            <h3 className={Styles.h3}>Simon Simoff</h3>
                        </div>
                        <div className={Styles.cardInfo}>
                            <p>Kaffekurir</p>
                            <p>example@email.com</p>
                        </div>
                        <div className={Styles.cardLorem}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nulla nascetur eu congue tincidunt euismod.</p>
                        </div>
                    </div>

                    <div className={Styles.boxFour}>
                            <div className={Styles.cardImgContainer}>
                                <img className={Styles.cardImg} src={profile} alt="Profile" />
                            </div>
                            <div className={Styles.cardName}>
                                <h3 className={Styles.h3}>Samuel Från Fymden</h3>
                            </div>
                            <div className={Styles.cardInfo}>
                                <p>Teknisktkunnig</p>
                                <p>example@email.com</p>
                            </div>
                            <div className={Styles.cardLorem}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nulla nascetur eu congue tincidunt euismod.</p>
                            </div>
                        </div>
                </div>

                <div className={Styles.boxBottom}>
                    <div className={Styles.boxFive}>
                            <div className={Styles.cardImgContainer}>
                                <img className={Styles.cardImg} src={profile} alt="Profile" />
                            </div>
                        <div className={Styles.cardName}>
                            <h3 className={Styles.h3}>Sebastian Fantastian</h3>
                        </div>
                        <div className={Styles.cardInfo}>
                            <p>Motoringenjör</p>
                            <p>example@email.com</p>
                        </div>
                        <div className={Styles.cardLorem}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nulla nascetur eu congue tincidunt euismod.</p>
                        </div>
                    </div>

                    <div className={Styles.boxSix}>
                            <div className={Styles.cardImgContainer}>
                                <img className={Styles.cardImg} src={profile} alt="Profile" />
                            </div>
                        <div className={Styles.cardName}>
                            <h3 className={Styles.h3}>Olle Fälktström</h3>
                        </div>
                        <div className={Styles.cardInfo}>
                            <p>Säljare</p>
                            <p>example@email.com</p>
                        </div>
                        <div className={Styles.cardLorem}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nulla nascetur eu congue tincidunt euismod.</p>
                        </div>
                    </div>

                    <div className={Styles.boxSeven}>
                            <div className={Styles.cardImgContainer}>
                                <img className={Styles.cardImg} src={profile} alt="Profile" />
                            </div>
                        <div className={Styles.cardName}>
                            <h3 className={Styles.h3}>Dimitri Smiti</h3>
                        </div>
                        <div className={Styles.cardInfo}>
                            <p>Säljare</p>
                            <p>example@email.com</p>
                        </div>
                        <div className={Styles.cardLorem}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nulla nascetur eu congue tincidunt euismod.</p>
                        </div>
                    </div>
                    
                    <div className={Styles.boxEight}>
                            <div className={Styles.cardImgContainer}>
                                <img className={Styles.cardImg} src={profile} alt="Profile" />
                            </div>
                        <div className={Styles.cardName}>
                            <h3 className={Styles.h3}>Ronja Rövarsson</h3>
                        </div>
                        <div className={Styles.cardInfo}>
                            <p>Söt</p>
                            <p>example@email.com</p>
                        </div>
                        <div className={Styles.cardLorem}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nulla nascetur eu congue tincidunt euismod.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About;