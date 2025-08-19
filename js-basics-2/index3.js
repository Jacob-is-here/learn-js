


// factory function

function createCircle(radius) {

    return {
        radius ,// radius: radius 
        draw (){
            console.log('draw'); 
        }
    }
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

// constructor

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle3 = new Circle(1);


const painter = {
    year: 1
}

painter.color = 'blue';
painter.draw = function(){};

delete painter.color;
delete painter.draw;

// =========


let x = {value :10} ;
let y = x ;

x.value = 20;

const circlee = {
    radius: 1 ,
    draw: function(){
        console.log('draw'); // method
    }
}

for( let key of Object.keys(circlee)){
    console.log(key);
}

for( let key of Object.entries(circlee)){
    console.log(key);
}

if('radius' in circlee)console.log('yes');



// const another = {};
// for (let key in circlee){
//     another[key] = circlee[key];
// }

// const another = Object.assign({color: 'yellow'},circlee);

const another = { ... circlee}

let name = 'John';
const mail =`Hi ${name}`;
console.log(mail);


// ex 1

let address = {
    street : 'a',
    city : 'b',
    zipCode : '01-963'
}

function showAddress(address1){
    for(let index in address1){
        console.log(index,address1[index]);
    }
}

showAddress(address);
// ex 2

let address2 = {
    street : 'a',
    city : 'b',
    zipCode : '01-963'
}

function AddressConstruct(street,city,zipCode){
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}
// ex 3
let nextAdress1 = new AddressConstruct('a','b','c');
let nextAdress2 = new AddressConstruct('a','b','hh');
nextAdress1.length


function areEqual(address1,address2){
    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode;
}
console.log(areEqual(nextAdress1,nextAdress2));

function areSame(ad1 , ad2){
    return ad1 === ad2;
}

// ex 4

let blogPost = {
    title: 'new phone',
    body: 'iphoneeee',
    author: 'Thomas',
    views: 1000,
    comments: [
        { author: 'Steve', body: 'Hello'}
    ],
    isLive: true
};

// ex 5 
function NewPost(title,body,author){
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = 0,
    this.comments = [],
    this.isLive = false
}

// ex 6 

let priceRanges = [
    {label : "$", tooltip: 'cheap',minPrice: 1 , maxPrice: 10},
    {label : "$$", tooltip: 'medium',minPrice: 11 , maxPrice: 100},
    {label : "$$$", tooltip: 'expensive',minPrice: 101 , maxPrice: 1000},
]