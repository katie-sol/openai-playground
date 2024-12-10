import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const markdownPages = data.allMarkdownRemark.edges

  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1>OpenAI Playground User Manual</h1>
      </header>

      <section style={{ margin: "0 auto", maxWidth: "800px" }}>
        {markdownPages.map(({ node }, index) => (
          <article
            key={index}
            style={{
              marginBottom: "40px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h2 style={{ color: "#4CAF50" }}>{node.frontmatter.title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: node.html }}
              style={{ marginTop: "10px", color: "#333" }}
            />
          </article>
        ))}
      </section>
    </main>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___title, order: ASC }) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`

export default IndexPage
