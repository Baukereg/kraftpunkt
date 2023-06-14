let sections;
let selected;

function init() {
  sections = Array.from(document.querySelectorAll('section'));
  select(0);
}

function select(i) {
  selected = i;
  sections.forEach((section) => section.style.display = 'none');
  sections[i].style.display = 'flex';
}

function change(dir) {
  selected += dir;
  if (selected < 0) selected = 0;
  if (selected > sections.length - 1) selected = sections.length - 1;
  select(selected);
}

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37: 
      change(-1);
      break;
    case 39:
      change(1);
      break;
  }
};