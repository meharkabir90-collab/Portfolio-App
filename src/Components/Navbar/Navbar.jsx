import { NavLink } from 'react-router-dom'
import Styles from './Navbar.module.css'
import Image from '../../assets/KA.png'



function Navbar() {

  


    return(
         <div className={Styles.Header}>
            <section className={Styles.Logo}>
                 <img src={Image} />
              
                
                
            </section>
            <section className={Styles.menu}>
                <NavLink to='/home' className={Styles.link}> Home</NavLink>
                <NavLink to='/project' className={Styles.link}>Projects</NavLink>
                <NavLink to='/contact' className={Styles.link}>Contact</NavLink>
               
                
                

            </section>
        



        </div>



    )
}

export default Navbar;