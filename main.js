document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    let zapasyMain = document.getElementById("zapasyMain");
    let hraciMain = document.getElementById("hraciMain");

    let containerZapasy = document.getElementById("containerZapasy");
    let containerHraci = document.getElementById("containerHraci");

    // TRUE = Zapasy, False = Hraci
    let zapasyHraci = true;

    switchNav();

    hraciMain.addEventListener("click",function(){
        if(zapasyHraci){
            zapasyHraci = false;
            switchNav();
        }
    });

    zapasyMain.addEventListener("click",function(){
        if(!zapasyHraci){
            zapasyHraci = true;
            switchNav();
        }
    });

    // Switching between "Zapasy" and "Hraci"
    function switchNav(){
        if(zapasyHraci){
            zapasyMain.className = "nav nav-active";
            hraciMain.className = "nav";
            containerZapasy.style.display = "block";
            containerHraci.style.display = "none";
        }else{
            zapasyMain.className = "nav";
            hraciMain.className = "nav nav-active";
            containerZapasy.style.display = "none";
            containerHraci.style.display = "block";
        }
    }

  });