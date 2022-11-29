var nums = [ 1, 1, 2, 3, 5, 8 ];
nums.push(13);
console.log(nums);
nums.pop();
console.log(nums);
nums.shift();
console.log(nums);
nums.sort();
console.log(nums);


const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits);

const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruit.slice(1);
console.log(fruit);