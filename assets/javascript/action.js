//modal user
const userBtn = document.querySelector('.js-user')
const modal = document.querySelector('.js-modal')
const modalClose =document.querySelector('.js-modal-close')
const modalBody = document.querySelector('.js-modal-body')

function showUsermodal() {
    modal.classList.add('open')
}

function hideUsermodal() {
    modal.classList.remove('open')
}

userBtn.addEventListener('click',showUsermodal)

modalClose.addEventListener('click',hideUsermodal)

modalBody.addEventListener('click',function(event) {
    event.stopPropagation()
})

//login-regis
const regisBtn = document.querySelector('.js-btn-regis')
const loginBtn = document.querySelector('.js-btn-regis-login')
const regis = document.querySelector('.js-modal-regis')
const login = document.querySelector('.js-modal-login')

function showRegis() {
    regis.classList.add('openlr')
    login.classList.add('closelr')
    loginBtn.classList.add('form__header--switch')
    regisBtn.classList.remove('form__header--switch')
}

regisBtn.addEventListener('click',showRegis)


function showLogin() {
    regis.classList.remove('openlr')
    login.classList.remove('closelr')
    loginBtn.classList.remove('form__header--switch')
    regisBtn.classList.add('form__header--switch')
}

loginBtn.addEventListener('click',showLogin)

// modal search
const searchBtn = document.querySelector('.js-search')
const modalSearch = document.querySelector('.js-modal-search')
const closeSearch =document.querySelector('.js-search-close')

function showSearch() {
    modalSearch.classList.add('open')
}

function hideSearch() {
    modalSearch.classList.remove('open')
}


searchBtn.addEventListener('click', showSearch)
closeSearch.addEventListener('click',hideSearch)

//subsearch
const modalSubSearch = document.querySelector('.js-sub-search')
const subsearchBtn = document.querySelector('.js-sub-search-btn')
const closesubsearchBtn = document.querySelector('.js-sub-search-close')


function showSubsearch() {
    modalSubSearch.classList.add('open')
}
function hideSubsearch() {
    modalSubSearch.classList.remove('open')
}


subsearchBtn.addEventListener('click',showSubsearch)

closesubsearchBtn.addEventListener('click',hideSubsearch)

// slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//auto slider
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 5 seconds
}


// Destination slider
const dot1 = document.querySelector('.js-dot-1')
const dot2 = document.querySelector('.js-dot-2')

dot2.addEventListener('click',function(){
  dot2.classList.add('manual-btn--active')
  dot1.classList.remove('manual-btn--active')
})

dot1.addEventListener('click',function(){
  dot1.classList.add('manual-btn--active')
  dot2.classList.remove('manual-btn--active')
})



const dot3 = document.querySelector('.js-dot-3')
const dot4 = document.querySelector('.js-dot-4')

dot4.addEventListener('click',function(){
  dot4.classList.add('manual-btn--active')
  dot3.classList.remove('manual-btn--active')
})

dot3.addEventListener('click',function(){
  dot3.classList.add('manual-btn--active')
  dot4.classList.remove('manual-btn--active')
})

// top btn
const topBtn = document.querySelector('.js-top-btn')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    topBtn.style.opacity = 1;
  } else {
    topBtn.style.opacity = 0;
  }
}

// nav bar
const header = document.querySelector('.js-header')

window.onscroll = function() {scrollheader()};

function scrollheader() {
  if (document.body.scrollTop > 46 || document.documentElement.scrollTop > 46) {
    header.style.top = "0";
  } else {
    header.style.top = "46px";
  }
}