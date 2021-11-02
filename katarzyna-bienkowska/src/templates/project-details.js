import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/project-details.module.css"
import { graphql } from "gatsby"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featured, github, page } =
    data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>

        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <div>
          <a href={github} className={styles.repogithub} target="_blank">
            Github repo
          </a>
          <a href={page} className={styles.repogithub} target="_blank">
            Try it!
          </a>
        </div>
        <div className={styles.featured}>
          <GatsbyImage image={getImage(featured)}/>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectsDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      thumb {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      featured {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      github
      page
    }
  }
}
`
