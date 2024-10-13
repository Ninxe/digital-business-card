// Function to toggle light and dark mode
function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  const switchButton = document.querySelector("#switch button")

  // Check if we are toggling to light mode or dark mode
  if (html.classList.contains("light")) {
    // If it's currently light mode, switch to dark mode
    html.classList.remove("light")
    img.setAttribute("src", "./assets/avatar.png")
    // Change button position to dark mode without animation
    switchButton.style.transition = "none" // Disable transition during mode change
    switchButton.style.left = "0" // Set to dark mode position
    // Save mode in local storage
    localStorage.setItem("mode", "dark")
  } else {
    // If it's currently dark mode, switch to light mode
    html.classList.add("light")
    img.setAttribute("src", "./assets/avatar-light.png")
    // Change button position to light mode without animation
    switchButton.style.transition = "none" // Disable transition during mode change
    switchButton.style.left = "32px" // Set to light mode position
    // Save mode in local storage
    localStorage.setItem("mode", "light")
  }

  // Re-enable transition for subsequent toggles
  setTimeout(() => {
    switchButton.style.transition = "" // Re-enable transition
  }, 0)
}

// Check local storage for mode on page load
window.onload = function () {
  const html = document.documentElement
  const mode = localStorage.getItem("mode")
  const switchButton = document.querySelector("#switch button")
  const img = document.querySelector("#profile img")

  // Set initial mode based on local storage
  if (mode === "light") {
    html.classList.add("light")
    img.setAttribute("src", "./assets/avatar-light.png")
    switchButton.style.left = "32px" // Set position without animation
  } else {
    switchButton.style.left = "0" // Set position for dark mode without animation
  }
}
