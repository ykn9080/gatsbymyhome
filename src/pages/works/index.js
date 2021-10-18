import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import * as styles from "../../css/works.module.css"
import Img from "gatsby-image"
import { wordCut } from "../../utility"

const WorkList = ({ data, location }) => {
  console.log(data, styles)
  const works = data.allMdx.nodes

  return (
    <Layout>
      <Seo title="Work List" />
      <Breadcrumb
        location={location}
        crumbLabel="Work"
        crumbStyle={{ color: "#666" }}
        crumbActiveStyle={{ color: "orange" }}
      />
      <div className={styles.portfolio}>
        <h2>Work List</h2>
        <h3>Project & Modules I've created</h3>
      </div>
      <div className={styles.work}>
        {works.map(work => {
          return (
            <div>
              <Link to={`/works/${work.frontmatter.slug}`} key={work.title}>
                <h4>{work.frontmatter.title}</h4>
                <Img
                  className={styles.Img1}
                  fluid={work.frontmatter.thumb.childImageSharp.fluid}
                />
                <p title={work.frontmatter.excerpt}>
                  {wordCut(work.frontmatter.excerpt, 80, "", "...")}
                </p>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query MyWork {
    allMdx(filter: { frontmatter: { type: { eq: "work" } } }) {
      nodes {
        frontmatter {
          demo
          videoTitle
          videoSourceURL
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slug
          seq
          npmorg
          github
          excerpt
        }
        body
      }
    }
  }
`
export default WorkList
