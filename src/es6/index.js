function newFunction (name, age,country){
    var name=name|| 'Elio';
    var age= age|| 26;
    var country=country||'Venezuela';

    console.log(name,age,country);
}
//ES6
function newFunction2 (name= 'Elio', age=26, country='Venezuela'){
    console.log(name,age,country);   
}

newFunction();
newFunction2('Ricardo',32,'Mexico')

let hello ="Hello";
let world ="World";

let epicPhrase = hello+' '+world;
console.log(epicPhrase);

let nom="Elio";
let age= 26;

//es5
obj = {nom: nom ,age: age};
console.log(obj);

//ES6
obj2={nom, age};
console.log(obj2);

const names=[
    {nom:'Carlos', age:40},
    {nom:'Yesica', age:27}
];
let listOfNames = names.map(function(item){
    console.log(item.nom);
});
let listOfNames2= names.map(item=> console.log(item.nom));

/*const listOfNames3=(nom,age,country)=>{
    ...
}
const listOfNames4= nom=>{
    ...
}*/
const squere= num=> num* num;

const helloPromise= ()=>{
    return new Promise((resolve, reject)=> {
        if(true){
            resolve('Hey');
        }else{
            reject('salio Mal');
        }
    });
}
helloPromise()
    .then(response => console.log(response))
    .then(response => console.log("Hoola"))
    .catch(error => console.log(error));

class calculator {
    constructor(){
        this.valueA=0;
        this.valueB=0;
    }
    sum(valueA, valueB){
        this.valueA= valueA;
        this.valueB= valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2,5));

import {holi} from './modulo';
holi();

function * helloWong (){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'Wong';
    }
};

const generatorHello= helloWong();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);