let card1 = document.getElementsByClassName('card')[0];
let card2 = document.getElementsByClassName('card')[1];
let card3 = document.getElementsByClassName('card')[2];
let card4 = document.getElementsByClassName('card')[3];


// console.log(card1);

// let click_func = function(){
//     card1.style.position = "relative";
//     card1.style.top = "-3px"
//     card1.style.border= "1px solid red"
// }

// card1.addEventListener('click',click_func())

// console.log(card2);7

// let showed = document.getElementById('ul-btn');

// function clicked(){
//     showed.classList.toggle;
// }

// let shownav = document.getElementById('ul-1');

// function clicked(){
//     shownav.classList.toggle("show-nav");
//     // shownav.setAttribute("value", "<<<<<")
// }

// let butn = document.getElementById('ul-btn');
// let hide = document.getElementById('ul-1');
// let li_s = document.getElementsByTagNameNS("li")[0]

// function clicked(){
//     hide.classList.toggle("hide")
//     // hide.style.display = "none"

// }

let buttuon = document.getElementById("ul-btn");
// console.log(buttuon);
let ul = document.getElementById("ul-1");
let nav = document.getElementsByTagName('nav')[0];
console.log(nav);
// console.log(ul);

buttuon.addEventListener('click',function(){
    ul.classList.toggle("ham");
    ul.style.transition = "ease-in 3s "
    // buttuon.setAttribute.toggle("value","$$")
    if(ul.classList.contains("ham")){
        nav.style.padding = "20px"
        buttuon.setAttribute("value",">>")
    }

    
    // ul.appendChild(buttuon);
    // buttuon.style.position = "absolute"
    // buttuon.style.top = "10px"
    
    

})



