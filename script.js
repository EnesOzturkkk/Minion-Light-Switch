const button = document.querySelector("#button");
const buttonImg = document.querySelector("#buttonImg");

let isOff = true;

const body = document.querySelector("body");

const darkh2 = document.querySelector("#darkH2");
const lighth2 = document.querySelector("#lightH2");

const darkMin = document.querySelector("#darkmin");
const lightMin = document.querySelector("#charmin");

button.addEventListener("click", function() {
    if (isOff) {
        darkh2.style.visibility = "visible";
        lighth2.style.visibility = "hidden";
        isOff = false;
        buttonImg.src = "public/images/ç.png";

        button.classList.add("moved-right");
        button.style.backgroundColor = "#e0e0e0";
        
        body.style.animation = "lightTheme 6s ease infinite";

        darkMin.style.opacity = "10%";
        lightMin.style.opacity = "100%";

        darkh2.style.color = "black";
    }
    else {
        lighth2.style.visibility = "visible";
        darkh2.style.visibility = "hidden";
        isOff = true;
        buttonImg.src = "public/images/n.png";
        
        button.classList.remove("moved-right");
        button.style.backgroundColor = "#323232";

        body.style.animation = "darkTheme 6s ease infinite";

        lightMin.style.opacity = "10%";
        darkMin.style.opacity = "100%";
    }
});