var ideaArray = [];

var buttonSave = document.querySelector('#save-button');
var ideaCards = document.querySelector('.idea-cards');
var inputTitle = document.querySelector('#title-input');
var inputBody = document.querySelector('#body-input');
var imgHamburgerIcon = document.querySelectorAll('.drop-down-toggle');
var sectionDefaultMenu = document.querySelector('.menu');
var sectionDropDownMenu = document.querySelector('.drop-down');
var divOverlay = document.querySelector('.overlay');

buttonSave.addEventListener('click', getUserIdea)
imgHamburgerIcon[0].addEventListener('click', toggleDropDown);
imgHamburgerIcon[1].addEventListener('click', toggleDropDown);
inputTitle.addEventListener('keyup', checkButtonStatus);
inputBody.addEventListener('keyup', checkButtonStatus);

window.onload = checkButtonStatus;

;function getUserIdea() {
  var newTitle = inputTitle.value;
  var newBody = inputBody.value;
  if(newTitle !== '' && newBody !== '') {
    inputTitle.value = '';
    inputBody.value = '';
    checkButtonStatus();
    createIdea(newTitle, newBody);
  };
};

function createIdea(newTitle, newBody){
  var idea = new Idea(newTitle, newBody);
  ideaCards.innerHTML += idea.createHtml(ideaArray.length);
  ideaArray.push(idea);
  var ideasGrid = document.querySelectorAll('.ideas');
  idea.node = ideasGrid[ideasGrid.length - 1];

}
;function checkButtonStatus() {
  if (inputTitle.value === '' || inputBody.value === '') {
    buttonSave.disabled = true;
  } else {
    buttonSave.disabled = false;
  }
}

;function toggleDropDown() {
  sectionDefaultMenu.classList.toggle('hidden');
  sectionDropDownMenu.classList.toggle('hidden');
  divOverlay.classList.toggle('hidden');
};

var idea = new Idea ("example", "bret")
