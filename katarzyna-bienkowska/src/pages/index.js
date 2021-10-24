import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { Link } from "gatsby"

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
          <img
            src="/KB.png"
            alt="my pic"
            style={{
              margin: "10px 0 50px 0",
              width: "290px",
              height: "290px",
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
