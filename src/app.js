#!/usr/bin/env node

import white from "chalk";
import boxen from "boxen";

const greeting = white.bold("Hello World !");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "yellow",
 backgroundColor: "#555555"
};
const msgBox = boxen( greeting, boxenOptions );

console.log(msgBox);