let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName('tab-indicator')[0];
let tabBody = document.getElementsByClassName('tab-body')[0];

let book = document.querySelectorAll('.Book');
let flight = document.querySelectorAll('.Flight');
let check = document.querySelectorAll('.Check');
let trips = document.querySelectorAll('.Trips');

let tabsPane = [book,flight,check,trips];
console.log(tabsPane);
for(let i=0; i<tabsPane.length;i++) {
    tabsPane[i][0].addEventListener("click", function () {

        tabHeader.getElementsByClassName('active')[0].classList.remove('active');
        tabsPane[i][0].classList.add('active');

        tabBody.getElementsByClassName('active')[0].classList.remove('active');
        tabsPane[i][1].classList.add('active');

        tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;

    });
}

