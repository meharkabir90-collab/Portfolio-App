import Styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'


function Footer() {

    return(
        <section className={Styles.Footer}>

            <h2 className={Styles.D1}>
                Muhammad Kabeer
            </h2>
            <div className={Styles.Copyright}>
                CopyRight @2026 Portfolio App built with React
            </div>

            <div className={Styles.Links}>
             <NavLink to="https://github.com/meharkabir90-collab/coin-bounce"
                className={Styles.Link}>
                View MyWork on Github
              </NavLink>
              <NavLink to="https://www.linkedin.com/in/muhammad-kabeer-5432a328a/"
                className={Styles.Link}>
                Explore Profile at Linkedin
              </NavLink>
            </div>
           
        </section>

    );

}

export default Footer;