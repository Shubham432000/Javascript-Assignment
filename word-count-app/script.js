const countwords = () => {
  let value1 = document.getElementById("data").value.length;
  let value2 = document.getElementById("data").value

  console.log(value1);

  document.getElementById("data1").innerHTML = value1;

 value2= value2.trim()
 let word = value2.split(" ")

 let clean = word.filter(function(ele){
  return ele != " ";
 })

  document.getElementById("data2").innerHTML = clean.length
};
