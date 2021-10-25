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
          <Link className={styles.btn} to="/about">
            Contact
          </Link>
        </div>
        <div className={styles.main}>
          <StaticImage
            alt="my pic"
            src="../images/KB.png"
            placeholder="tracedSVG"
            width={390}
            style={{
              margin: "10px 0 50px 0",
              border: "2px solid #fff",
              boxShadow: "0 5px 5px  #ccc",
              borderRadius: "190px",
            }}
          />
        </div>
      </section>
    </Layout>
  )
}
