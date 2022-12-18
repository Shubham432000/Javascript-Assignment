

function interst(){
  

    let princ = parseInt(document.getElementById("prin").value)
let rate = document.getElementById("rate").value
let time = document.getElementById("time").value

    let SI = (princ * time*rate  )/100;

    const total = (princ * time*rate  )/100 + princ

 // let  total=  princ+SI

    document.getElementById("si").innerHTML = SI
    document.getElementById("total").innerHTML = total
}