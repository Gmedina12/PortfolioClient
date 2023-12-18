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
                <a href='https://drive.google.com/drive/folders/1AhxNPTviW2AjtB65Ur2J4gJ4IkoethW9'>
                    <button className={style.buttonDownload}> Descargar CV - ES</button>
                </a>
            </div>

            <br/>

            <div className={style.containerButton}>
                <a href='https://drive.google.com/file/d/1xV7giLYSMvoEgYdu_9y1COkE7omtg5nz/view?usp=sharing'>
                    <button className={style.buttonDownload}> Download CV - EN</button>
                </a>
            </div><br/><br/>

        </div>
    ]
}