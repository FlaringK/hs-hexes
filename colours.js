const kids = {
  june: "0715cd",
  rose: "b536da",
  dave: "e00707",
  jade: "4ac925",

  jane: "00d5f2",
  jake: "1f9400",
  roxy: "f141ef",
  dirk: "f2a400",
}

const shirtkids = {
  june: "38F43D",
  rose: "CB87F6",
  dave: "FF0000",
  jade: "53A3FF",

  jane: "00D5F2",
  jake: "1F9400",
  roxy: "FF6FF2",
  dirk: "ff7607",
}


const trolls = {

  aradia: "a10000",
  tavros: "a15000",
  sollux: "a1a100",
  karkat: "626262",
  nepeta: "416600",
  kanaya: "008141",
  terezi: "008282",
  vriska: "005682",
  equius: "000056",
  gamzee: "2b0057",
  eridan: "6a006a",
  feferi: "77003c",

}

const cherubs = {

  calliope: "929292",
  caliborn: "323232",

  "felt / english": "2ed73a",

  "itchy / stitch": "ffea00",
  "doze / sawbuck": "4040fd",
  "trace / matchsticks": "df0000",
  "clover / eggs": "a357ff",
  "fin / biscuits": "ff6000",
  "die / quarters": "008140",
  "crowbar / cans": "950015",

}

const charas = {
  june: "0715cd",
  rose: "b536da",
  dave: "e00707",
  jade: "4ac925",

  jane: "00d5f2",
  jake: "1f9400",
  roxy: "f141ef",
  dirk: "f2a400",
  
  aradia: "a10000",
  tavros: "a15000",
  sollux: "a1a100",
  karkat: "626262",
  nepeta: "416600",
  kanaya: "008141",
  terezi: "008282",
  vriska: "005682",
  equius: "000056",
  gamzee: "2b0057",
  eridan: "6a006a",
  feferi: "77003c",
  
  "alt-calliope": "ff0000",
  calliope: "929292",
  caliborn: "323232",
  english: "2ed73a",

  jaspersprite: "f141ef",
  epiloguejane: "0097d7",
  joey: "71daff",
  jude: "d3ff8f",
  
}

const spriteaspects = {

  breath: ["10E0FF", "0086EB"],
  blood: ["BA1915", "3d1909"],
  space: ["ffffff", "000000"],
  time: ["ff2106", "b70d0e"],
  light: ["fff547", "f98100"],
  void: ["00164F", "033476"],
  mind: ["46fbc4", "50b250"],
  heart: ["bd1864", "6e0e2e"],
  life: ["77c350", "CCC3B4"],
  doom: ["000000", "20401f"],
  hope: ["fdfdfd", "FFE094"],
  rage: ["9c4dad", "391e71"],

}

const tezaspects = {

  breath: ["47dff9", "4379e6"],
  blood: ["ba1016", "3e1601"],
  space: ["ffffff", "000000"],
  time: ["ff2106", "b70d0e"],
  light: ["f6fa4e", "f0840c"],
  void: ["001957", "104ea2"],
  mind: ["06ffc9", "00923d"],
  heart: ["bd1864", "55142a"],
  life: ["72eb34", "a49787"],
  doom: ["000000", "306800"],
  hope: ["fdfdfd", "ffde55"],
  rage: ["9c4dad", "520c61"],

}

const troll = {
  skin: "C4C4C4",
  "eyes/horns1": "FFBA29",
  horns2: "FF9000",
  horns3: "FF4200",
  eyebags1: "9D9D9D",
  eyebags2: "B2B2B2",
  hair: "000000",
  limeblood: "658200",
}

const moons = {
  "prospit symbol": "ffff01",
  prospit: "e49700",
  "derse symbol": "ff01fe",
  derse: "9700e4"
}

const tezblood = {

  rust: "a10000",
  bronze: "a25203",
  gold: "a1a100",
  lime: "678900",
  olive: "336601",
  jade: "078446",
  teal: "008282",
  blue: "004182",
  indigo: "0021cb",
  purple: "440a7f",
  violet: "6a006a",
  fuchsia: "99004d",

}

const romance = {

  flushed: "bf0000",
  pale: "c39797",
  ashen: "585858",
  caliginous: "000000",

}

const hiveblood = {

  rustAct1: "bb0000",
  rust: "f42123",
  bronzeAct1: "b25900",
  bronze: "cd7f32",
  gold: "abab1a",
  olive: "71a020",
  jade: "2caa6b",
  teal: "26baba",
  blue: "3796c6",
  indigo: "6464ff",
  purple: "a954ff",
  violet: "791a79",
  fuchsiaAct1: "6e003c",
  fuchsia: "d121c1",

}

const sburb = {

  beta: "4ce24e",
  alpha: "ff0000",
  sgrub: "900fff",

}

const epilogue = {

  "epilogue karkat": "7c7e81",
  "epilogue eridan": "7e0048",
  "epilogue calliope": "a1a3a6",
  "epilogue caliborn": "009c68",
  "epilogue jane": "0097d7",
  "harry anderson egbert": "0671cd",
  "yiffy lalonde-harley": "D00009",
  "tavros crocker": "2b0057",

}

// Actual code
const col1 = document.getElementById("col1")
const col2 = document.getElementById("col2")
const notif = document.getElementById("notif")
const hash = document.getElementById("hash")
const menu = document.getElementById("toc")

const addTitle = (title, id, col) => {
  const h2 = document.createElement("h2")
  h2.innerText = title
  h2.id = id
  col.append(h2)

  const a = document.createElement("a")
  a.innerText = title
  a.href = "#" + id

  const li = document.createElement("li")
  
  li.appendChild(a)
  menu.append(li)
}

const copyColour = e => {
  console.log(e.target)
  const color = hash.checked ? "#" + e.target.dataset.hex : e.target.dataset.hex
  navigator.clipboard.writeText(color)
  notif.innerText = `Copied "${e.target.dataset.name}" to your clipboard (${color})`
  notif.style.color = "#" + e.target.dataset.nameCol
  notif.style.borderColor = "#" + e.target.dataset.nameCol
  notif.style.backgroundColor = "#" + e.target.dataset.hex
  notif.className = "show"
  notif.offsetWidth
  notif.className = "hide"
}

const addColours = (title, id, col, colours) => {
  addTitle(title, id, col)
  for (const [key, value] of Object.entries(colours)) {
    
    const colour = value.toLowerCase()

    const div = document.createElement("div")
    div.style.color = colour == "000000" ? "#ffffff" : "#000000"
    div.style.backgroundColor = "#" + colour
    div.innerHTML = `<div class="clickthrough">${key}<br>#${colour}</div>`
    div.dataset.hex = colour
    div.dataset.name = key
    div.dataset.nameCol = colour == "000000" ? "ffffff" : "000000"

    div.onclick = copyColour

    div.className = "copy"

    col.append(div)

  }
}

// Add colours to aspects div
let addColorPairs = (title, id, col, colours) => {
  addTitle(title, id, col)
  for (const [key, value] of Object.entries(colours)) {
    
    const symbol = document.createElement("div")
    const background = document.createElement("div")
    const backgroundCol = document.createElement("div")
    
    symbol.style.color = "#" + value[1]
    symbol.style.backgroundColor = "#" + value[0]
    background.style.color = "#" + value[0]
    background.style.backgroundColor = "#" + value[1]

    symbol.onclick = copyColour
    background.onclick = copyColour

    symbol.dataset.hex = value[0]
    background.dataset.hex = value[1]
    symbol.dataset.name = key + " symbol"
    background.dataset.name = key + " background"
    symbol.dataset.nameCol = value[1]
    background.dataset.nameCol = value[0]

    symbol.innerHTML = `<div class="clickthrough">${key}<br>#${value[0].toLowerCase()}</div>`
    backgroundCol.innerHTML = "#" + value[1].toLowerCase() 
    backgroundCol.className = "clickthrough"

    symbol.className = "copy"
    background.className = "copy"

    background.append(symbol)
    background.append(backgroundCol)
    col.append(background)

  }
}

// Add colours to character div
// addColours("Characters", "chara", col1, charas)
// addColours("Troll Romance", "romance", col1, romance)
// addColours("Troll Anatomy", "troll", col1, troll)

// addColorPairs("Aspects (From Sprites)", "aspect", col2, spriteaspects)
// addColorPairs("Aspects (From the Extended Zodiac)", "tezaspect", col2, tezaspects)
// addColours("Moons (From the Extended Zodiac)", "moon", col2, moons)
// addColours("Signs (From the Extended Zodiac)", "tezblood", col2, tezblood)

addColours("Homestuck Kids", "kids", col1, kids)
addColours("Homestuck Trolls", "trolls", col2, trolls)

addColorPairs("Aspects (From Sprites)", "aspect", col1, spriteaspects)
addColorPairs("Aspects (From the Extended Zodiac)", "tezaspect", col1, tezaspects)

addColours("Blood (From the Extended Zodiac)", "tezblood", col2, tezblood)
addColours("Blood (From Hiveswap)", "hiveblood", col2, hiveblood)

addColours("Troll Anatomy", "troll", col1, troll)
addColours("Troll Romance", "romance", col1, romance)

addColours("Cherubs + The Felt", "cherubs", col2, cherubs)
addColours("Moons (From the Extended Zodiac)", "moon", col1, moons)

addColours("Sburb Versions", "sburb", col1, sburb)
addColours("Epilogue & HS^2", "epilogue", col2, epilogue)

addColours("Shirt Symbols", "skids", col1, shirtkids)