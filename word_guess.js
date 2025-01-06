
var btn4  = document.getElementById("type");
var ttpe = document.getElementsByName("game")

let selected;

btn4.addEventListener('submit',function (event){
     event.preventDefault();
    for(const rad of ttpe){
        if(rad.checked){
            selected = rad.value;
            break;
        }
    }
console.log(selected)
    localStorage.setItem("type",selected)
   window.location.href= "types/game.html";
})