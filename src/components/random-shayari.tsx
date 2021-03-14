import React, { useState } from "react"

import "./random-shayari.css"

import { Button } from "@chakra-ui/react"
import random_shayari from "../utils/random-shayari"

const RandomShayari = () => {
  const [shayari, setShayari] = useState(random_shayari())
  return (
    <div className="random-shayari">
      <div style={{ textAlign: `center` }}>
        <Button
          variant="solid"
          mt={4}
          onClick={() => {
            setShayari(random_shayari())
          }}
        >
          Generate shayari
        </Button>
      </div>
      <div className="shayari">
        <p dangerouslySetInnerHTML={{ __html: shayari }}></p>
      </div>
    </div>
  )
}

export default RandomShayari
