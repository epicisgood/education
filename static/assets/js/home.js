let inFrame;

document.addEventListener('DOMContentLoaded', function () {
  const iframe = document.querySelector('iframe');
  const removeButton = document.getElementById('removeButton');
  const fixedNavBar = document.querySelector('.fixed-nav-bar');
  const particlesJs = document.getElementById('particles-js');

  removeButton.addEventListener('click', function () {
    // Remove the iframe and the button
    iframe.parentNode.removeChild(iframe);
    removeButton.parentNode.removeChild(removeButton);

    // Make other elements visible
    fixedNavBar.style.display = 'inline';
    particlesJs.style.display = 'block';
  });
});

try {
  inFrame = window !== top;
} catch (e) {
  inFrame = true;
}
if (!localStorage.getItem("ab")) localStorage.setItem("ab", true);
if (
  !inFrame &&
  !navigator.userAgent.includes("Firefox") &&
  localStorage.getItem("ab") === "true"
) {
  const popup = open("about:blank", "_blank");
  if (!popup || popup.closed) {
    alert(
  "Please allow popups for this site. Doing so will allow us to open the site in a about:blank tab and preventing this site from showing up in your history. You can turn this off in the site settings.\n\nBy using Interstellar services, you confirm you have read and agreed to the terms listed in our Terms of Service and Privacy Policy, which can be found on the bottom of the settings page."
    );

  } else {
    const doc = popup.document;
    const iframe = doc.createElement("iframe");
    const style = iframe.style;
    const link = doc.createElement("link");

    const name = localStorage.getItem("name") || "My Drive - Google Drive";
    const icon =
      localStorage.getItem("icon") ||
      "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png";

    doc.title = name;
    link.rel = "icon";
    link.href = icon;

    iframe.src = location.href;
    style.position = "fixed";
    style.top = style.bottom = style.left = style.right = 0;
    style.border = style.outline = "none";
    style.width = style.height = "100%";

    doc.head.appendChild(link);
    doc.body.appendChild(iframe);

    const pLink = localStorage.getItem(encodeURI("pLink")) || getRandomUrl();
    location.replace(pLink);

    const script = doc.createElement("script");
    script.textContent = `
      window.onbeforeunload = function (event) {
        const confirmationMessage = 'Leave Site?';
        (event || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      };
    `;
    doc.head.appendChild(script);
  }
}
// Particles
document.addEventListener("DOMContentLoaded", event => {
  if (window.localStorage.getItem("Particles") === "true") {
    const particlesConfig = {
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
    };
    particlesJS("particles-js", particlesConfig);
  }
});
// Splash texts
const SplashT = [
  'I can massage them for u Lona 😉',
  '"I actually love little kids. I get payed 500$ to do it"',
  'Lona a real one and a homie frfr ♡',
  '"I never miss a day of school!" - Smith 💀💕',
  'I plant the bomb 💣💣💣💣💣💣💣💣💥💥💥💥💥',
  'donald duck be yapping all day 🗣️🗣️',
  'resurgence ranked fr grind on that warzone',
  'Jeffery looking zesty today',
  'I brought a tub of chocolate ice cream to school',
  'Daddy deleted my COD account 😭😭',
  'zestivan has L rizz',
  'dickery',
  'mr greasy is wild look at his short looking ahh',
  'GIVE HIM BACkBLOWS AND ABDOMINAL THRUSTS!!!',
  '♡ uwu ♡',
  'Mr.zestivan face during the prep rally 🗿🗿🗿',
  'Chicko blocko roblox gangs 🥶🥶',
  "Mr.Big Storm's 365 washing machine exploded... 😢😢",
  'The phone being an egg cooker on cod warzone 🥚',
  '🍆🍆🍆🍑🍑🍑 🤨🤨',
  'Galek loves raid shadow legends',
  'The essay has to be so good for him that he jerks off for it to be a 100%. tired of him',
  `I had sex with 20 boys - Family Life movie`,
  'u dont want to touch me becuase im a slut - Family Life movie',
  '"SHES TOO YOUNG - Family Life Movie"',
  `LOOK AT THE SUN WITHOUT PROTECTION☀️☀️`,
  '⚡⚡Bolt community NSFW channel ⚡⚡',
];

let SplashI = Math.floor(Math.random() * SplashT.length);
const SplashE = document.getElementById("splash");

function US() {
  SplashI = (SplashI + 1) % SplashT.length;
  SplashE.innerText = SplashT[SplashI];
}

SplashE.innerText = SplashT[SplashI];

SplashE.addEventListener("click", US);
// Random URL
function getRandomUrl() {
  const randomUrls = [
    "https://kahoot.it",
    "https://classroom.google.com",
    "https://drive.google.com",
    "https://google.com",
    "https://docs.google.com",
    "https://slides.google.com",
    "https://www.nasa.gov",
    "https://blooket.com",
    "https://clever.com",
    "https://edpuzzle.com",
    "https://khanacademy.org",
    "https://wikipedia.org",
    "https://dictionary.com",
  ];
  return randomUrls[randRange(0, randomUrls.length)];
}

function randRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
