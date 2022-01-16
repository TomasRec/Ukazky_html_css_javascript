
// progress-bar

document.body.onkeyup = function(e){
  if(e.keyCode == 32){
    var i = 0;
      if (i == 0) {
        i = 1;
        var mybar = document.getElementsByClassName("myBar")[0]
        var width = 10;
        var id = setInterval(frame, 30);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
            document.location.href="krok_1_loaded.html"
          } else {
            width++;
            mybar.style.width = width + "%";
            mybar.innerHTML = width + "%";
          }
        }
      }
    }
  }


// krok 2

let soucet = 0
let spravne = document.getElementsByClassName("spravne")[0];
let pokracovat = document.getElementsByClassName("pokracovat")[0];

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const draggableElementData = ev.dataTransfer.getData("text");
  const droppableElementData = ev.target.getAttribute("data-draggable-id");
  const isCorrectMatching = draggableElementData === droppableElementData;
  if(isCorrectMatching) {
    ev.target.appendChild(document.getElementById(draggableElementData));
    soucet += 1;
    spravne.innerHTML = "Správně " + soucet + "/3" 
    if(soucet === 3){
      pokracovat.style.display = "block";
    }
  }
}

// krok 3
 function citim_klik() {
  container = document.getElementsByClassName("container-krok-3")[0]
  vysledek_testu = document.getElementsByClassName("vysledek-testu")[0]
  container.style.display = "none";
  vysledek_testu.innerHTML = "Jsi negativní! Toto je konec testu."
 }

 function necitim_klik() {
  container = document.getElementsByClassName("container-krok-3")[0]
  vysledek_testu = document.getElementsByClassName("vysledek-testu")[0]
  container.style.display = "none";
  vysledek_testu.innerHTML = "Jsi pozitivní! Toto je konec testu."
 }


//  teplota vypocet

let teplota = document.getElementsByClassName("teplota")[0]
teplota.innerHTML = "Vaše teplota je: " + ((Math.random()*7.5)+35).toFixed(1) + " °C";