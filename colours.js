// Actual code
const cols = [document.getElementById("col1"), document.getElementById("col2")]
const notif = document.getElementById("notif")
const hash = document.getElementById("hash")
const menu = document.getElementById("toc")

const addTitle = (title, id, col) => {
  // const h2 = document.createElement("h2")
  // h2.innerText = title
  // h2.id = id
  // col.append(h2)

  const a = document.createElement("a")
  a.innerText = title
  a.href = "#" + id

  const li = document.createElement("li")
  
  li.appendChild(a)
  menu.append(li)
}

const toggleAllDetails = state => {
  document.body.querySelectorAll('#colors details').forEach((e) => {
    (state) ? e.setAttribute('open', state) : e.removeAttribute('open')
  })
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

const addColours = (data, id, col) => {
  const title = data.name
  const colours = data.colors

  addTitle(title, id, col)

  const details = document.createElement("details")
  const summary = document.createElement("summary")

  details.id = id
  summary.innerHTML = title

  details.append(summary)

  const wrap = document.createElement("div")
  wrap.className = "sectionWrap"

  for (const [key, value] of Object.entries(colours)) {

    if (Array.isArray(value)) {

      // Dual Colour
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
      symbol.dataset.name = key.replace(/_/g, "") + " symbol"
      background.dataset.name = key.replace(/_/g, "") + " background"
      symbol.dataset.nameCol = value[1]
      background.dataset.nameCol = value[0]
  
      symbol.innerHTML = `<div class="clickthrough">${key.replace(/_/g, "<br>")}<br>#${value[0].toLowerCase()}</div>`
      backgroundCol.innerHTML = "#" + value[1].toLowerCase() 
      backgroundCol.className = "clickthrough"
  
      symbol.className = "copyinner"
      background.className = "copy"
  
      background.append(symbol)
      background.append(backgroundCol)
      wrap.append(background)

    } else {

      // Single colour
      const colour = value.toLowerCase()

      const div = document.createElement("div")
      div.style.color = "#" + getContrastYIQ(colour)
      div.style.backgroundColor = "#" + colour
      div.innerHTML = `<div class="clickthrough">${key.replace(/_/g, "<br>").replace(/\//g, "<br>&")}<br>#${colour}</div>`
      div.dataset.hex = colour
      div.dataset.name = key.replace(/_/g, "")
      div.dataset.nameCol = getContrastYIQ(colour)

      if ("min-width" in data) {
        div.style.minWidth = data["min-width"]
      }
  
      div.onclick = copyColour
  
      div.className = "copy"
  
      wrap.append(div)

    }

  }

  details.append(wrap)
  col.append(details)
}

// https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area
const getContrastYIQ = hexcolor => {
  var r = parseInt(hexcolor.substring(0,2),16);
  var g = parseInt(hexcolor.substring(2,4),16);
  var b = parseInt(hexcolor.substring(4,6),16);
  var yiq = ((r*299)+(g*587)+(b*114))/1000;
  return (yiq >= 128) ? '000000' : 'eeeeee';
}

// Load colours
fetch("./hexes.json").then(response => response.json()).then(json => loadColours(json));

const loadColours = colorData => {
  console.log(colorData)
  for (const [key, value] of Object.entries(colorData)) {

    addColours(value, key, cols[value.col - 1])

  }

  toggleAllDetails(true)
}