import React, { useState } from "react"

import * as styles from "./random-shayari.module.css"

import random_shayari from "../utils/random-shayari"

const RandomShayari = () => {
  const [shayari, setShayari] = useState(random_shayari())
  return (
    <div className="random-shayari">
      <div style={{ textAlign: `center` }}>
        <button
          className={styles.button}
          onClick={() => {
            setShayari(random_shayari())
          }}
        >
          Generate shayari
        </button>
      </div>
      <div className={styles.shayari}>
        <p dangerouslySetInnerHTML={{ __html: shayari }}></p>
      </div>
    </div>
  )
}

export default RandomShayari
