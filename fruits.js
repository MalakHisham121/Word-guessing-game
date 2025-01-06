let list;
let Fruits=['Apple','Cherry','Pear',"Banana", "Grape","Lemon", "Melon","Peach"];
let Vegetables = ["Carrot","Onion","Pepper","Tomato","Squash"]
let Countries =["Japan","Greece","Italy","Nepal","Egypt","Spain"]
let School_supplies =["Pencil","Eraser","Notebook","Ruler","Marker","Paper"]

const mytype = localStorage.getItem("type")

    switch (mytype){
        case "fru":
            list = Fruits;
            break;
        case "veg":
          list  = Vegetables;
          break;
        case "sup":
            list = School_supplies;
            break;
        case "con":
            list = Countries;
            break;

        }

let r = Math.floor(Math.random()*list.length);
        console.log()

let l = list[r].length;
let s= "word: ";
for(let i =0;i<l;i++) {
    s+="_.";
}
var w= document.getElementById("word")
w.innerHTML = s;
var btn = document.getElementById('submit')
btn .addEventListener('click',()=> {
    let mes = document.getElementById("bravo")
    mes .innerHTML=""
    mes = document.getElementById("tryagain")
    mes .innerHTML=""
    let inn = document.getElementById('11').value;
    if(inn.toLowerCase()===list[r].toLowerCase()) {
         mes = document.getElementById("bravo")

        mes.innerHTML= "Bravooooo"
         s= "word: ";
        for(let i =0;i<l;i++) {
            s+= list[r][i]+".";

        }
        w.innerHTML = s;
    }
    else
    {
         mes = document.getElementById("tryagain")
        mes.innerHTML= "Try again"
      //  mes.innerHTML=""
    }
   event.preventDefault();
})

var btn2 = document.getElementById("hint");
let stop =0;
btn2.addEventListener('click',()=>{
    s= "word: ";
    for(let i =0;i<l;i++) {
        let c = list[r][i];
        if(i===0)c = c.toUpperCase();
        if(i<=stop)s+= c+".";
        else
            s+="_.";

    }
    stop++;
    if(stop===l){
       stop =0;
        let mes = document.getElementById("tryagain");
        mes.innerHTML =""
         mes = document.getElementById("bravo");
        mes.innerHTML= "Bravooooo"
        s= "word: ";
        for(let i =0;i<l;i++) {
            let c = list[r][i];
            if(i===0)c = c.toUpperCase();
            s+= c+".";

        }
        w.innerHTML = s;

    }
    w.innerHTML = s;
    event.preventDefault();

})

var btn3 = document.getElementById("retry");
btn3.addEventListener('click',()=>{
    location.reload();
})






