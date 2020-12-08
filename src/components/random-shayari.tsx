import React from "react"

import "./random-shayari.css"

import { sample } from "../utils/random"

import Button from "@material-ui/core/Button"

let type_of_oscillations: Array<string> = [
  "Thirak-tey",
  "Simat-tey",
  "Jhulas-tey",
]
let facial_features: Array<string> = [
  "maathey",
  "nazron",
  "naino",
  "hothon",
  "gaalon",
]
let natural_phenomenas: Array<string> = ["hawa", "oas", "boond", "baarish"]
let random_emotions: Array<string> = ["Yaad ata", "Darata", "Hasata", "Rulata"]

let things_that_happen_in_bathroom: Array<string> = [
  "phisalna",
  "girna",
  "tapakna",
  "ulajhna",
  "sulajhna",
  "nikalna",
  "sawarna",
]

let movements_of_a_ufo: Array<string> = [
  "duur jaana",
  "paas aana",
  "roshni phailana",
  "gumm ho jaana",
]

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)]
}

class RandomShayari extends React.Component {
  constructor(props) {
    super(props)
    this.refresh_shayari = this.refresh_shayari.bind(this)
    this.random_shayari = this.random_shayari.bind(this)

    this.state = { shayari: this.random_shayari() }
  }

  refresh_shayari() {
    this.setState({
      shayari: this.random_shayari(),
    })
  }

  random_shayari(): string {
    return (
      type_of_oscillations.sample() +
      " hue " +
      facial_features.sample() +
      " se " +
      natural_phenomenas.sample() +
      " ka " +
      things_that_happen_in_bathroom.sample() +
      ".<br/>" +
      random_emotions.sample() +
      " hai mujhe tera wahi " +
      movements_of_a_ufo.sample() +
      "."
    )
  }
  render() {
    return (
      <div className="random-shayari">
        <div style={{ textAlign: `center` }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={this.refresh_shayari}
          >
            Generate shayari
          </Button>
        </div>
        <div className="shayari">
          <p dangerouslySetInnerHTML={{ __html: this.state.shayari }}></p>
        </div>
      </div>
    )
  }
}

export default RandomShayari
