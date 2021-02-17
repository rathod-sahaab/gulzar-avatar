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
  function sample(items: string[]) {
    // "~~" for a closest "int"
    return items[~~(items.length * Math.random())]
  }
  
  export default function random_shayari(): string {
    return `
    ${sample(type_of_oscillations)} hue \
    ${sample(facial_features)} se \
    ${sample(natural_phenomenas)} ka \
    ${sample(things_that_happen_in_bathroom)}.<br/><br/>\
    ${sample(random_emotions)} hai tera wahi \
    ${sample(movements_of_a_ufo)}.\
    `
  }