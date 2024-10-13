// Function to toggle light and dark mode
function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  const switchButton = document.querySelector("#switch button")
  const isLightMode = html.classList.contains("light")

  // Toggle mode
  if (isLightMode) {
    html.classList.remove("light")
    img.setAttribute("src", "./assets/avatar.png")
    switchButton.style.left = "0" // Set to dark mode position
    localStorage.setItem("mode", "dark")
  } else {
    html.classList.add("light")
    img.setAttribute("src", "./assets/avatar-light.png")
    switchButton.style.left = "32px" // Set to light mode position
    localStorage.setItem("mode", "light")
  }

  // Enable transition for the background color
  html.style.transition = "background-color 0.5s ease" // Smooth transition for background color

  // Set transition for button after a short delay
  switchButton.style.transition = "none" // Disable transition during button move

  // Allow button transition to be re-enabled after a delay
  setTimeout(() => {
    switchButton.style.transition = "" // Re-enable transition for button
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
    switchButton.style.left = "32px" // Set position for light mode
  } else {
    switchButton.style.left = "0" // Set position for dark mode
  }

  // Hide loading screen after a delay (1-2 seconds)
  const loadingScreen = document.getElementById("loading-screen")
  setTimeout(() => {
    loadingScreen.classList.add("hidden") // Add hidden class to fade out
  }, 1000) // Change this to 2000 for a 2-second delay, or 1000 for 1 second

  // Restore the transition for the next toggle
  setTimeout(() => {
    html.style.transition = "background-color 0.5s ease" // Enable transition for background color
  }, 0)
}
