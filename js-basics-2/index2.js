
let role ;

switch (role) {
    case 'guest':
        console.log('Guest');
    break;

    default:
        console.log('Unknown User');
}

for(let i = 0 ; i< 5 ; i++){
    console.log('Hello World',i);
}


const person = {
    name: 'me',
    age: 2
}

const color = ['a','b','c'];

for (let index in person){
    console.log(index ,person[index]);
}

for (let ind in color){
    console.log(ind);
}

// =================
let x = 15;
let y = 20;

function maximum(a,b){
    if (a >= b){
        return a;
    }else{
        return b;
    }
}

console.log(
    maximum(x,y)
);

// =================

function isLandscape(width , height){
    return width > height;
}

function fizzBuzz(input){
    if ((input % 3 == 0)&&(input % 5 == 0)){
        return 'FizzBuzz';
    }else if (input % 3 == 0){
        return 'Fizz';
    }else if (input % 5 == 0){
        return 'Buzz';
    }
}
console.log(fizzBuzz(3));

// =======================

function checkSpeed(speed){
    let speedLimit = 70;
    if (speed < 75){
        return console.log('Ok');
    }
    let outspeed = Math.floor((speed - speedLimit)/5);
    if (outspeed >= 12){
        return console.log("Licence suspended");
    }else{
        return console.log(outspeed +' point');
    }
}

checkSpeed(132);

// ======================

function showNumbers(limit){
    for (let i = 0 ; i <= limit ; i++){
        if( i % 2 == 0){
            console.log(i,'Even');
        }else{
            console.log(i,'ODD');
        }
    }
}

showNumbers(5);

// =========

function countTruthy(array){
    let count = 0;
    for (let element of array){
        if(element){
            count++;
        }
    }
    return count;
}

const array1 = [1,2,null ,undefined];
console.log(countTruthy(array1));

// ==============

function showProperties(obj){
    for(let index in obj){
        if(typeof(obj[index]) === 'string'){
            console.log(index,obj[index]);
        }
    }
}

const movie = {
    title : 'a',
    year : 2025
}

showProperties(movie);

// ====================

function sum(limit){
    let count = 0;
    
    for (let i = 0; i <= limit; i ++){
        if(i % 3 == 0 || i % 5 == 0)
        count += i;
    }
    
    return count;
}

console.log(sum(10));

// ==================

const marks = [ 80,80,50];

function calculateGrade(marks){
    let count = 0 ;
    for(let values of marks){
        count += values;

    }
    let average = count / marks.length;

    if(average >= 1 && average <= 59){
        console.log("F");
    }else if(average >= 60 && average <= 69){
        console.log("D");
    }else if(average >= 70 && average <= 79){
        console.log("C");
    }else if(average >= 80 && average <= 89){
        console.log("B");
    }else if(average >= 90 && average <= 100){
        console.log("A");
    }

}
calculateGrade(marks);

// =============

showStars(1);

function showStars(rows){
    let star = '';
    for( let i = 0 ; i < rows ; i++ ){
        star+="*";
        console.log(star);
    }
}

// ================

showPrimes(20);
function showPrimes(limit){

    for(let i = 2 ; i <= limit ; i++){
        let isPrime = true;

        for(let j = 2 ; j < i ; j++) {
            if(i % j === 0){
                isPrime =false;
                break;
            }
        }
        if(isPrime){
            console.log(i);
        }
        
    }

}
