import Styles from './about.module.css'

function About() {
    return(
        <div className={Styles.wrapper}>
            <div className={Styles.banner}>
                <img className={Styles.bannerImg} src="" alt="Motorcyckle banner" />
                <div className={Styles.bannerBox}>
                    <h1 className={Styles.bannerh1}>We Were Born To Race</h1>
                </div>
            </div>



        </div>
    )
}

export default About;