
let navIcon = document.getElementById('hamburger-btn')
let navMenu = document.getElementById('nav-container')

// scroll to top btn
let topBtn = document.getElementById('top-btn')

// view more button
let viewMoreBtn = document.getElementById('view-more-btn')
let hiddenSection = document.getElementById('hidden-section')

// display scroll to top button when 25% of screen has been scrolled
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// listen to nav burger click and toggle menu 
navIcon.addEventListener('click',function(){
    navIcon.classList.toggle("open");
    toggleNav();
    navMenu.classList.toggle("hidden");
})

function viewMore(){
    if (hiddenSection.style.display === "none"){
        hiddenSection.style.display = "flex";
        hiddenSection.style.flexWrap = "wrap";
        viewMoreBtn.innerText = "View Less";
    } else{
        hiddenSection.style.display = "none";
        viewMoreBtn.innerText = "View More";
    }
}

// display nav menu
function toggleNav(){
    const dropMenu = document.getElementById('nav-container')
    let dropMenuHtml = ``
    dropMenuHtml =`
        <ul class="drop-menu">
            <li>
                <a href=portfolio.html>Portfolio</a>
            </li>
            <li>
                <a href="journal.html">Journal</a>
            </li>
            <li>
                <a href="index.html" class="current-page">About</a>
            </li>
               <li class="social-media">
                <a href="https://twitter.com/li_jack0707" target=”_blank”><i class="fa-brands fa-twitter"></i></a>
            </li>
        </ul>
    `
        dropMenu.innerHTML = dropMenuHtml
    
}

// scroll to top function
function scrollToTop(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
}


