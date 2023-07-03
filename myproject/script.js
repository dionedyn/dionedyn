
var hamburger = document.querySelector(".hamburger");
var close = document.querySelector(".close");
var open = document.querySelector(".open");
var navli = document.querySelector(".navli");
var navul = document.querySelector(".navul");

hamburger.addEventListener("click", () =>{
    if(navul.classList.contains("navul")){
        navul.classList.remove("navul");
        navul.classList.add("navulinverse");
        close.style.display="block";
        open.style.display= "none";
    }

    else{
         navul.classList.remove("navulinverse");
        navul.classList.add("navul");
        close.style.display="none";
        open.style.display="block";
    }    
}) 
   
const darkmodeBtn = document.querySelector(".darkmodeBtn");
const darkmodeicon = document.querySelector(".fas")

darkmodeBtn.addEventListener("click", () =>{
    document.body.classList.toggle("darkmode")
})


darkmodeBtn.addEventListener("click", () => {
    if(document.body.classList.contains("darkmode"))
    {
        darkmodeicon.classList.remove("fa-moon");
       darkmodeicon.classList.add("fa-sun");
    }

    else{
        darkmodeicon.classList.remove("fa-sun");
        darkmodeicon.classList.add("fa-moon")
    }
})

const themecolor = document.querySelector(".themecolor");
const squares = document.querySelector(".squares")

themecolor.addEventListener("click", () => {
if(squares.style.transform == `scale(0)`){
    squares.style.transform = `translateX(-30px) translateY(80px) scale(1)`
    }
    else{
        squares.style.transform = `scale(0)`
    }
})

window.addEventListener("scroll", () =>{
    squares.style.transform = `scale(0)` 
})


const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        squares.style.transform = `scale(0)`
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }

        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

let submit = document.querySelector(".submit");
let password = document.querySelector(".password")

submit.addEventListener("click", function(event){
    if(password.value != "edyn.org"){
    event.preventDefault();
    window.alert("Sorry, Seems like you inputed an incorrect password")
    }
})