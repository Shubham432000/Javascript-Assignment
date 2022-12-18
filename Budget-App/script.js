



function show(){
    var Value =parseInt(document.getElementById("input").value) 
    var Exp =parseInt(document.getElementById("expence").value) 
console.log(Value)
    document.getElementById("showinput").innerHTML=Value
    document.getElementById("showout").innerHTML=Exp
    
    //Total = Value-Exp;

    if (!Exp){
        document.getElementById("total").innerHTML = Value;
    }else if (Value && Exp){
      var  Total = Value-Exp;
        document.getElementById("total").innerHTML = Total;
       
    }
    console.log(Total)
    
}
    

   
   


