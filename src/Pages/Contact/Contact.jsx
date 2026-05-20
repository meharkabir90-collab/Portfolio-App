import Styles from './Contact.module.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'


function Contact() {
    return(
        <section className={Styles.contactSection}>

          <h1>Contact Me</h1>

             <p>
              I am open to internship opportunities, freelance work,
              and collaboration on modern web development projects.
              Feel free to reach out for professional inquiries or
              project discussions.
               You can contact me through
             the links below.
            </p>

          <div className={Styles.contactInfo}>

            <h3>Email</h3>  <FaEnvelope /> {"  "}
            
               <a  
                href="mailto:meharkabir90@gmail.com">
                    meharkabir90@gmail.com
               </a>

            <h3>GitHub</h3>  <FaGithub /> {"  "}
              
                <a
                   href="https://github.com/meharkabir90-collab/coin-bounce"
                   target="_blank"
                    rel="noreferrer"
                >
                 GitHub Profile
                </a>

            <h3>LinkedIn</h3>  <FaLinkedin />  {"  "}
              
                <a
                  href="https://www.linkedin.com/in/muhammad-kabeer-5432a328a/"
                  target="_blank"
                   rel="noreferrer"
                >
                  LinkedIn Profile
               </a>

           </div>

        </section>

    );
}

export default Contact;