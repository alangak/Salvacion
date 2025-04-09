#!/usr/bin/env node

import white from "chalk";
import boxen from "boxen";
import ansiEscapes from "ansi-escapes";


const greeting = white.bold("Hello World ! Late Done");

const todayDate = {
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds()
};
const {hour, minute, second} = todayDate;
const currentTimeString = white.bold(hour + ":" + minute + ":" + second);

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};
const msgBox = boxen( greeting, boxenOptions );
const timeBox = boxen(currentTimeString, boxenOptions);

console.log(msgBox);
setInterval(() => {
    console.log(ansiEscapes.eraseLines(1) + timeBox);
}, 1000);
