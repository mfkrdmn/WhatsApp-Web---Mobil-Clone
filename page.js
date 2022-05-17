$(document).ready(function(){

});

let firstname = document.getElementById("firstname")
let secname = document.getElementById("secname")
let thdname = document.getElementById("thdname")
let frthname = document.getElementById("frthname")
let fifthname = document.getElementById("fifthname")

let Name1 = document.getElementById("Name1")
let Name2 = document.getElementById("Name2")
let Name3 = document.getElementById("Name3")
let Name4 = document.getElementById("Name4")
let Name5 = document.getElementById("Name5")

let pictop = document.getElementById("pictop")

let nameh = document.getElementById("nameh")

let names = document.getElementById("names")
let texts = document.getElementById("texts")
let contain = document.getElementById("contain")

let width = window.innerWidth;


Name1.addEventListener("click",function(){

    firstname.style.display="block"
    secname.style.display="none"
    thdname.style.display="none"
    frthname.style.display="none"
    fifthname.style.display="none"
    nameh.innerHTML="Name1"
    pictop.style.backgroundImage="url('photos/pic1.jpg')"
    
        if(width<800){
            firstname.style.display="block"
            names.style.display="block"
            secname.style.display="none"
            thdname.style.display="none"
            frthname.style.display="none"
            fifthname.style.display="none"
            contain.style.display="none"
        }
        else{
            firstname.style.display="block"
            contain.style.display="block"
            names.style.display="block"
            secname.style.display="none"
            thdname.style.display="none"
            frthname.style.display="none"
            fifthname.style.display="none"
        }
})

Name2.addEventListener("click",function(){

    firstname.style.display="none"
    secname.style.display="block"
    thdname.style.display="none"
    frthname.style.display="none"
    fifthname.style.display="none"
    nameh.innerHTML="Name2"
    pictop.style.backgroundImage="url('photos/pic2.jpg')"

    if(width<800){
        firstname.style.display="none"
        names.style.display="block"
        secname.style.display="block"
        thdname.style.display="none"
        frthname.style.display="none"
        fifthname.style.display="none"
        contain.style.display="none"
    }
    else{
        firstname.style.display="none"
        contain.style.display="block"
        names.style.display="block"
        secname.style.display="block"
        thdname.style.display="none"
        frthname.style.display="none"
        fifthname.style.display="none"
    }

})

Name3.addEventListener("click",function(){

    firstname.style.display="none"
    secname.style.display="none"
    thdname.style.display="block"
    frthname.style.display="none"
    fifthname.style.display="none"
    nameh.innerHTML="Name3"
    pictop.style.backgroundImage="url('photos/pic3.jpg')"

    if(width<800){
        firstname.style.display="none"
        names.style.display="block"
        secname.style.display="none"
        thdname.style.display="block"
        frthname.style.display="none"
        fifthname.style.display="none"
        contain.style.display="none"
    }
    else{
        firstname.style.display="none"
        contain.style.display="block"
        names.style.display="block"
        secname.style.display="none"
        thdname.style.display="block"
        frthname.style.display="none"
        fifthname.style.display="none"
    }

})

Name4.addEventListener("click",function(){

    firstname.style.display="none"
    secname.style.display="none"
    thdname.style.display="none"
    frthname.style.display="block"
    fifthname.style.display="none"
    nameh.innerHTML="Name4"
    pictop.style.backgroundImage="url('photos/pic4.jpg')"

    if(width<800){
        firstname.style.display="none"
        names.style.display="block"
        secname.style.display="none"
        thdname.style.display="none"
        frthname.style.display="block"
        fifthname.style.display="none"
        contain.style.display="none"
    }
    else{
        firstname.style.display="none"
        contain.style.display="block"
        names.style.display="block"
        secname.style.display="none"
        thdname.style.display="none"
        frthname.style.display="block"
        fifthname.style.display="none"
    }

})

Name5.addEventListener("click",function(){

    firstname.style.display="none"
    secname.style.display="none"
    thdname.style.display="none"
    frthname.style.display="none"
    fifthname.style.display="block"
    nameh.innerHTML="Name5"
    pictop.style.backgroundImage="url('photos/pic5.jpg')"

    
    if(width<800){
        firstname.style.display="none"
        names.style.display="block"
        secname.style.display="none"
        thdname.style.display="none"
        frthname.style.display="none"
        fifthname.style.display="block"
        contain.style.display="none"
    }
    else{
        firstname.style.display="none"
        contain.style.display="block"
        names.style.display="block"
        secname.style.display="none"
        thdname.style.display="none"
        frthname.style.display="none"
        fifthname.style.display="block"
    }
})

