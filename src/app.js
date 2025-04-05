#!/usr/bin/env node

import white from "chalk";
import boxen from "boxen";

const greeting = white.bold("Hello World ! Late Done");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};
const msgBox = boxen( greeting, boxenOptions );

console.log(msgBox);