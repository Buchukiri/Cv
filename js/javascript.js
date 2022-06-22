// BURGER OPEN BUTTON
const openButton = document.getElementById("open-menu")

// BURGER CLOSE BUTTON

const closeButton = document.getElementById("close-menu");

// NAV LIST

const menu = document.querySelector(".nav-list")

openButton.addEventListener("click", show);
closeButton.addEventListener("click", close);

function show() {
    menu.style.display ="flex"
    menu.style.top ="0"
}

function close() {
    menu.style.top ="-100%"
    menu.style.display ="flex"
}