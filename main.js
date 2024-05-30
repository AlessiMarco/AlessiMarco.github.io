let item = document.querySelector('.hamburger-icon');
let span1 = document.querySelector('.hamburger-icon span:nth-child(1)');
let span2 = document.querySelector('.hamburger-icon span:nth-child(2)');
let span3 = document.querySelector('.hamburger-icon span:nth-child(3)');

item.addEventListener("click", function() {
    document.body.classList.toggle('menu-open');
    span1.classList.toggle('type1');
    span2.classList.toggle('type2');
    span3.classList.toggle('type3');
});