#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const boxen = require("boxen");
const chalk = require("chalk");

// Because we like console, and captains.log sounds cool
const captains = console;

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};

// Text + chalk definitions
const data = {
  name: chalk.yellow("Sébastien Barré"),
  handle: chalk.cyan("sebastienbarre"),
  work: chalk.white("Financial Systems Lead at Kitware, Inc."),
  corporate: chalk.cyan("https://www.kitware.com/sebastien-barre/"),
  github: chalk.cyan("https://github.com/sebastienbarre"),
  linkedin: chalk.cyan("https://www.linkedin.com/in/sebastienbarre/"),
  twitter: chalk.cyan("https://twitter.com/sebastienbarre"),
  npm: chalk.cyan("https://www.npmjs.com/~sebastienbarre"),
  codepen: chalk.cyan("https://codepen.io/sebastienbarre/"),
  web: chalk.cyan("https://barre.io"),
  instagram: chalk.cyan("https://www.instagram.com/sebastienbarre/"),
  photoblog: chalk.cyan("http://barre.me/"),
  npx: chalk.red("npx") + " " + chalk.white("@sebastienbarre/card"),
  labelHeading: "          ",
  labelWork: chalk.white.bold("     Work:"),
  labelCorporate: chalk.white.bold("Corporate:"),
  labelGitHub: chalk.white.bold("   GitHub:"),
  labelLinkedIn: chalk.white.bold(" LinkedIn:"),
  labelTwitter: chalk.white.bold("  Twitter:"),
  labelNpm: chalk.white.bold("      npm:"),
  labelCodepen: chalk.white.bold("  Codepen:"),
  labelWeb: chalk.white.bold("      Web:"),
  labelInstagram: chalk.white.bold("Instagram:"),
  labelPhotoblog: chalk.white.bold("Photoblog:"),
  labelCard: chalk.white.bold("     Card:")
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.labelHeading}  ${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const corporating = `${data.labelCorporate}  ${data.corporate}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelNpm}  ${data.npm}`;
const codepening = `${data.labelCodepen}  ${data.codepen}`;
const webing = `${data.labelWeb}  ${data.web}`;
const instagramming = `${data.labelInstagram}  ${data.instagram}`;
const photoblogging = `${data.labelPhotoblog}  ${data.photoblog}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  corporating +
  newline +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  twittering +
  newline +
  npming +
  newline +
  codepening +
  newline +
  webing +
  newline +
  newline +
  instagramming +
  newline +
  photoblogging +
  newline +
  newline +
  carding;

const cardMessage = chalk.green(boxen(output, options));
captains.log(cardMessage);
