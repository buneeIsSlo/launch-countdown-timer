import("../css/normailze.css");
import("../css/app.css");

import Timer from "../js/timer.js";

const daysBeforeLaunch = 9;
const daysToSeconds = daysBeforeLaunch * 86400;

//let days = new Timer(daysToSeconds, `data-card="days"`);
let hours = new Timer(daysToSeconds, `data-card="hours"`);
//let minutes = new Timer(daysToSeconds, `data-card="minutes"`);
//let seconds = new Timer(daysToSeconds, `data-card="seconds"`);
