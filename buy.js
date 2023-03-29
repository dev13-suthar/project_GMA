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
    }else{
        buttuon.setAttribute("value",">")
    }

    
    // ul.appendChild(buttuon);
    // buttuon.style.position = "absolute"
    // buttuon.style.top = "10px"
    
    

})



// buttuon.addEventListener('click',function(){
//     ul.classList.toggle("ham");
//     ul.style.transition = "ease-in 3s "
//     // buttuon.setAttribute.toggle("value","$$")
//     if(ul.classList.contains("ham")){
//         nav.style.padding = "20px"
//         buttuon.setAttribute("value",">>")
//     }else{
//         buttuon.setAttribute("value",">")
//     }

    
//     // ul.appendChild(buttuon);
//     // buttuon.style.position = "absolute"
//     // buttuon.style.top = "10px"
    
    

// })