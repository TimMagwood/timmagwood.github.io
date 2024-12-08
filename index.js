// import { clippy } from './node_modules/clippyjs/dist/clippy'

// window.CLIPPY_CDN = 'https://cdn.jsdelivr.net/gh/pi0/clippyjs/assets/agents/'

// clippy.load('Clippy', (agent) => {
//     agent.show();
//     agent.speak("Hello World!");
// })

function selectIcon(e) {
    e.target.style.outline = "solid blue 1px";
}

function openMazeSolver() {
    location.href = "./MazeSolver/index.html"
}

var desktopIcons = document.getElementsByClassName('desktop-icon');
for (var i = 0; i < desktopIcons.length; i++) {
    desktopIcons[i].addEventListener('click', selectIcon(e), false);
}

document.getElementById('startButton').addEventListener('click', function() {
    // const startButton = document.getElementById('startButton');
    const startMenu = document.getElementById('startMenu');
    // Toggle visibility of the start menu
    if (startMenu.style.display === "none" || startMenu.style.display === "") {
        startMenu.style.display = "block";
        // startMenu.style.marginBottom = `${startButton.offsetHeight.toString()}px`;
    } else {
        startMenu.style.display = "none";
    }
});

// Close the Start menu if clicked outside of it
window.addEventListener('click', function(event) {
    const startMenu = document.getElementById('startMenu');
    if (!startMenu.contains(event.target) && event.target !== document.getElementById('startButton')) {
        startMenu.style.display = 'none';
    }
});