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
                <a href='https://drive.google.com/file/d/1LgMPE6U8SVtXNw0NhDWcqAU-Y6gbQ8vV/view?usp=drive_link'>
                    <button className={style.buttonDownload}> Descargar CV - ES</button>
                </a>
            </div>

            <br/>

            <div className={style.containerButton}>
                <a href='https://drive.google.com/file/d/1Y18EtFPYkWHEuCTZHv_VV_veMcnUyPub/view?usp=drive_link'>
                    <button className={style.buttonDownload}> Download CV - EN</button>
                </a>
            </div><br/><br/>

        </div>
    ]
}