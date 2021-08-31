import Styles from './about.module.css';

import gents from '../../resources/images/distinguished-gents-ride.jpg'

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



        </div>
    )
}

export default About;