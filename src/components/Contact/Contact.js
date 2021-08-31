import React from 'react'
import lokalen from '../../resources/images/lokalen.jpg' 
import Styles from './contact.module.css'

console.log(lokalen)

function Contact() {
    return(
        <div className={Styles.wrapper}>
            <div className={Styles.box}>
                <div>
                    <div><h1>Kontakt</h1></div>
                    <div>
                        <ul>
                            <li>Helsingborgsvägen 1, 25227 Helsingborg</li>
                            <li>contact@caferaiders.com</li>
                            <li>042-2933159</li>
                        </ul>
                    </div>
                </div>
                <div><img className={Styles.img} src={lokalen} alt="lokal"/></div>
            </div>
            <div className={Styles.formwrapper}>
            <form className={Styles.form}>
                <label>
                    <p className={Styles.p}>Namn:</p>
                    <input type="text" name="name" />
                </label>
                <label>
                <p className={Styles.p}>Email:</p>
                    <input type="text" name="email" />
                </label>
                <label>
                <p className={Styles.p}>Ämne:</p>
                    <select>
                        <option value="grapefruit">Frågor om produkt</option>
                        <option value="lime">Feedback</option>
                        <option selected value="coconut">Klagomål</option>
                        <option value="mango">Sök jobb hos oss</option>
                    </select>
                </label>
                <label>
                <p className={Styles.p}>Text:</p>
                <textarea rows="4" cols="25">
                </textarea>
                </label>
                    <input className={Styles.button} type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact;