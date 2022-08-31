import { projectData } from "./project-data.js";

const homeBtn = document.getElementById('home-btn')
const aboutBtn = document.getElementById('about-btn')
const workBtn = document.getElementById('work-btn')
const skillsBtn = document.getElementById('skills-btn')
const homeSection = document.querySelector('.home')
const aboutSection = document.querySelector('.about')
const workSection = document.querySelector('.work')
const skillsSection = document.querySelector('.skills')
const cardContainer = document.getElementById("card-container")
const navBar = document.querySelector('.navbar')
const mediaQuery = window.matchMedia('(max-width: 768px)')

let project = {
  title: "Tic Tac Toe",
  deployment: "https://tictactoebasic.netlify.app/",
  image: "/assets/ttt.png",
  github: "https://github.com/ntharden/ttt-weekend",
  description: "Battle between X's and O's"
}

let projectMarkup = projectData.map(project =>
  `
<div class="card text-center" style="width: 18rem;">
  <img src="${project.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${project.title}</h5>
    <p class="card-text">${project.description}</p>
    <div>
      <a target="_blank" href="${project.github}" class="btn btn-primary">GitHub</a>
      <a target="_blank" href="${project.deployment}" class="btn btn-secondary">Deployment</a>
    </div>
  </div>
</div>
  `
).join("")

cardContainer.innerHTML = projectMarkup

homeBtn.addEventListener('click', function() {
  homeSection.scrollIntoView({behavior: 'smooth'})
  });
aboutBtn.addEventListener('click', function() {
  aboutSection.scrollIntoView({behavior: 'smooth'})
  });
workBtn.addEventListener('click', function() {
  workSection.scrollIntoView({behavior: 'smooth'})
  });
skillsBtn.addEventListener('click', function() {
  skillsSection.scrollIntoView({behavior: 'smooth'})
  });
window.addEventListener('scroll', function() {
  if (!mediaQuery.matches) {
      const windowPosition = window.scrollY > 1
      navBar.classList.toggle('scrolling-active', windowPosition)
  } else return
  })