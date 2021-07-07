import React from "react"

import SEO from "../components/seo"

import RandomShayari from "../components/random-shayari"

import "./index.css"
import { StaticImage } from "gatsby-plugin-image"
const IndexPage = () => {
  return (
    <div className="content">
      <SEO title="Home" />

      <h1 style={{ textAlign: "center" }}>
        <StaticImage
          style={{ display: "inline-block", marginRight: "-36px" }}
          src="../images/feather-black.png"
          width={64}
          alt="logo"
        />
        Gulzar avatar
      </h1>
      <p style={{ color: "gray" }}>
        Welcome to Gulzar avatar. This site creates gulzar like Shayaris for
        you. We use the simplest algorithm, because that's all it takes. Click
        below to generate a psuedo-random generic shayari.
      </p>

      <RandomShayari />
    </div>
  )
}

export default IndexPage
