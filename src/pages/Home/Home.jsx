import { Footer } from '../../components/Footer/Footer.jsx'
import { NavBar } from '../../components/NavBar/NavBar.jsx'
import style from './Home.module.css'
export const Home = () => {

    return (
        <div>
            <div className={style.containertitles}>
                <h1 className={style.loader}>Welcome to my portfolio!</h1> <br/>
                <h2 className={style.subtitle}>Hi! 👋 I'm Gina Paola Medina</h2><br/>
            </div>
            <div className={style.containerDescription}>
                <p>
                I'm a full-stack developer especialized in web and mobile. I love creating creative and efficient solutions with JS, TS, Dart, Android, Flutter, Node, React, Apollo GraphQL, Express, PostgreSQL, SQL and T-SQL 👩‍💻💻 <br/><br/>
                I have a solid background in business administration and finance, and I am passionate about teaching mathematics and physics. I am bilingual in English and Spanish. Beyond coding, I'm a chess enthusiast ♟️ and an animal and reading lover 😻.
                </p>
            </div>
            <div className={style.quoteOW}>
                <p><i>"Be yourself, the rest of the roles are already taken".</i></p><br/>
                <h5>- Oscar Wilde.</h5>
            </div><br/><br/> 
        </div>
    )

}