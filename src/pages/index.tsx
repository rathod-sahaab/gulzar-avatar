import React from "react"

import SEO from "../components/seo"

import { ChakraProvider, Heading } from "@chakra-ui/react"
import RandomShayari from "../components/random-shayari"

import FeatherSvg from "../images/feather.svg"

import "./index.css"
const IndexPage = () => {
  return (
    <ChakraProvider>
      <div className="content">
        <SEO title="Home" />

        <Heading textAlign="center">
          <img src={FeatherSvg} style={{ width: `64px`, display: "inline" }} />
          Gulzar avatar
        </Heading>
        <p style={{ color: "gray" }}>
          Welcome to Gulzar avatar. This site creates gulzar like Shayaris for
          you. We use the simplest algorithm, because that's all it takes. Click
          below to generate a psuedo-random generic shayari.
        </p>

        <RandomShayari />
      </div>
    </ChakraProvider>
  )
}

export default IndexPage
