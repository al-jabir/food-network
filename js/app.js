let menu = document.querySelector('#menu');
let navbar = document.querySelector('.nav');

menu.onclick = () => {
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
}


window.onscroll = () => {
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')
}