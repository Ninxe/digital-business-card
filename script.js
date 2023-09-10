function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // select img
  const img = document.querySelector("#profile img")

  // replace img
  if (html.classList.contains("light")) {
    // if it's light mode then add light image
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
