import React from "react"

import SEO from "../components/seo"
import Img from "gatsby-image"

import RandomShayari from "../components/random-shayari"

import "./index.css"
import { useStaticQuery } from "gatsby"
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query blackFeather {
      file(relativePath: { eq: "feather-black.png" }) {
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div className="content">
      <SEO title="Home" />

      <h1>
        <Img fixed={data.file.childImageSharp.fixed} />
        <span style={{ marginLeft: `-1em` }}>Gulzar avatar</span>
      </h1>
      <p>
        Welcome to Gulzar avatar. This site creates gulzar like Shayaris for
        you. We use the simplest algorithm, because that's all it takes. Click
        below to generate a psuedo-random generic shayari.
      </p>

      <RandomShayari />
    </div>
  )
}

export default IndexPage
