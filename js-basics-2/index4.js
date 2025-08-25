let numbersEx1 = [3,4];
// end
numbersEx1.push(7);
// beginning
numbersEx1.unshift(-2)
// pomiedzy 
numbersEx1.splice(2,0,6);

console.log(numbersEx1);

const checkList =[1,2,3,42,3,4,34,3,5,3,1];
// check element in list , if it does not exist = -1 , second value is from where we start
console.log(checkList.indexOf(33,2));
console.log(checkList.lastIndexOf(1));
 
console.log(checkList.includes(1));

var array1 = [4,13,9,83,226];

var found = array1.find(function(element){
    return element > 10;
});

console.log(found);

const cours = [
    {id: 1 , name: 'a'},
    {id: 2 , name: 'b'}
]

const course = cours.find(function(cour){
    return 'a' === cour.name;
});

console.log(course);

const course2 = cours.findIndex(function(cour){
    return 'a' === cour.name;
});

console.log(course2);

const course3 = cours.find(cour => 'a' === cour.name);

console.log(course3);
// delete
let numbers1 = [1,2,3,4];

// const last = numbers1.pop();

// const first = numbers1.shift();

// const middle = numbers1.splice(2,1);

// numbers1 = [];

// numbers1.length = 0;

const firstPart1 = [{ id: 1}];
const firstPart2 = [1,2,3];
const secondPart = [4,5,6];

const combined =  firstPart1.concat(secondPart);
const combined2 =  [...firstPart2, ...secondPart];

firstPart1[0].id = 10;

console.log(combined);
console.log(combined2);

const slice = combined.slice(2);

console.log(slice);

const copy = [... combined2]

const numbersEx2 = [1, 2, 3];
for(let number of numbersEx2){
    console.log(number);
}

numbersEx2.forEach((number, index) => console.log(index,number));

const numbersEx3 = [1, 2, 3];
const joined = numbersEx3.join(' , ');
console.log(joined);


const numbersEx4 = [2, 3, 1];
numbersEx4.sort();
console.log(numbersEx4);
numbersEx4.reverse();
console.log(numbersEx4);

const cours2 = [
    {id: 1 , name: 'next.js'},
    {id: 2 , name: 'b'}
];

cours2.sort(function(a,b){
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    return 0;
});
console.log(cours2)

const numbersEx5 = [0,-19,1, 2, 3];

const allPositive = numbersEx5.every(function(value){
    return value >= 0 ;
});
console.log(allPositive);
const somePositive = numbersEx5.some(function(value){
    return value >= 0 ;
});
console.log(somePositive);

const filtered = numbersEx5.filter(function(value){
    return value >= 0;
})

console.log(filtered);

// const items = filtered.map(n => '<li>'+ n +'</li>');
const items = filtered.map(n => ({value: n}));

// const html = '<ul>'+items.join('')+'</ul>';
console.log(items);

const numbersEx6 = [0,-1,1, 2, 3,4,5,9];

const items2 = numbersEx6
    .filter(n => n >= 0 )
    .map(n => ({value: n}))
    .filter(obj => obj.value > 2 );

console.log(items2);

let sum1 = 0;
for(let n of numbersEx6){
    sum1+=n;
}
console.log(sum1);

const sum2 = numbersEx6.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
});

// const sum2 = numbersEx6.reduce((accumulator,currentValue)=> accumulator + currentValue);

console.log(sum2);

// ===============
const ex1 = arrayFromRange(-11,4);

console.log(ex1);

function arrayFromRange(min,max){
    let array = [];
    for(let i = min ; i <= max ; i++){
        array.push(i);
    }
    return array;
}

// ===============

let ex2 = [1,2,3,4];
console.log(includes(ex2,5));
function includes(array,searchElement){
    for(let i = 0 ; i < array.length; i++){
        if(array[i] == searchElement){
            return true;
        }    
    }
    return false;
}

// ===============

let ex3 = [1,2,3,4,3,2,1];

const output = except(ex3,[3]);
console.log(output);
function except(array ,excluded){
    let newArray = [];
    for(let i = 0 ; i < array.length ; i++){
        for(let j = 0 ; j < excluded.length ; j++){
            if(array[i]!=excluded[j]){
                newArray.push(array[i]);
            }
        }
    }
    return newArray;
}

// ===============

let ex4 = [1,2,3,4];

function move(array , index ,offset){
    const table = [... array];
    const element = table.splice[index,1][0];
    table.splice[index+offset,0,element];
}

// ===============

let ex5 = [1,2,3,4,1,1];
// ile razy wystepuje dana liczba
console.log(countOccurrences(ex5,1));
function countOccurrences(array,searchElement){
    return array.reduce((acc,currentValue) => {
        return acc + (currentValue == searchElement ? 1 : 0);
    },0);
}

// ===============

let ex6 = [1,2,16,3,4];

console.log(getMax(ex6));
function getMax(array){
    if(array.length==0)return undefined;
    return array.reduce((acc, currentValue)=>{
        return (acc > currentValue)? acc : currentValue; 
    });
}

// ===============

let movies = [
    {title: 'a', year: 2018 , rating: 4.5},                         
    {title: 'b', year: 2018 , rating: 4.7},
    {title: 'c', year: 2018 , rating: 3 },
    {title: 'd', year: 2017 , rating: 4.5},
];

let theBestMovie = movies
        .filter(n => n.year == 2018 && n.rating > 4)
        .sort((a,b) => a.rating - b.rating)
        .reverse()
        .map(n => n.title);

console.log(theBestMovie);

