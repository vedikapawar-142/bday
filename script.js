// ============================================
// DIKSHA 22ND BIRTHDAY WEBSITE
// ============================================


// --------------------------------------------
// PAGE SYSTEM
// --------------------------------------------

const pages = document.querySelectorAll(".page");

const nextButtons = document.querySelectorAll(".next");

const previousButton =
    document.getElementById("previous");

const forwardButton =
    document.getElementById("forward");

const dotsContainer =
    document.getElementById("dots");

const pageCount =
    document.getElementById("pageCount");

let currentPage = 0;


// Create navigation dots

pages.forEach((page, index) => {

    const dot = document.createElement("span");

    dot.className = "dot";

    dot.addEventListener("click", () => {
        showPage(index);
    });

    dotsContainer.appendChild(dot);
});

const dots =
    document.querySelectorAll(".dot");


// Show page

function showPage(index) {

    if (index < 0) {
        index = 0;
    }

    if (index >= pages.length) {
        index = pages.length - 1;
    }

    pages.forEach(page => {
        page.classList.remove("active");
    });

    pages[index].classList.add("active");

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[index].classList.add("active");

    currentPage = index;

    pageCount.innerText =
        `${String(index + 1).padStart(2, "0")} / ${String(pages.length).padStart(2, "0")}`;

    // Special effects

    if (index === pages.length - 1) {
        setTimeout(() => {
            createConfetti();
        }, 500);
    }

}


// Start

showPage(0);


// Next buttons

nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        showPage(currentPage + 1);

    });

});


// Arrow navigation

previousButton.addEventListener("click", () => {

    showPage(currentPage - 1);

});


forwardButton.addEventListener("click", () => {

    showPage(currentPage + 1);

});


// Keyboard navigation

document.addEventListener("keydown", event => {

    if (event.key === "ArrowRight") {
        showPage(currentPage + 1);
    }

    if (event.key === "ArrowLeft") {
        showPage(currentPage - 1);
    }

});


// --------------------------------------------
// DAY / NIGHT MODE
// --------------------------------------------

const themeButton =
    document.getElementById("themeBtn");

let dayMode =
    localStorage.getItem("dikshaTheme") === "day";


function updateTheme() {

    if (dayMode) {

        document.body.classList.add("day");

        themeButton.innerText = "🌙";

        localStorage.setItem(
            "dikshaTheme",
            "day"
        );

    } else {

        document.body.classList.remove("day");

        themeButton.innerText = "☀️";

        localStorage.setItem(
            "dikshaTheme",
            "night"
        );

    }

}


updateTheme();


themeButton.addEventListener("click", () => {

    dayMode = !dayMode;

    updateTheme();

});


// --------------------------------------------
// FLOATING HEARTS / PETALS / SPARKLES
// --------------------------------------------

const particles =
    document.getElementById("particles");

const symbols = [
    "♡",
    "♥",
    "💕",
    "💗",
    "✦",
    "✧",
    "🌸",
    "✨"
];


function createParticle() {

    const particle =
        document.createElement("div");

    particle.className = "particle";

    particle.innerText =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.fontSize =
        (10 + Math.random() * 18) + "px";

    particle.style.animationDuration =
        (6 + Math.random() * 7) + "s";

    particle.style.animationDelay =
        Math.random() * 2 + "s";

    particles.appendChild(particle);


    setTimeout(() => {

        particle.remove();

    }, 15000);

}


// Keep creating particles

setInterval(
    createParticle,
    500
);


// Create some immediately

for (let i = 0; i < 15; i++) {

    setTimeout(
        createParticle,
        i * 200
    );

}


// --------------------------------------------
// SECRET ENVELOPE
// --------------------------------------------

const envelope =
    document.getElementById("envelope");

const secretLetter =
    document.getElementById("secretLetter");


envelope.addEventListener("click", () => {

    secretLetter.classList.toggle("open");

    if (secretLetter.classList.contains("open")) {

        envelope.innerText = "💖";

        createMiniHearts();

    } else {

        envelope.innerText = "💌";

    }

});


// --------------------------------------------
// MINI HEART BURST
// --------------------------------------------

function createMiniHearts() {

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "✨"
    ];

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.innerText =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];

        heart.style.position = "fixed";

        heart.style.left = "50%";

        heart.style.top = "50%";

        heart.style.fontSize =
            (12 + Math.random() * 18) + "px";

        heart.style.zIndex = "500";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);


        const x =
            (Math.random() - 0.5) * 500;

        const y =
            (Math.random() - 0.5) * 500;


        heart.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(.5)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1.4)`,
                    opacity: 0
                }
            ],

            {
                duration:
                    1200 +
                    Math.random() * 700,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"
            }

        );


        setTimeout(() => {

            heart.remove();

        }, 2200);

    }

}


// --------------------------------------------
// CONFETTI
// --------------------------------------------

function createConfetti() {

    const pieces = [
        "💕",
        "💗",
        "❤️",
        "✨",
        "🎈",
        "🌸",
        "🎉",
        "💜",
        "⭐"
    ];


    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("div");

        piece.innerText =
            pieces[
                Math.floor(
                    Math.random() *
                    pieces.length
                )
            ];

        piece.style.position = "fixed";

        piece.style.left = "50%";

        piece.style.top = "45%";

        piece.style.zIndex = "1000";

        piece.style.pointerEvents = "none";

        piece.style.fontSize =
            (12 + Math.random() * 20) + "px";


        const x =
            (Math.random() - .5) * 1000;

        const y =
            Math.random() * 800;


        document.body.appendChild(piece);


        piece.animate(

            [
                {
                    transform:
                        "translate(0,0) rotate(0deg) scale(.5)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px,${y}px)
                         rotate(720deg)
                         scale(1)`,
                    opacity: 0
                }
            ],

            {
                duration:
                    1600 +
                    Math.random() * 1400,

                easing:
                    "cubic-bezier(.15,.7,.3,1)"
            }

        );


        setTimeout(() => {

            piece.remove();

        }, 3500);

    }

}


// --------------------------------------------
// FINAL WISH
// --------------------------------------------

const wishButton =
    document.getElementById("wishBtn");


wishButton.addEventListener("click", () => {

    wishButton.innerText =
        "✨ Wish sent ✨";

    wishButton.style.pointerEvents =
        "none";

    createConfetti();

    createMiniHearts();

});


// --------------------------------------------
// SOFT BACKGROUND MUSIC
// --------------------------------------------

const musicButton =
    document.getElementById("musicBtn");

let audioContext = null;

let musicPlaying = false;

let musicTimer = null;


// Simple gentle melody

const melody = [

    261.63,
    329.63,
    392.00,
    329.63,

    293.66,
    349.23,
    440.00,
    392.00,

    261.63,
    329.63,
    392.00,
    523.25,

    440.00,
    392.00,
    329.63,
    261.63

];


function playNote(
    frequency,
    startTime,
    duration
) {

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();


    oscillator.type = "sine";

    oscillator.frequency.value =
        frequency;


    gain.gain.setValueAtTime(
        0,
        startTime
    );


    gain.gain.linearRampToValueAtTime(
        0.035,
        startTime + 0.03
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        startTime + duration
    );


    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );


    oscillator.start(startTime);

    oscillator.stop(
        startTime + duration
    );

}


function playMelody() {

    if (!musicPlaying) {
        return;
    }


    const start =
        audioContext.currentTime + 0.05;


    melody.forEach(
        (note, index) => {

            playNote(
                note,
                start + index * .28,
                .25
            );

        }
    );


    musicTimer =
        setTimeout(
            playMelody,
            melody.length * 280
        );

}


musicButton.addEventListener(
    "click",
    async () => {

        if (!audioContext) {

            audioContext =
                new (
                    window.AudioContext ||
                    window.webkitAudioContext
                )();

        }


        if (
            audioContext.state ===
            "suspended"
        ) {

            await audioContext.resume();

        }


        musicPlaying =
            !musicPlaying;


        if (musicPlaying) {

            musicButton.innerText =
                "♫ ON";

            playMelody();

        } else {

            musicButton.innerText =
                "♫";

            clearTimeout(
                musicTimer
            );

        }

    }
);


// --------------------------------------------
// MOBILE SWIPE
// --------------------------------------------

let touchStartX = 0;


document.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    event => {

        const touchEndX =
            event.changedTouches[0].screenX;

        const difference =
            touchEndX - touchStartX;


        if (
            Math.abs(difference) > 60
        ) {

            if (difference < 0) {

                showPage(
                    currentPage + 1
                );

            } else {

                showPage(
                    currentPage - 1
                );

            }

        }

    },
    {
        passive: true
    }
);


// --------------------------------------------
// MOUSE HEART TRAIL
// --------------------------------------------

let lastHeartTime = 0;


document.addEventListener(
    "mousemove",
    event => {

        const now =
            Date.now();


        if (
            now - lastHeartTime < 120
        ) {
            return;
        }


        lastHeartTime = now;


        const heart =
            document.createElement("span");

        heart.innerText =
            Math.random() > .5
                ? "♡"
                : "✦";


        heart.style.position =
            "fixed";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.color =
            Math.random() > .5
                ? "#ff9bce"
                : "#b79cff";

        heart.style.fontSize =
            "12px";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex =
            "999";


        document.body.appendChild(
            heart
        );


        heart.animate(

            [
                {
                    transform:
                        "translate(-50%,-50%) scale(.5)",
                    opacity: .8
                },

                {
                    transform:
                        "translate(-50%,-100px) scale(1.3)",
                    opacity: 0
                }
            ],

            {
                duration: 800,
                easing: "ease-out"
            }

        );


        setTimeout(() => {

            heart.remove();

        }, 900);

    }
);