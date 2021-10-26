import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Hello!</h2>
          <h2>I'm Katarzyna</h2>
          <h3>Front-End Developer</h3>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <div >
          <StaticImage className={styles.main}
            alt="my pic"
            src="../images/KB.png"
            placeholder="blurred"
          />
        </div>
      </section>
    </Layout>
  )
}
