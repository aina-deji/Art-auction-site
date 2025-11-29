const menuButton = document.querySelector('.menu-btn')
const navigationLists = document.querySelector('.nav-lists')
const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')


menuButton.addEventListener('click',function () {
   navigationLists.classList.toggle('active');
   if (navigationLists.classList.contains('active')) {
      menuOpen.style.display = 'none';
       menuClose.style.display = 'block';
   } else {
      menuOpen.style.display = 'block';
       menuClose.style.display = 'none';
       
   }
})
console.log()
// a reusable function for the auction timer
function auctionTimer(d, h, m) {
   
}

// getting the element id for year
const footerYear = document.getElementById('footer-year');

// the variable generates the values for the current date using locale string
let currentDate = new Date();
// the variable get tge vakue for the current year
let currentYear = currentDate.getFullYear();
// the   applies the date into the html
footerYear.textContent = currentYear;