import './App.css';
import insta from './Images/instagram.png';
import linke from './Images/linkedin.png';
import git from './Images/github.png';
import email from './Images/email.png';
import contact from './Images/contact.png';
import adress from './Images/adress.png';
import c from './Images/c-.png';
import java from './Images/java.png';
import web from './Images/web-development.png';
import photo from './Images/nikita.jpg';
import cash from './Images/minimizer.png';
import resume from './Images/resume.png'

function App() {
  return (
    <>
      <section id="header">
        <div className="header container">
          <div className="nav-bar">
            <div className="brand">
              <h1><span>B</span>hor <span>N</span>ikita</h1>
            </div>
            <div className="nav-list">
              <div className="hamburger">
                <div className="bar"></div>
              </div>
              <ul>
                <li><a href="#hero" data-after="Home">Home</a></li>
                <li><a href="#about" data-after="About">About</a></li>
                <li><a href="#services" data-after="Service">Services</a></li>
                <li><a href="#projects" data-after="Projects">Projects</a></li>
                <li><a href="#contact" data-after="Contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="hero">
        
        <div className="hero container">
          <div>
            <h1>Hello, <span></span></h1>
            <h1>My Name is <span></span></h1>
            <h1>NIKITA BHOR<span></span></h1>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="about container">
          <div className="col-left">
            <div className="about-img">
            <img src={photo} alt="img" />
            </div>
          </div>
          <div className="col-right">
            <h1 className="section-title">About <span>me</span></h1>
            <h2>Front End Developer</h2>
            <p>I am currently pursuing a Bachelor of Technology degree at Sanjivani College of Engineering, and I am deeply passionate about my field of study.My academic journey has been marked by dedication and hard work, resulting in high grades and the receipt of a few prestigious scholarships and awards.</p>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="services container">
          <div className="service-top">
            <h1 className="section-title">Serv<span>i</span>ces</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas
              magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias
              voluptatum explicabo!</p>
          </div>
          <div className="service-bottom">
            <div className="service-item">
              <div className="icon"><img src={web} alt="web development" /></div>
              <h2>Web Development</h2>
              <p>I am learning Web Development from 3 month. I have good hands on HTML and CSS and some of JavaScript. I have made landing pages, portfolios, calculator and much more.</p>
            </div>
            <div className="service-item">
              <div className="icon"><img src={java} alt="java programming" /></div>
              <h2>Java Programming</h2>
              <p>Learning Java Programming since 6 months and also learning advance Data Structures and Algorithms in Java.</p>
            </div>
            <div className="service-item">
              <div className="icon"><img src={c} alt="c programming" /></div>
              <h2>C Programming</h2>
              <p>Completed C Programming in last year and also completed Fundamentals Of Data Structures in C Programming.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="projects">
        <div className="projects container">
          <div className="projects-header">
            <h1 className="section-title">Recent <span>Projects</span></h1>
          </div>
          <div className="all-projects">
            <div className="project-item">
              <div className="project-info">
                <h1>Resume Builder</h1>
                <h2>Java</h2>
                <p>Designed and implemented a dynamic Resume Builder project using Java, enabling users to create personalized and professional resumes effortlessly. Integrated user-friendly interfaces and utilized Java's object-oriented features to efficiently manage and structure resume data. Implemented features such as template selection, editable sections, and export functionality, resulting in a seamless and customizable resume-building experience.</p>
              </div>
              <div className="project-img">
                <img src={resume} alt="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1>Cash Flow Minimizer</h1>
                <h2>Java</h2>
                <p>Developed a Java-based application to optimize cash transactions, reducing the need for physical currency through automated financial processes. Implemented algorithms for efficient cash management, improving overall financial efficiency and reducing operational costs.Developed a Cash Minimizer project using Java, aimed at optimizing cash transactions and reducing physical currency usage. Implemented automated financial processes to streamline transactions, improving efficiency and minimizing cash handling costs.</p>
              </div>
              <div className="project-img">
                <img src={cash} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact container">
          <div>
            <h1 className="section-title">Contact <span>info</span></h1>
          </div>
          <div className="contact-items">
            <div className="contact-item">
              <div className="icon"><img src={contact} alt="phone icon" /></div>
              <div className="contact-info">
                <h1>Phone</h1>
                <h2>+91 9405809484</h2>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><img src={email} alt="email icon" /></div>
              <div className="contact-info">
                <h1>Email</h1>
                <h2>nikitabhor2004@gmail.com</h2>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><img src={adress} alt="address icon" /></div>
              <div className="contact-info">
                <h1>Address</h1>
                <h2>Sanjivani College Of Engineering Kopargaon</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="footer">
        <div className="footer container">
          <div className="brand">
            <h1><span>B</span>hor <span>N</span>ikita</h1>
          </div>
          <h2>Thank You</h2>
          <div className="social-icon">
            <div className="social-item">
              <a href="https://www.linkedin.com/in/nikita-bhor-38b923260"><img src={linke} alt="linkedin icon" /></a>
            </div>
            <div className="social-item">
              <a href="https://github.com/nikitabhor"><img src={git} alt="github icon" /></a>
            </div>
            <div className="social-item">
              <a href="https://instagram.com/30_nikitabhor_03?igshid=MmVlMjlkMTBhMg=="><img src={insta} alt="instagram icon" /></a>
            </div>
          </div>
          <p>Copyright © 2024 NIKITA. All rights reserved</p>
        </div>
      </section>
    </>
    
  );
}

export default App;