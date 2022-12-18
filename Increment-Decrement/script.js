

let count=0;

let Value = document.getElementById("value")

function increment(sig){
if(sig == "+"){
    count++;
}
else if(sig == "-"){
    count--;
}
else if(sig == "0"){
    count=0;
}
Value.textContent=count
}









// function increment(sig){
// if(sig == '+'){
//     count++;
//     Value.textContent=count
// }

// }

// function reset(sig){
//     if(sig == '0'){
//         count=0;
//         Value.textContent=count
//     } 
// }

// function decrement(sig){
//     if(sig == '-'){
//         count--;
//         Value.textContent=count
//     } 
// }
