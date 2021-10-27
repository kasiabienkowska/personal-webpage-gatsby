import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <div className={styles.introduction}>
          <h1>About Me</h1>
          <p>
            I'm an experienced employee involved trough my career with
            forwarding industry. Switching to IT was something I had in mind
            since quite some time and during my ongoing employment I had
            opportunity to test myself creating web sites for current employer.
            Wordpress self-taught, eager and determined to learn new things and
            face new challenges. In recent months, I completed a programming
            course and my goal is to use new knowledge in practice as soon as
            possible. In addition, I try to systematically expand my knowledge
            by taking part in online courses such as Udemy.
          </p>
        </div>
        <div className={styles.technology}>
          <h1>Currently developing</h1>
          <div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Gatsby</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
          <ul>
            <li>
              <a href="https://github.com/kasiabienkowska">
                <FontAwesomeIcon icon={faGithub} size="5x"></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href="https://github.com/kasiabienkowska">
                <FontAwesomeIcon icon={faLinkedin} size="5x"></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href="https://github.com/kasiabienkowska">
                <FontAwesomeIcon icon={faEnvelope} size="5x"></FontAwesomeIcon>
              </a>
            </li>
          </ul>
        </div>
    </Layout>
  )
}
