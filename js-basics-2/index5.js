
function walk(){
    console.log('walk');
}

let run = function () {
    console.log('run')
};

run();

function sum(){
    let total  = 0;
    for (let value of arguments){
        total += value;
    }
    return total;
}

function sum2(discount ,...price){
    let total = price.reduce((a,b)=> a+b);
    return total * (1 - discount);
}

console.log(sum(1,2,3,4));
console.log(sum2(0.1,1,2,3));

function interest(principal, rate , years){
    rate = rate || 3.5;
    years = years || 5;
    return principal * rate / 100 * years;
}

// default values

function interest2(principal, rate = 3.5, years = 5){
    return principal * rate / 100 * years;
}

console.log(interest(10000,3.5,5));
console.log(interest2(10000));


const person = {
    firstName: 'Jacob',
    lastName: 'Kowalczyk',
    // getter
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        if(typeof value !== 'string')
            throw new Error('Value is not a string!');
        const parts = value.split(' ');
        if(parts.length !== 2 )
            throw new Error('Enter a first and last name');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

};

try{
    person.fullName = '';
}catch(e){
    console.log(e); // alert
}

console.log(person.fullName);


function start(){
    for(var i = 0; i < 5 ; i++){
        console.log(i); 
    }
    console.log(i);
}
start();

const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title,tag);
        },this);
    }
};

const video2 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(tag => {
            console.log(this.title,tag);
        });
    }
};

video.showTags();



function playVideo(a,b) {
    console.log(this);
}

playVideo.call({name: "Jacob"},1,2);
playVideo.apply({name: "Jacob"},[1,2]);
playVideo.bind({name: "Jacob"})();

playVideo();


// =============

function sumEx(...items){
    if(Array.isArray[items[0]] && items.length === 1){
        items = [...items[0]]
    }
    
    return items.reduce((a,b)=>a+b); 
}

console.log(sumEx(1));

// ==============

const circle = {
    radius: 3,
    get getAreas(){
        return this.radius * this.radius * Math.PI ;
    }
}

circle.changeRadius = 19;
console.log(circle.getAreas);
 
// ==============

let numbers = [1,2,3,4,1,1];
try{
    console.log(countOccurrences(null,1));
}catch(e){
    console.log(e);
}
function countOccurrences(array,searchElement){
    if(!Array.isArray(array)){
        throw new Error('Invalid array!')
    }
    return array.reduce((acc,currentValue) => {
        return acc + (currentValue == searchElement ? 1 : 0);
    },0);
}
