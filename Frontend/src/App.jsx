
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaArrowUpRightFromSquare,
  FaCode,
  FaBrain,
  FaGlobe,
  FaChevronDown,
} from "react-icons/fa6";

import "./App.css";


// ===============================
// SKILLS
// ===============================

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Python",
  "Machine Learning",
  "Git & GitHub",
];


// ===============================
// PROJECTS
// ===============================

const projects = [
  {
    title: "Inventory Management System",

    description:
      "A web-based inventory management system for managing products, stock, suppliers, sales and low-stock alerts.",

    tech: ["React", "Node.js", "MongoDB"],

    github: "#",
  },

  {
    title: "House Price Prediction",

    description:
      "A machine learning application that predicts house prices based on property features using Python and Machine Learning.",

    tech: ["Python", "Machine Learning", "Gradio"],

    github: "#",
  },

  {
    title: "Calculator",

    description:
      "A clean and responsive calculator application built using modern frontend technologies.",

    tech: ["HTML", "CSS", "JavaScript"],

    github:
      "https://github.com/harshtanwani534-soni/CALCULATOR",
  },
];


// ===============================
// ANIMATION
// ===============================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};


const container = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


// ===============================
// APP
// ===============================

function App() {
  return (
    <div className="portfolio">


      {/* =================================
          NAVBAR
      ================================= */}

      <nav className="navbar">

        <a
          href="#home"
          className="logo"
        >
          HT<span>.</span>
        </a>


        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#education">
            Education
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        <a
          href="#contact"
          className="nav-btn"
        >
          Let's Talk
        </a>

      </nav>



      {/* =================================
          HERO SECTION
      ================================= */}

      <section
        id="home"
        className="hero"
      >

        <div className="hero-bg"></div>


        {/* HERO CONTENT */}

        <motion.div
          className="hero-content"

          variants={container}

          initial="hidden"

          animate="visible"
        >


          <motion.p
            className="hero-tag"
            variants={fadeUp}
          >

            <span></span>

            Available for opportunities

          </motion.p>



          <motion.h1
            variants={fadeUp}
          >

            Hi, I'm{" "}

            <span>
              Harsh
            </span>

            <br />

            BCA{" "}

            <strong>
              &
            </strong>{" "}

            AIML Student.

          </motion.h1>



          <motion.p
            className="hero-description"
            variants={fadeUp}
          >

            I build modern web applications
            and intelligent solutions using
            React, Node.js, Python and
            Machine Learning.

          </motion.p>



          {/* HERO BUTTONS */}

          <motion.div
            className="hero-buttons"
            variants={fadeUp}
          >

            <a
              href="#projects"
              className="primary-btn"
            >

              View My Work

              <FaArrowUpRightFromSquare />

            </a>


            <a
              href="#contact"
              className="secondary-btn"
            >

              Contact Me

            </a>

          </motion.div>



          {/* SOCIAL LINKS */}

          <motion.div
            className="social-links"
            variants={fadeUp}
          >

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >

              <FaGithub />

            </a>


            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >

              <FaLinkedin />

            </a>


            <a
              href="mailto:yourmail@gmail.com"
            >

              <FaEnvelope />

            </a>

          </motion.div>

        </motion.div>



        {/* HERO CARD */}

        <motion.div
          className="hero-card"

          initial={{
            opacity: 0,
            scale: 0.7,
            x: 80,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}

          transition={{
            duration: 1,
          }}
        >


          <div className="profile-circle">

            <FaCode />

          </div>


          <h3>
            Full Stack Developer
          </h3>


          <p>
            AI/ML Enthusiast
          </p>



          {/* FLOATING CARD 1 */}

          <div className="floating-card card-one">

            <FaBrain />

            Machine Learning

          </div>



          {/* FLOATING CARD 2 */}

          <div className="floating-card card-two">

            <FaGlobe />

            Web Development

          </div>

        </motion.div>



        {/* SCROLL ICON */}

        <motion.a
          href="#about"
          className="scroll-down"

          animate={{
            y: [0, 8, 0],
          }}

          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >

          <FaChevronDown />

        </motion.a>

      </section>



      {/* =================================
          ABOUT SECTION
      ================================= */}

      <section
        id="about"
        className="section"
      >


        <motion.div
          className="section-title"

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}
        >

          <p>
            01 — ABOUT ME
          </p>


          <h2>

            Turning ideas into{" "}

            <span>
              digital experiences.
            </span>

          </h2>

        </motion.div>



        <div className="about-grid">


          {/* ABOUT TEXT */}

          <motion.div
            className="about-text"

            initial={{
              opacity: 0,
              x: -40,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}
          >

            <p>

              I'm a BCA student specializing
              in Artificial Intelligence and
              Machine Learning. I enjoy building
              websites, applications and
              intelligent systems that solve
              real-world problems.

            </p>


            <p>

              My current focus is on becoming
              a full-stack developer while
              strengthening my knowledge of
              AI, Machine Learning and modern
              JavaScript technologies.

            </p>


            <a
              href="#contact"
              className="primary-btn"
            >

              Let's Connect

              <FaArrowUpRightFromSquare />

            </a>

          </motion.div>



          {/* ABOUT STATS */}

          <motion.div
            className="about-stats"

            variants={container}

            initial="hidden"

            whileInView="visible"

            viewport={{
              once: true,
            }}
          >


            <motion.div
              className="stat"
              variants={fadeUp}
            >

              <h3>
                10+
              </h3>

              <p>
                Technologies
              </p>

            </motion.div>



            <motion.div
              className="stat"
              variants={fadeUp}
            >

              <h3>
                3+
              </h3>

              <p>
                Projects
              </p>

            </motion.div>



            <motion.div
              className="stat"
              variants={fadeUp}
            >

              <h3>
                BCA
              </h3>

              <p>
                AIML Student
              </p>

            </motion.div>



            <motion.div
              className="stat"
              variants={fadeUp}
            >

              <h3>
                ∞
              </h3>

              <p>
                Learning Mindset
              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>



      {/* =================================
          SKILLS SECTION
      ================================= */}

      <section
        id="skills"
        className="section skills-section"
      >


        <motion.div
          className="section-title"

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}
        >

          <p>
            02 — SKILLS
          </p>


          <h2>

            My{" "}

            <span>
              technology stack.
            </span>

          </h2>

        </motion.div>



        <motion.div
          className="skills-grid"

          variants={container}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
          }}
        >


          {skills.map(
            (skill, index) => (

              <motion.div
                className="skill-card"

                variants={fadeUp}

                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}

                key={skill}
              >

                <div className="skill-number">

                  {(index + 1)
                    .toString()
                    .padStart(2, "0")}

                </div>


                <h3>
                  {skill}
                </h3>

              </motion.div>

            )
          )}

        </motion.div>

      </section>



      {/* =================================
          PROJECTS SECTION
      ================================= */}

      <section
        id="projects"
        className="section"
      >


        <motion.div
          className="section-title"

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}
        >

          <p>
            03 — PROJECTS
          </p>


          <h2>

            Things I've{" "}

            <span>
              built.
            </span>

          </h2>

        </motion.div>



        <motion.div
          className="projects-grid"

          variants={container}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
          }}
        >


          {projects.map(
            (project, index) => (

              <motion.article
                className="project-card"

                variants={fadeUp}

                whileHover={{
                  y: -12,
                }}

                key={project.title}
              >


                <div className="project-top">

                  <span>
                    0{index + 1}
                  </span>


                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >

                    <FaArrowUpRightFromSquare />

                  </a>

                </div>



                <h3>
                  {project.title}
                </h3>



                <p>
                  {project.description}
                </p>



                <div className="tech-list">

                  {project.tech.map(
                    (tech) => (

                      <span key={tech}>
                        {tech}
                      </span>

                    )
                  )}

                </div>

              </motion.article>

            )
          )}

        </motion.div>

      </section>



      {/* =================================
          EDUCATION SECTION
      ================================= */}

      <section
        id="education"
        className="section education-section"
      >


        <motion.div
          className="section-title"

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}
        >

          <p>
            04 — EDUCATION
          </p>


          <h2>

            My{" "}

            <span>
              academic journey.
            </span>

          </h2>

        </motion.div>



        <motion.div
          className="timeline"

          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

          viewport={{
            once: true,
          }}
        >


          <div className="timeline-item">

            <div className="timeline-dot"></div>


            <div className="timeline-content">

              <span>
                2024 — Present
              </span>


              <h3>
                Bachelor of Computer Applications
              </h3>


              <h4>
                JECRC University
              </h4>


              <p>

                Specialization in Artificial
                Intelligence and Machine Learning.

              </p>

            </div>

          </div>

        </motion.div>

      </section>



      {/* =================================
          CONTACT SECTION
      ================================= */}

      <section
        id="contact"
        className="section contact-section"
      >


        <motion.div
          className="contact-box"

          initial={{
            opacity: 0,
            scale: 0.95,
          }}

          whileInView={{
            opacity: 1,
            scale: 1,
          }}

          viewport={{
            once: true,
          }}
        >


          <p className="contact-label">
            05 — CONTACT
          </p>


          <h2>

            Let's build something

            <span>
              amazing together.
            </span>

          </h2>


          <p>

            Have a project idea,
            internship opportunity
            or just want to connect?
            Feel free to reach out.

          </p>



          <a
            href="mailto:yourmail@gmail.com"
            className="primary-btn"
          >

            Send Me an Email

            <FaEnvelope />

          </a>



          <div className="contact-details">


            <div>

              <FaEnvelope />

              <span>
                yourmail@gmail.com
              </span>

            </div>



            <div>

              <FaPhone />

              <span>
                +91 XXXXX XXXXX
              </span>

            </div>



            <div>

              <FaLocationDot />

              <span>
                Jaipur, Rajasthan
              </span>

            </div>


          </div>

        </motion.div>

      </section>



      {/* =================================
          FOOTER
      ================================= */}

      <footer>


        <div className="footer-logo">

          HT<span>.</span>

        </div>


        <p>
          Designed & Built by Harsh Tanwani
        </p>


        <div className="footer-social">


          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >

            <FaGithub />

          </a>


          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >

            <FaLinkedin />

          </a>


        </div>

      </footer>

    </div>
  );
}


export default App;
