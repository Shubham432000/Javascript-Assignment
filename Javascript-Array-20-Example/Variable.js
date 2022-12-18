
// JavaScript Question


//1 st Question
var data = 'shubham' ; // declare a variable
console.log(data)
console.log(typeof(data)) // declare a data types

var number = 99;  // declare a variable
console.log(number)
console.log(typeof(number))  // declare a data types

var val = true;
console.log(typeof(val))

var val = false;
console.log(typeof(val))


var und 
console.log(typeof(und))

var emty = null;
console.log(typeof(emty))


// Interpolation Method
 
var firstName= 'shubham';
var lastName = 'Aher';
var martialStatus = 'unmarried';
var age = 23

console.log(`my first name is ${firstName} ${lastName} my martialStatus ${martialStatus} and age is ${age}`)


//toUpperCase() method

var data= 'shubham aher'
console.log(data.toUpperCase())

// includes() Method

var text= 'shubham aher';
console.log(text.includes('aher'))

// split() method

var text = 'how are you today'
console.log(text.split(''))

var text = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
var text1 = text.split(',')
console.log(text1)

// lastIndexOf() method

var text = 'Hello World'
console.log(text.lastIndexOf('World'))

// useSearch() method

var text = 'You cannot end a sentence with because because because is a conjunction';
console.log(text.search('because'))

// trim() method

var text = ' hello  world   ';
console.log(text.length)

text1= text.trim()
console.log(text1.length)

//Boolean value is either true or false.

var text = 'shubham' == 'shubham'
var text1 = 20 == 20;
var text2 = true == true
console.log(text)
console.log(text1)
console.log(text2)

var text = 'shubham' == 'aher'
var text1 = 20 == 45;
var text2 = true == false
console.log(text)
console.log(text1)
console.log(text2)

// 11.
console.log(-4>3) // false
console.log(- 4 >= 3) //false
console.log(- 4 < 3) //true
console.log(- 4 <= 3) //true
console.log(- 4 == 4) //false
console.log(- 4 === 4) //false
console.log(- 4 != 4)  //true
console.log(- 4 !== 4) //true
console.log(- 4 != '4') //true
console.log(- 4 == '4') //false
console.log(- 4 === '4') //false

var text = 'python';
var text1 = 'jargon'

var text2 = text.length;
var text3 = text1.length;

var text4 = text2 !== text3;
console.log(text4)

// 12.
var date = new Date()
var date1 = date.getFullYear()
var date2 =date.getMonth()
var date3 = date.getDate()
var date4 = date.getDay()
var date5 = date.getHours()
var date6 = date.getMinutes()
console.log(date1)
console.log(date2)
console.log(date3)
console.log(date4)
console.log(date5)
console.log(date6)

// 13.

var b= 12;
var h= 18;

var area = 0.5 *b*h
console.log(area)

// 14.
 
var x1= 2;
var y1 = 2;
var x2 = 6;
var y2 = 10;

var m = (y2-y1)/(x2-x1)
console.log(m)

// 15.

var y = 2*x-2;   // for x-intercept y=0
var x = 2/2
console.log(x)

var y= 2*x -2; // for y-intercept x=0
var y= -2;
console.log(y)

// 16.

var r = 4;
var pi = 3.14;

var area = pi * r * r;
console.log(area)

var c = 2*pi*r;
console.log(c)

// 17.

const d = new Date("2022-08-01T12:10:00Z")
console.log(d)

const d1 = new Date("4-Mar-2000")
console.log(d1)

const d2 = new Date("04/03/2000")
console.log(d2)

// 18.

var age = ("Enter your age")

if(age>18){
    console.log('You are old enough to drive')
}else{
    console.log('stating to wait for the number of years he needs to turn 18.')
}

// 19.

var x = 0;

var num1 = 2/x;
console.log(num1)


// 20.

var score = 39;

if(score >= 80){
    console.log('A')
}
else if(score>= 70 && score<=79){
    console.log('B')
}
else if(score>=60 && score<=69){
    console.log('C')
}
else if(score>=50 && score<=59){
    console.log('D')
}
else if(score>0 && score<=49){
    console.log('E')
}

// 21.

var season= 'june';

switch(season){
    case 'september':
    case 'octomber':
    case 'november':
        console.log('season is Autumn')
        break;
        case 'december':
        case 'january':
        case 'february':
            console.log('season is Winter')
        break;

        case 'march':
        case 'april':
        case 'may':
            console.log('season is spring')
        break;

        case 'june':
        case 'july':
        case 'august':
            console.log('season is summer')
        break;

}

// 22.

function getdays(month,year){
    return new Date(year,month,0).getDate();
}
console.log( getdays(4,2022))

// 25.

const shoppingCart= ['milk','coffe','tea','honey']
shoppingCart.unshift('meat')
console.log(shoppingCart)
shoppingCart.push('sugar')
console.log(shoppingCart)
shoppingCart.splice(4,1)
console.log(shoppingCart)
shoppingCart.splice(3,1,'green tea')
console.log(shoppingCart)

// 27.

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()
console.log(ages)
// min value 19
// max value 26

const med = 20+25/2;
console.log(med)
// median value is22.5


var sum=0;

for(var number of ages){
    sum = sum + number
}
var avg = sum/ages.length

console.log(avg) // average 22.8

var range = 26 - 19;
console.log(range)

// 28.

function prime(num){
    for(i=2; i<num;i++){
        if(num%i==0){
            console.log('this is '+num+' not prime number')
            return false
        }
        else{
            console.log('this is '+num+' prime number')
            return true
        }

    }
}
prime(30)

// 29.


var even =0;
var odd=0;

for( i=0; i<=100; i++){

    if(i%2===0){
        even=even+i;
    }else{
        odd=odd+i;
    }
}
console.log(even,odd)


// 32.

 const Countries = ['Keniya','Netharland','India','Newzeland','Srilanka','Finland','Chin','Iceland','America','Poland','Austrilia','Thiland','Japan','Scotland']

 // a
 
 const filterd= Countries.filter((Name)=>{
    return Name.includes('land')
 })
 console.log(filterd)
//b

const reduce1 = Countries.reduce((Name1,Name2)=>{
    return Math.max(Name1,Name2)
    
},"")
console.log(reduce1)

// c


//  node Variable.js