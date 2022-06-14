// // The portfolio must be built with HTML, CSS, and JavaScript.
// // The portfolio must have the following sections: About, Contact, Resume, Work
// // In the Work section, data for portfolio pieces must be imported from an external JS
// // data file
// // The portfolio must contain a link to the deployed Tic-Tac-Toe application built in// 
// // class
// // The portfolio must be grammatically correct and be free of spelling errors
// The portfolio contains at least 3 points of interaction for the user (e.g. the user clicks
// and something happens) written from scratch in JavaScript without the use of 3rd
// party libraries
// // Displays a favicon
// // The portfolio must utilize responsive design
// The portfolio looks and feels similar to apps we use daily - it has a consistent and
// polished user interface and offers a positive user experience, including accessibility
// features
// The portfolio must be coded using proper indentation
// The portfolio must be coded using variable names that make sense and follow the
// conventions you've been taught (for example: arrays are always named using
// plurals)

// A functioning portfolio app that meets or exceeds the above technical requirements,
// built by you, and deployed to the internet
// The GitHub repository used for the project is named appropriately (e.g. portfolio as
// opposed to unit-1-project) and is publicly accessible
// Frequent commits dating back to the very beginning of the project
// Commit messages should be in the present tense

// constants -------------------------------------------------------------------------------------



// variables -------------------------------------------------------------------------------------


// cached elements -------------------------------------------------------------------------------------

import { projectData } from "./project-data.js";

const cardContainer = document.getElementById("card-container")
const lightDarkBtn = document.getElementById("light-dark-button")
const body = document.querySelector("body")
const isDark = body.className === "dark"
const favicon = document.querySelector("#favicon")
const resumeBtn = document.getElementById("resume")


// event listeners -------------------------------------------------------------------------------------

lightDarkBtn.addEventListener("click", toggleLightDark)
// resumeBtn.addEventListener("click", openResume)


// functions -------------------------------------------------------------------------------------


let project = {
  title: "Tic Tac Toe",
  deployment: "https://tictactoebasic.netlify.app/",
  image: "/assets/ttt.png",
  github: "https://github.com/ntharden/ttt-weekend",
  description: "Battle between X's and O's"
}

console.log(project)

let projectMarkup = projectData.map(project =>
  `
<div class="card text-center" style="width: 18rem;">
  <img src="${project.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${project.title}</h5>
    <p class="card-text">${project.description}</p>
    <div>
      <a href="${project.github}" class="btn btn-primary">GitHub</a>
      <a href="${project.deployment}" class="btn btn-secondary">Deployment</a>
    </div>
  </div>
</div>
  `
).join("")

cardContainer.innerHTML = projectMarkup

function toggleLightDark() {
  body.className = body.className === "dark" ? "" : "dark"
  const isDark = body.className === "dark"
  changeFavicon(isDark)
}

function checkDarkPref() {
  if (
    window.matchMedia("(prefers-color-scheme:dark)").matches &&
    body.className !== "dark"
  ) {
    toggleLightDark()
  }
}

checkDarkPref()

function changeFavicon(isDark) {
  isDark
    ? favicon.setAttribute("href", "../assets/empire.png") 
    : favicon.setAttribute("href", "../assets/rebelAlliance.png")
}

function openResume() {
  const link = document.createElement('a');
  link.href = url;
  link.download = "../assets/Resume.pdf";
  link.dispatchEvent(new MouseEvent('click'));
}
