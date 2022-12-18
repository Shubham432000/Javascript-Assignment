
// let Button= document.querySelectorAll(".btn1");
// Button.addEventListener("click",myfun1)



// function myfun1(e){

//   document.getElementsByClassName(".answer").innerHTML="2"
// }

// let button= document.getElementById("myBtn")
// button.addEventListener("click", displayDate);
// function displayDate(e) {

//   document.getElementById("demo").value +="1";
//

let button = document.getElementById("demo")

function calculate(num){
    button.value += num
   
}
function calculate1(){
    button.value = eval(button.value)
}

function calculate2(){
    button.value = " "
}

function calculate3(){
    button.value = button.value.slice(0,-1)
}
// function equal(num){
//     if(button.value == '='){
//         button.value=   eval(button.value += num)
//     }
// }