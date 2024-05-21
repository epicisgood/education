document.addEventListener('DOMContentLoaded', function () {
  const iframe = document.getElementById('nasa');
  const removeButton = document.getElementById('removeButton');
  const fixedNavBar = document.querySelector('.fixed-nav-bar');
  const main = document.querySelector('.main')

  removeButton.addEventListener('click', function () {
    
    // Remove the iframe and the button
    iframe.parentNode.removeChild(iframe);
    removeButton.parentNode.removeChild(removeButton);

    // Make other elements visible
    fixedNavBar.style.display = 'block';
    main.style.display = 'flex';
    
  });
});


let inFrame

try {
  inFrame = window !== top
} catch (e) {
  inFrame = true
}

if (!inFrame && !navigator.userAgent.includes("Firefox")) {
  const popup = open("about:blank", "_blank")
  if (!popup || popup.closed) {
    alert("Please allow popups and redirects.")
  } else {
    const doc = popup.document
    const iframe = doc.createElement("iframe")
    const style = iframe.style
    const link = doc.createElement("link")

    const name = localStorage.getItem("name") || "My Drive - Google Drive"
    const icon = localStorage.getItem("icon") || "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png"

    doc.title = name
    link.rel = "icon"
    link.href = icon

    iframe.src = location.href
    style.position = "fixed"
    style.top = style.bottom = style.left = style.right = 0
    style.border = style.outline = "none"
    style.width = style.height = "100%"

    doc.head.appendChild(link)
    doc.body.appendChild(iframe)

    const pLink = localStorage.getItem(encodeURI('pLink')) || 'https://www.google.com/'
    location.replace(pLink)

    const script = doc.createElement("script")
    script.textContent = `
      window.onbeforeunload = function (event) {
        const confirmationMessage = 'Leave Site?';
        (event || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      };
    `
    doc.head.appendChild(script)
  }
}
// Particles
document.addEventListener("DOMContentLoaded", function (event) {
  if (window.localStorage.getItem("Particles") === "true") {
    var particlesConfig = {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 600,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "bottom",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 40,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    }
    particlesJS("particles-js", particlesConfig)
  }
})

  let SplashT = [
    "I can massage them for u Lona 😉",
    '"I actually love little kids. I get payed 500$ to do it"',
    '"I never miss a day of school!" - Smith 💀💕',
    "donald duck be yapping all day 🗣️🗣️",
    "Jeffery looking zesty today",
    "I brought a tub of chocolate ice cream to school",
    "Daddy deleted my COD account 😭😭",
    "♡ uwu ♡",
    "Mr.zestivan face during the prep rally 🗿🗿🗿",
    "Mr.Big Storm's 365 washing machine exploded... 😢😢",
    "The phone being an egg cooker on cod warzone 🥚",
    "🍆🍆🍆🍑🍑🍑 🤨🤨",
    "The essay has to be so good for him that he jerks off for it to be a 100%. tired of him",
    `I had sex with 20 boys - Family Life movie`,
    "u dont want to touch me becuase im a slut - Family Life movie",
    '"SHES TOO YOUNG - Family Life Movie"',
    `LOOK AT THE SUN WITHOUT PROTECTION☀️☀️`,
    "zestivan's protein bars tasted soo good holly shi-",
    "😊😂💕🥰😍",
    "AP CP 💪 🫡 📡 ❗",
    "when im not here, no one should be around that proximity 👎😡😡👎 - zesti boy 🍆🍆🍆",
    "POV: Mr.Zestivan: 🚪🙋‍♂️🧍‍♂️sways left and right, arms crossed. YOU: 😤💢👎🤢. Zestivan missing:🍫🥜🏋️‍♂️🤑💸💰",
    '"Morning everybody 😊 I SAID GOOD MORNING EVERYBODY! 😤💢"',
    "Kim Smith Assigning fucking assignments on last day of school?? 🤯💥💥",
    "We on that ⭐brawl stars grind ⭐",
    `Chat we need to lock in you need to get cookin' on this test. - Mr. DroppShipper 📦`,
  ]

let SplashI = Math.floor(Math.random() * SplashT.length)
const SplashE = document.getElementById("splash")

function US() {
  SplashI = (SplashI + 1) % SplashT.length;
  let randomSplash = SplashT[SplashI];

  if (randomSplash.includes("sways left and right, arms crossed")) {
    randomSplash = randomSplash.replace(
      "sways left and right, arms crossed",
      '<span style="font-style: italic;">sways left and right arms crossed</span>'
    )
  }

  // Set the splash text
  SplashE.innerHTML = randomSplash;
}

SplashE.innerText = SplashT[SplashI]

SplashE.addEventListener("click", US)

// school countdown timer

function updateCountdown() {
  const currentTime = new Date().getTime()
  const endTime = new Date("May 23, 2024 11:15:00").getTime()
  let timeDifference = endTime - currentTime

  // Calculate the remaining days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

  document.getElementById("school-countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`

  // Check if the countdown is finished
  if (timeDifference < 0) {
    clearInterval(countdown)
    document.getElementById("school-countdown").innerHTML = "The School Year has finished!!"

    localStorage.setItem("countdownEnded", "true")

    // Select the <link> element and update its href attribute
    const globalStyleCss = document.getElementById("GlobalStyleCss")
    if (globalStyleCss) {  
      globalStyleCss.setAttribute("href", "/assets/styles/global_summer.css?v=8")
    }
  } else {
    localStorage.setItem("countdownEnded", "false")
  }
}

// Update the countdown every second
const countdown = setInterval(updateCountdown, 1000)

updateCountdown()