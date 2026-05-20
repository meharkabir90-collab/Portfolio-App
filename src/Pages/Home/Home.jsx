import Styles from './Home.module.css'
import { useNavigate, NavLink } from 'react-router-dom'



function Home() {

    const navigate = useNavigate();


    return(
        <div className={Styles.aboutContainer}>
            <section className={Styles.hero}>
             <h1>Muhammad Kabeer</h1>

              <p>
                 MERN Stack Developer focused on building modern,
                 responsive, and high-performance web applications
                 using frontend, backend, and database technologies.
             </p>

               <div className={Styles.buttons}>

                 <NavLink to="/project" className={Styles.projectBtn}>
                  View Projects
                </NavLink>

                <NavLink to="/contact" className={Styles.projectBtn}>
                 Contact Me
               </NavLink>

  </div>
            </section>
              <section className={Styles.hero}>
             <h1>About me</h1>

             <h2>
                MERN Stack Developer | React.js Enthusiast | WordPress & SEO Specialist
             </h2>

              <p>
                 I am an IT undergraduate with an academic background
                 in Computer Science and ICS. I focus on MERN Stack
                 Development and modern web technologies.
              </p>

                <p>
                  I have practical skills in React.js, Node.js,
                  Express.js, MongoDB, WordPress development,
                  responsive web design, and SEO-optimized websites.
                  I enjoy building clean, scalable, and user-friendly
                  web applications.
                </p>

              
            </section>
              <section className={Styles.hero}>
             <h1>My Skillset</h1>

              <p>
                 My technical expertise includes MERN Stack development,
                React.js frontend applications, backend API development,
                 MongoDB database management, WordPress website
                development, and SEO-optimized web solutions.
             </p>
          <div className={Styles.skillsContainer}>

            <div className={Styles.skillCard}>
              <h3>Frontend</h3>

                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React.js</span>
            </div>

             <div className={Styles.skillCard}>
               <h3>Backend</h3>

                 <span>Node.js</span>
                <span>Express.js</span>
                <span>REST APIs</span>
             </div>

             <div className={Styles.skillCard}>
               <h3>Database</h3>

               <span>MongoDB</span>
               <span>Mongoose</span>
             </div>

             <div className={Styles.skillCard}>
               <h3>WordPress & SEO</h3>

                 <span>WordPress</span>
                 <span>WooCommerce</span>
                  <span>SEO Optimization</span>
                 <span>Responsive Design</span>
              </div>

          </div>

              
            </section>
              <section className={Styles.hero}>
             <h1>Projects Section</h1>

              <p>
                  My portfolio includes React.js applications, a full-stack
                 MERN eCommerce platform with frontend, backend, and
                 database integration, WordPress business websites,
                 blog platforms, and SEO-optimized eCommerce solutions.
                 All development projects are managed with Git and
                  published on GitHub for version control and collaboration.
             </p>

              
               <NavLink to="/projects" className={Styles.projectBtn}>
                View Projects →
              </NavLink>
             
            </section>
       </div>


    )
}
export default Home;