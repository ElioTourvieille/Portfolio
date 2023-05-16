/* -------------------------------------------------------------------------- */
/*                                   GLOBAL                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------- Icon Burger Animation ------------------------- */

const burger = document.querySelector('.burger') // DOM
const popupMenu = document.querySelector('.popup-menu')

burger.addEventListener('click', () => { // Event on click to change class on "active"
    burger.classList.toggle('active')
})

/* ------------------------------- Menu Pop-Up ------------------------------ */

burger.onclick = () => {
    if (popupMenu.style.display === 'block') { // Check if the menu is already apparent
      // Change the display in order to reveal or hide Pop-up menu
        popupMenu.style.display = 'none'         
    } else {
      popupMenu.style.display = 'block'
    }
  }

/* ----------------------------- Copyright Year ----------------------------- */

const year = document.getElementById('current-year') // DOM

year.innerHTML = new Date().getFullYear() // Write in HTML the year of current date

/* -------------------------------------------------------------------------- */
/*                                  HOME PAGE                                 */
/* -------------------------------------------------------------------------- */

/* --------------------------- Type Writer Effect --------------------------- */

const txtAnim = document.getElementById('main-title') // DOM

new Typewriter (txtAnim) // Animation on h1 

.changeDelay(60) // Speed of type writing in ms
.typeString('Hello, je suis ')
.typeString('<span style="color:#3D7C98; font-family: MyWebFont ; text-shadow: 2px 2px 3px #3D7C98"> Eric Tourvieille, </span>')
.pauseFor(500) // Stop delay
.typeString('développeur web frontend !')
.pause(1000)
.deleteChars(10) // Numbers of characters deleted
.typeString('<span style="color:blue"> CSS ! </span>')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color:orange"> Javascript ! </span>')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span> passionné ! </span>')
.start()

/* ---------------------------- Loader animation ---------------------------- */

window.onload = function () { // Function to make disappear loader after a delay, and make appear desktop icons 
    setTimeout(function() {
        let loading = document.querySelector('.loading') // DOM
        let icons = document.querySelector('.desktop-icons')

        loading.style.display = "none" // Change the display in "none" at the end of timeout 
        icons.style.display = "flex" // Change the display in "block" at the end of timeout

    }, 4000)
}

/* -------------------------------------------------------------------------- */
/*                                 ABOUT PAGE                                 */
/* -------------------------------------------------------------------------- */

/* ----------------------------- Card 3D effect ----------------------------- */

const cards = document.querySelectorAll('.card')

cards.forEach(card => {
  card.addEventListener('mousemove', e =>{

    let cardRect = card.getBoundingClientRect() // define the position of our mouse on the viewport
    let x = e.clientX - cardRect.left // x coordinate of the mouse
    let y = e.clientY - cardRect.top // y coordinate of the mouse

    let midCardWidth = cardRect.width / 2 // define the center of the card horizontally
    let midCardHeight = cardRect.height / 2 // define the center of the card vertically

    let angleY = -(x - midCardWidth) / 5 // calculate the angle between the center and the cursor's position on axis X (use ratio to control speed of rotation)
    let angleX = (y - midCardHeight) / 5 // calculate the angle between the center and the cursor's position on axis Y (use ratio to control speed o rotation)

    card.style.transform = `rotateX(${angleX}deg) rotateY(${-angleY}deg)` // 
  })

  card.addEventListener('mouseleave', () => {  // Return on initial position when the cursor is not more on card
    card.style.transform = `rotateX(0) rotateY(0)`
  })
})

/* ----------------------------- Slider ---------------------------- */
// set DOMS
let currentCardIndex = 0
let placeholders = document.querySelectorAll('.cards-placeholder__item')
  
let next = document.querySelector(".right")
let prev = document.querySelector(".left")
let stop = document.querySelector(".pause")
let play = document.querySelector(".play")

// Set placeholder first selection
window.addEventListener('DOMContentLoaded', () => {
  for (let i=0; i < placeholders.length; i++) {
    if (i === currentCardIndex) {
        placeholders[i].style.opacity = '1' // On placeholder of active card
    } else {
        placeholders[i].style.opacity = '0.5' // On other placeholder
    }
  }
})

// slide to left direction
prev.addEventListener("click", () => {
  prevCard()
})

function prevCard() {
  currentCardIndex--
  // check if current index is not smaller than 0
if (currentCardIndex < 0) {
  currentCardIndex = 3; // Comeback at the last one
}
  for (let i=0; i < placeholders.length; i++) {
    if (i === currentCardIndex) {
        placeholders[i].style.opacity = '1'
    } else {
        placeholders[i].style.opacity = '0.5'
    }
  }
  
  for (let i=0; i < cards.length; i++) { 
    if (i === currentCardIndex) {
      // Change the display to make appear or disappear the card
      cards[i].style.display = 'block'
    } else {
      cards[i].style.display = 'none'
    }
  }
  
  startTimerBack() // Restart the slideshow in previous side
}

// slide to right direction
next.addEventListener("click", () => {
    nextCard()
  })

function nextCard() {
  currentCardIndex++
// check if current index is not bigger than number of cards
if (currentCardIndex >= cards.length) {
  currentCardIndex = 0; // Comeback at the first one
}
  for (let i=0; i < placeholders.length; i++) {
    if (i === currentCardIndex) {
        placeholders[i].style.opacity = '1'
    } else {
        placeholders[i].style.opacity = '0.5'
    }
  }
  
  for (let i=0; i < cards.length; i++) { 
    if (i === currentCardIndex) {
      // Change the display to make appear or disappear the card
      cards[i].style.display = 'block'
    } else {
      cards[i].style.display = 'none'
    }
  }
  
  startTimer() // Restart the slideshow
}

// Automate the slideshow
timer = setInterval(nextCard, 4500)

function startTimer(){// Restart the slideshow
  clearInterval(timer)
  timer = setInterval(nextCard, 4500)
  play.style.display = 'none'
  stop.style.display = 'block'
}

function startTimerBack(){// Restart the slideshow in prev side
  clearInterval(timer)
  timer = setInterval(prevCard, 4500)
}

// Stop the slideshow
stop.addEventListener("click", () => {
  stopTimer()
})

function stopTimer(){
  clearInterval(timer)
  play.style.display = 'block'
  stop.style.display = 'none'
}

play.addEventListener("click", () => {
  startTimer()
})

/* ----------------------------- FORM VALIDATION ---------------------------- */
// DOMS
let inputs = document.getElementsByTagName('input')
let signError = document.querySelectorAll('.form__label i')

// Check if input or not empty
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('blur', function() { // When we lose focus on a input
    if (this.value.trim() === "") { // And if he is empty
      signError[i].style.display = 'block' // Make appear warning sign
    } else {
      signError[i].style.display = 'none'
    }
  })
}

// Validate form
const form = document.getElementById('contact-form')
const submitBtn = document.querySelector('.submit')

submitBtn.addEventListener('click', () => {
  validateForm()
  })

  function validateForm() {
  // Regex
  const regexName = /^[a-zA-Z ]{2,30}$/
  const regexAddress = /^[a-zA-Z0-9\s,'-]*$/
  const regexZip = /^\d{5}(?:[-\s]\d{4})?$/
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const regexPhone = /^(0|\+41|0041)[1-9]([-. ]?[0-9]{2}){4}$/

  // Input element
  const fname = document.getElementById('fname').value.trim()
  const lname = document.getElementById('lname').value.trim()
  const address = document.getElementById('address').value.trim()
  const zip = document.getElementById('Zip').value.trim()
  const city = document.getElementById('city-input').value.trim()
  const mail = document.getElementById('mail').value.trim()
  const phone = document.getElementById('phone').value.trim()
  const message = document.getElementById('message').value.trim()

  // Check if input is empty and if value is different to regex
  if (fname === "" || !regexName.test(fname)) {
    // Make a message
    alert("Veuillez entrer un prénom valide.")
    return
  }

  if (lname === "" || !regexName.test(lname)) {
    alert("Veuillez entrer un nom de famille valide.")
    return
  }

  if (address === "" || !regexAddress.test(address)) {
    alert("Veuillez entrer une adresse valide.")
    return
  }

  if (zip === "" || !regexZip.test(zip)) {
    alert("Veuillez entrer un code postal valide.")
    return;
  }

  if (city === "") {
    alert("Veuillez entrer une ville.")
    return
  }

  if (mail === "" || !regexEmail.test(mail)) {
    alert("Veuillez entrer une adresse e-mail valide.")
    return
  }

  if (phone === "" || !regexPhone.test(phone)) {
    alert("Veuillez entrer un numéro de téléphone valide.")
    return
  }

  if (message === "") {
    alert("Veuillez entrer un message.")
    return
  }

   // If everything is ok, send the form
   form.submit()
}