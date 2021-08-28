/*============== MENU SHOW E HIDDEN ================*/
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*============== MENU SHOW ================*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== Remove Menu MOBILE ====================*/
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
  let itemClass = this.parentNode.className;

  for(i = 0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills-close';
  }
  if(itemClass === 'skills__content skills-close'){
     this.parentNode.className = 'skills__content skills-open';
  }
}

skillsHeader.forEach((e) => {
  e.addEventListener('click', toggleSkills);
})



/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent =>{
      tabContent.classList.remove('qualification-active')
    })
    target.classList.add('qualification-active')

    tab.forEach(tab =>{
      tab.classList.remove('qualification-active')
    })
    tab.classList.add('qualification-active')
  })
})





















