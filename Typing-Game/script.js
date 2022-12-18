
let counter = document.getElementById("time")
let show = document.getElementById("result")

function datashow(){
    var Data = document.getElementById("data").value
    document.getElementById("show").innerHTML = Data;

   
   
}

function start() {
    console.log("click")
    let count=0;   
     setInterval(() => {
        if(count === 60){

            return false
        }
        count++
       counter.textContent=count;
    }, 1000);
}

function result(){
    // document.getElementById("result").innerHTML=Data.length
    show.textContent= document.getElementById("data").value.length
    }