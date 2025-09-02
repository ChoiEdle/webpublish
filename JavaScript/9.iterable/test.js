function replace([...array], origin, target) {
    let count = 0;
    for(item of array) {
        if(item === origin){
            array.splice(count,1,target);
        }
        count++;
    }
    return array;
}

let fruits = new Array('🍎', '🍊', '🍋', '🍏', '🍑');
let fresult = replace(fruits, '🍎', '🍇');

console.log(fruits);
console.log(fresult);
