

function interst(){
  

    let principle = parseInt(document.getElementById("prin").value)
let rate = document.getElementById("rate").value
let time = document.getElementById("time").value

    let SI = (principle * time*rate  )/100;

    const total = (principle * time*rate  )/100 + principle

 // let  total=  princ+SI

    document.getElementById("si").innerHTML = SI
    document.getElementById("total").innerHTML = total
}