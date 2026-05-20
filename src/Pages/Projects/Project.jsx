import Styles from './Project.module.css'
import Ecommerce from '../../assets/ecom mern.webp'
import blogReact from '../../assets/react blog.webp'
import weatherReact from '../../assets/weather react.webp'
import wpBusiness from '../../assets/wp-business.webp'
import wpEcom from '../../assets/wp-ecom.webp'
import Learning from '../../assets/lms.webp'



function Project() {
    return(
           <section className={Styles.projectPage}>

  <h1>Projects</h1>

  <p className={Styles.projectsIntro}>
    My portfolio includes frontend, full-stack MERN,
    and WordPress development projects focused on
    responsive design and performance optimization.
  </p>

  {/* React Section */}
  <div className={Styles.projectSection}>

    <h2>React Development</h2>

    <p>
      Frontend applications developed using React.js
      with responsive UI and API integration.
    </p>

    <div className={Styles.projectCards}>

      {/* Project Card */}
      <div className={Styles.projectCard}>

        <img src={blogReact} alt="React Blog App" />

        <h3>React Blog App</h3>

        <p>
          Blog application built using React.js
          with fake API integration and responsive UI.
        </p>

        <div className={Styles.techStack}>
          <span>React</span>
          <span>CSS</span>
          <span>Fake API</span>
        </div>

        <div className={Styles.projectLinks}>
          <a href="/PDF/Blogging Platform react.pdf"
             target="_blank"
            rel="noreferrer"
          
          >PDF</a>
          <a href="https://github.com/meharkabir90-collab/Custom-Blogging-App">GitHub</a>
          <a href="https://www.loom.com/share/e027e777eaaa4359819b37e6aea87de4">Video</a>
        </div>

      </div>
       <div className={Styles.projectCard}>

      <img src={weatherReact} alt="Weather App" />

      <h3>Weather App</h3>

      <p>
        Weather forecasting application with API
        integration and responsive interface.
      </p>

      <div className={Styles.techStack}>
        <span>React</span>
        <span>API</span>
        <span>CSS</span>
      </div>

      <div className={Styles.projectLinks}>
        <a href="/PDF/React Weather project.pdf">PDF</a>
        <a href="https://github.com/meharkabir90-collab/Weather-App">GitHub</a>
        <a href="https://www.loom.com/share/c643a98e665c4a9297233644a1e3f107">Video</a>
        
      </div>

    </div>

    </div>

  </div>

  {/* MERN Section */}
  <div className={Styles.projectSection}>

    <h2>MERN Stack Development</h2>

    <p>
      Full-stack web applications with backend,
      APIs, authentication, and MongoDB integration.
    </p>

    <div className={Styles.projectCards}>

      <div className={Styles.projectCard}>

        <img src={Ecommerce} alt="MERN Ecommerce" />

        <h3>MERN Ecommerce App</h3>

        <p>
          Complete ecommerce platform built using
          MongoDB, Express.js, React.js, and Node.js.
        </p>

        <div className={Styles.techStack}>
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Express</span>
        </div>

        <div className={Styles.projectLinks}>
          <a href="#">Live Demo</a>
          <a href="https://github.com/meharkabir90-collab/coin-bounce">GitHub</a>
          
        </div>

      </div>

    </div>

  </div>

  {/* WordPress Section */}
  <div className={Styles.projectSection}>

    <h2>WordPress Development</h2>

    <p>
      SEO-optimized WordPress business, blog,
      and ecommerce websites.
    </p>


  </div>
  <div className={Styles.projectCard}>

  <img src={wpEcom} alt="Ecommerce Website" />

  <h3>Ecommerce Website</h3>

  <p>
    WooCommerce ecommerce website with
    responsive UI and optimized performance.
  </p>

  <div className={Styles.techStack}>
    <span>WordPress</span>
    <span>WooCommerce</span>
    <span>SEO</span>
  </div>

  <div className={Styles.projectLinks}>
    <a href="/PDF/ecommerce wp.pdf">PDF</a>
    
  </div>

</div>
<div className={Styles.projectCard}>

  <img src={Learning} alt="LMS Website" />

  <h3>LMS Website</h3>

  <p>
    Learning management system website
    developed using WordPress.
  </p>

  <div className={Styles.techStack}>
    <span>WordPress</span>
    <span>LMS</span>
    <span>SEO</span>
  </div>

  <div className={Styles.projectLinks}>
    <a href="/PDF/ELearning LMS.pdf">PDF</a>
    
  </div>

</div>

 <div className={Styles.projectCards}>

      <div className={Styles.projectCard}>

        <img src={wpBusiness} alt="Business Website" />

        <h3>Business Website</h3>

        <p>
          Responsive WordPress business website
          with speed optimization and SEO setup.
        </p>

        <div className={Styles.techStack}>
          <span>WordPress</span>
          <span>SEO</span>
          <span>WooCommerce</span>
        </div>

        <div className={Styles.projectLinks}>
          <a href="#">PDF</a>
        </div>

      </div>

    </div>

</section>


    );
}

export default Project;