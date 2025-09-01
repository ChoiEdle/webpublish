let numbers = [1, 2, 3, 4];
let iterator = numbers.keys();

console.log(iterator);

for(const key of iterator){
    console.log(key);
}

let n1 = [1,2,3];
let n2 = [4,5,6];
console.log(n1.concat(n2));
console.log([...n1, ...n2]);
let n3 = [100,...n1, 200, ...n2,1000];

for(item of n3){
    console.log(item);
}