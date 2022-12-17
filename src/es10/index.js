let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

let array2 =[1,2,3,4,5];

//En la siguiente linea: FlatMap multiplica cada elemento del array por * 2 y lo coloca junto a su elemento padre. Generando un array con el doble de tamaño.
console.log(array2.flatMap(value =>[value, value * 2]));

let hello = '       Hello World';
console.log(hello);
console.log(hello.trimStart());

let hello1 = 'Hello World       ';
console.log(hello1);
console.log(hello1.trimEnd());

try {
    
} catch {
    error
}

let entries = [["name", "Elio"],["age", 26]];
console.log(Object.fromEntries(entries));

let mySymbl = 'My Symbl';
let symbol = Symbol(mySymbl);
console.log(symbol.description);