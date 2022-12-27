let dob = document.getElementById("dob");
let errAge = document.querySelector(".age");

const ageDisplay = errAge.innerHTML;
const ageStyle = errAge.style;

dob.addEventListener("input", () => {
  let birthdate = new Date(dob.value).getTime();
  let today = Date.now();
  if (birthdate >= today) {
    errAge.innerText = "Please Enter proper Date of Birth!!";
    errAge.style.color = "red";
    return false;
  } else {
    errAge.innerHTML = ageDisplay;
    errAge.style = ageStyle;
    let dateDiff = today - birthdate;
    let dayDif = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let year = Math.floor(dayDif / 365);
    let yday = dayDif % 365;
    let month = Math.floor(yday / 30);
    let day = yday % 30;

    document.getElementById("years").innerText = year;
    document.getElementById("months").innerText = month;
    document.getElementById("days").innerText = day;
  }
});

// var diff = Date.now() - Date.parse("July 13, 2016");

// var seconds = Math.floor(diff / 1000),
//     minutes = Math.floor(seconds / 60),
//     hours   = Math.floor(minutes / 60),
//     days    = Math.floor(hours / 24),
//     months  = Math.floor(days / 30),
//     years   = Math.floor(days / 365);

// seconds %= 60;
// minutes %= 60;
// hours %= 24;
// days %= 30;
// months %= 12;

// console.log("Years:", years);
// console.log("Months:", months);
// console.log("Days:", days);
// console.log("Hours:", hours);
// console.log("Minutes:", minutes);
// console.log("Seconds:", seconds);
