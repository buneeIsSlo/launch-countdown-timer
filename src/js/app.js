/* CSS Imports */
import("../css/normailze.css");
import("../css/app.css");

/* JS imports */
import { initParticles } from "../js/particles.js";
import Timer from "../js/timer.js";

// Initiate particles background on load
window.addEventListener("load", () => {
    initParticles();
})

// Total number of days before launch
const daysBeforeLaunch = 9;
const totalSeconds = daysBeforeLaunch > 100 ? (100 * 86400) : (daysBeforeLaunch * 86400);

let days = new Timer(totalSeconds, `data-card="days"`);
let hours = new Timer(totalSeconds, `data-card="hours"`);
let minutes = new Timer(totalSeconds, `data-card="minutes"`);
let seconds = new Timer(totalSeconds, `data-card="seconds"`);

/* Attribution :) */
console.log("(\\ /)\n(0_0) Coded this.");