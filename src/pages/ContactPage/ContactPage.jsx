import React from 'react'
import { ContactForm } from '../../components/ContactForm/ContactForm.jsx'
import style from './ContactPage.module.css'

export const ContactPage = () => {
    return [
        <div>
            <div className={style.containertitle}>
                <h2 className={style.gradientTextForm}>Get in touch with me: <br/>I'm just a message away!</h2>
            </div>

            <ContactForm />


            <div className={style.containerButton}>
                <a href='https://drive.google.com/file/d/1h4AcR0hoAFR0ySJsnddp-8yN3lez936x/view?usp=drive_link'>
                    <button className={style.buttonDownload}> Descargar CV - ES</button>
                </a>
            </div>

            <br/>

            <div className={style.containerButton}>
                <a href='https://drive.google.com/file/d/1liJ377iWxeybs898CDHAmBFY9MPRfsqY/view?usp=drive_link'>
                    <button className={style.buttonDownload}> Download CV - EN</button>
                </a>
            </div><br/><br/>

        </div>
    ]
}