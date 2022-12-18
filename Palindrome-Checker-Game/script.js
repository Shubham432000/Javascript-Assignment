

function display(){
    let Value = document.getElementById("val").value
    let value1 = Value.toString().split("").reverse().join("")
    let value2 = Value.toString()
    console.log(value1 )

    if(value1 === value2){
        document.getElementById("show").innerHTML="It is a Palidrome"
    }else{
        document.getElementById("show").innerHTML="Not a Palidrome"
    }
}