#!/usr/bin/env node

import white from "chalk";
import boxen from "boxen";
import ansiEscapes from "ansi-escapes";
import { AppClock, AppTime } from "./features/popClock.js";


const greeting = white.bold("Hello World ! Late Done");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};

const msgBox = boxen( greeting, boxenOptions );
let timeBox = boxen(white.bold(AppClock(AppTime())), boxenOptions);

console.log(msgBox);
setInterval(() => {
    console.log(ansiEscapes.eraseLines(1) + AppClock(AppTime()));
}, 1000);
