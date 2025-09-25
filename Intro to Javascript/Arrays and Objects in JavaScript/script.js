//Arrays And Objects In JavaScript

// 1. Arrays
let fruits = ["Apple", "Banana", "Cherry"];

//2.Objects
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Common Array Methods

//push(), pop(), shift(), unshift(), concat(), join(),
//  slice(), splice(), indexOf(), lastIndexOf(), forEach(),
//  map(), filter(), reduce(), find(), findIndex()

// 1. push() - Adds one or more elements to the end of an array

let numbers = [1, 2, 3];
numbers.push(4, 5, 6, 7, 8, 9, 0); // numbers is now [1, 2, 3, 4, 5, 6]
console.log("Push array method", numbers);

let boys = ["John", "Mike", "Tom"];
boys.push("Sam", "Alex", "James", "Moses"); // boys is now ["John", "Mike", "Tom", "Sam", "Alex"]
console.log("Push array method", boys);

let items = [];
items.push("Book", "Pen", "Notebook");
console.log(items); // items is now ["Book", "Pen", "Notebook"]

//complex example
let shoppingItem = [
  {
    name: "Laptop",
    price: 1000,
    quantity: 1,
  },
  {
    name: "Phone",
    price: 500,
    quantity: 2,
  },
];
shoppingItem.push({
  name: "Tablet",
  price: 300,
  quantity: 1,
});
console.log(shoppingItem);

let students = [
  (class1 = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
  ]),
  (class2 = [
    { name: "Charlie", age: 21 },
    { name: "David", age: 23 },
  ]),
];
students.push(
  (class3 = [
    { name: "Eve", age: 19 },
    { name: "Frank", age: 24 },
  ])
);
console.log(students);
students[0].push({ name: "Eve", age: 19 });
students[1].push({ name: "Frank", age: 24 }, { name: "Grace", age: 22 });
console.log(students);

// 2. pop() - Removes the last element from an array and returns it

let colors = ["Red", "Green", "Blue"];
let lastColor = colors.pop(); // lastColor is "Blue"
console.log(colors); // Output: ["Red", "Green"]
console.log("The last color is", lastColor); // Output: Blue

let numbersArray = [10, 20, 30, 40];
let lastNumber = numbersArray.pop(); // lastNumber is 40
console.log(numbersArray); // Output: [10, 20, 30]
console.log("The last number is", lastNumber); // Output: 40

let emptyArray = [];
let removedElement = emptyArray.pop(); // removedElement is undefined
console.log(emptyArray); // Output: []
console.log("Removed element from empty array:", removedElement); // Output: undefined

//complex example
let shoppingCart = [
  { item: "Shirt", price: 20 },
  { item: "Pants", price: 30 },
  { item: "Shoes", price: 50 },
];
let lastItem = shoppingCart.pop(); // lastItem is { item: "Shoes", price: 50 }
console.log(shoppingCart); // Output: [{ item: "shapeImageThreshold: "Shirt", price: 20 }, { item: "Pants", price: 30 }]
console.log("Last item in the cart:", lastItem); // Output: { item: "Shoes", price: 50 }

// 3. shift() - Removes the first element from an array and returns it

let classItems = [-1, 0, 10, 20, 30, 40];
let firstItem = classItems.shift(); // firstItem is 0
console.log(classItems); // Output: [10,20, 30, 40]
console.log("The first shift  item is", firstItem); // Output: 10

let names = ["Alice", "Bob", "Charlie"];
let firstName = names.shift(); // firstName is "Alice"
console.log(names); // Output: ["Bob", "Charlie"]
console.log("The first shift  name is", firstName); // Output: Alice

let emptyList = [];
let removedFromEmpty = emptyList.shift(); // removedFromEmpty is undefined
console.log(emptyList); // Output: []
console.log("Removed from empty list:", removedFromEmpty); // Output: undefined

//complex example
let todoList = [
  { task: "Buy groceries", completed: false },
  { task: "Clean the house", completed: true },
  { task: "Pay bills", completed: false },
];
let firstTask = todoList.shift(); // firstTask is { task: "Buy groceries", completed: false }
console.log(todoList); // Output: [{ task: "Clean the house", completed: true }, { task: "Pay bills", completed: false }]
console.log("First task in the list:", firstTask); // Output: { task: "Buy groceries", completed: false

// 4. unshift() - Adds one or more elements to the beginning of an array

let numbersList = [2, 3, 4];
numbersList.unshift(-1, 0, 1); // numbersList is now [0, 1, 2, 3, 4]
console.log("Number list", numbersList);

let letters = ["B", "C", "D"];
letters.unshift("A"); // letters is now ["A", "B", "C", "D"]
console.log(letters);

let emptyArray2 = [];
emptyArray2.unshift("First Element", "Second Element"); // emptyArray2 is now ["First Element","Second Element"]
console.log(emptyArray2); // Output: ["First Element","Second Element"]

//complex example
let shoppingList = [
  { item: "Milk", quantity: 2 },
  { item: "Eggs", quantity: 12 },
];
shoppingList.unshift({ item: "Bread", quantity: 1 }); // shoppingList is now
// [{ item: "Bread", quantity: 1 }, { item: "Milk", quantity: 2 }, { item: "Eggs", quantity: 12 }]
console.log(shoppingList);

// 5. concat() - Merges two or more arrays and returns a new array

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2); // combinedArray is [1, 2, 3, 4, 5, 6]
console.log("Concat array method", combinedArray);

let arrayA = ["A", "B"];
let arrayB = ["C", "D"];
let arrayC = ["E", "F"];

let mergedArray = arrayA.concat(arrayB, arrayC); // mergedArray is ["A", "B", "C", "D"]
console.log(mergedArray);

let arrayX = [0];
let arrayY = [1, 2, 3];
let resultArray = arrayX.concat(arrayY); // resultArray is [1, 2, 3]
console.log(resultArray); // Output: [1, 2, 3]

//funny example
let arrayFunny1 = ["Hello"];
let arrayFunny2 = { name: "World" };
let funnyCombined = arrayFunny1.concat(arrayFunny2); // funnyCombined is ["Hello", {name: "World"}]
console.log("Funny exmple", funnyCombined); // Output: ["Hello", {name: "World"}]

//complex example
let shoppingCart1 = [
  { item: "Laptop", price: 1000 },
  { item: "Phone", price: 500 },
];
let shoppingCart2 = [
  { item: "Tablet", price: 300 },
  { item: "Headphones", price: 100 },
];
let combinedCart = shoppingCart1.concat(shoppingCart2); // combinedCart is now
// [{ item: "Laptop", price: 1000 }, { item: "Phone", price: 500 }, { item: "Tablet", price: 300 }, { item: "Headphones", price: 100 }]
console.log(combinedCart);

// 6. join() - Joins all elements of an array into a string

let arrayToJoin = ["Hello", "World"];
let joinedString = arrayToJoin.join(" "); // joinedString is "Hello World"
console.log("Joined array", joinedString); // Output: "Hello World"

let numbersToJoin = [1, 2, 3, 4];
let joinedNumbers = numbersToJoin.join(". "); // joinedNumbers is "1, 2, 3, 4"
console.log(joinedNumbers); // Output: "1,

let emptyArray3 = [];
let joinedEmpty = emptyArray3.join(", "); // joinedEmpty is ""
console.log(joinedEmpty); // Output: ""

//complex example
let shoppingList2 = [
  { item: "Apples", quantity: 5 },
  { item: "Bananas", quantity: 3 },
  { item: "Oranges", quantity: 4 },
];
let joinedShoppingList = shoppingList2
  .map((items) => `${items.item} (${items.quantity})`)
  .join(", "); // joinedShoppingList is "Apples (5), Bananas (3), Oranges (4)"
console.log(joinedShoppingList); // Output: "Apples (5), Bananas (3), Oranges (4)"

//7. slice() - Returns a shallow copy of a portion of an array into a new array object , without modifying the original array. the end index is not included in the slice.

let originalArray = [1, 2, 3, 4, 5];
let slicedArray = originalArray.slice(1, 4); // slicedArray is [2, 3, 4]
console.log("Sliced number array", slicedArray); // Output: [2, 3, 4]
console.log("Original number array", originalArray); // Output: [1, 2, 3, 4, 5]

let lettersArray = ["A", "B", "C", "D", "E"];
let slicedLetters = lettersArray.slice(0, 3); // slicedLetters is ["A", "B", "C"]
console.log("Sliced letter array", slicedLetters); // Output: ["A", "B", "C"]
console.log("Original letter array", lettersArray); // Output: ["A", "B", "C", "D", "E"]

let emptyArray4 = [];
let slicedEmpty = emptyArray4.slice(0, 2); // slicedEmpty is []
console.log(slicedEmpty); // Output: []

//complex example
let shoppingCart3 = [
  { item: "Shirt", price: 20 },
  { item: "Pants", price: 30 },
  { item: "Shoes", price: 50 },
  { item: "Hat", price: 15 },
];
let slicedCart = shoppingCart3.slice(1, 3); // slicedCart is [{ item: "Pants", price: 30 }, { item: "Shoes", price: 50 }]
console.log(slicedCart); // Output: [{ item: "Pants", price: 30 }, { item: "Shoes", price: 50 }]

// 8. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// syntax : array.splice(start, deleteCount, item1, item2, ...)

let Cars = [1, 2, 3, 4, 5];
Cars.splice(2, 2, "A", "B"); // Cars is now [1, 2, "A", "B", 5]
console.log("Spliced number array", Cars); // Output: [1, 2, "A", "B", 5]

let lettersArray2 = ["A", "B", "C", "D", "E"];
lettersArray2.splice(1, 2, "X", "Y"); // lettersArray2 is now ["A", "X", "Y", "D", "E"]
console.log("Spliced letter array", lettersArray2); // Output: ["A", "X", "Y", "D", "E"]

let emptyArray5 = [];
emptyArray5.splice(0, 0, "First Element", "Second Element"); // emptyArray5 is now ["First Element", "Second Element"]
console.log("Spliced empty array", emptyArray5); // Output: ["First Element", "Second Element"]

//complex example
let shoppingCart4 = [
  { item: "Shirt", price: 20 },
  { item: "Pants", price: 30 },
  { item: "Shoes", price: 50 },
];
shoppingCart4.splice(1, 1, { item: "Hat", price: 15 }); // shoppingCart4 is now [{ item: "Shirt", price: 20 }, { item: "Hat", price: 15 }, { item: "Shoes", price: 50 }]
console.log("Spliced shopping cart", shoppingCart4); // Output: [{    item: "Shirt", price: 20 }, { item: "Hat", price: 15 }, { item: "Shoes", price: 50 }]

// 9. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.

let numbersArray2 = [1, 2, 3, 4, 5];
let index = numbersArray2.indexOf(3); // index is 2
console.log("Index of 3 in numbers array", index); // Output: 2

let lettersArray3 = ["A", "B", "C", "D", "E"];
let indexOfC = lettersArray3.indexOf("E"); // indexOfC is 4
console.log("Index of E in letters array", indexOfC); // Output: 4

let emptyArray6 = [];
let indexInEmpty = emptyArray6.indexOf("Element"); // indexInEmpty is -1
console.log("Index in empty array", indexInEmpty); // Output: -1

//complex example
let shoppingCart5 = [
  { item: "Shirt", price: 20 },
  { item: "Pants", price: 30 },
  { item: "Shoes", price: 50 },
];
let indexOfPants = shoppingCart5.findIndex((item) => item.item === "Pants"); // indexOfPants is 1
console.log("Index of Pants in shopping cart", indexOfPants); // Output: 1

// 10. lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not present.

let numbersArray3 = [1, 2, 3, 4, 5, 3];
let lastIndex = numbersArray3.lastIndexOf(3); // lastIndex is 5
console.log("Last index of 3 in numbers array", lastIndex); // Output: 5

let lettersArray4 = ["A", "B", "C", "D", "C", "E", "C"];
let lastIndexOfC = lettersArray4.lastIndexOf("C"); // lastIndexOfC is 5
console.log("Last index of C in letters array", lastIndexOfC); // Output: 5

let emptyArray7 = [];
let lastIndexInEmpty = emptyArray7.lastIndexOf("Element"); // lastIndexInEmpty
// is -1
console.log("Last index in empty array", lastIndexInEmpty); // Output: -1

//complex example
let shoppingCart6 = [
  { item: "Shirt", price: 20 },
  { item: "Pants", price: 30 },
  { item: "Shoes", price: 50 },
  { item: "Pants", price: 25 },
];
let lastIndexOfPants = shoppingCart6.findLastIndex(
  (item) => item.item === "Pants"
); // lastIndexOfPants is 3
console.log("Last index of Pants in shopping cart", lastIndexOfPants); // Output: 3

// 11. forEach() - Executes a provided function once for each array element.

let numbersArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbersArray4.forEach((number, index) => {
  console.log(`Index: ${index}, Value: ${number}`);
});
// Output:
// Index: 0, Value: 1
// Index: 1, Value: 2
// Index: 2, Value: 3
// Index: 3, Value: 4
// Index: 4, Value: 5

let lettersArray5 = ["A", "B", "C", "D", "E"];
lettersArray5.forEach((letter, index) => {
  console.log(`Index: ${index}, Value: ${letter}`);
});
// Output:
// Index: 0, Value: A
// Index: 1, Value: B
// Index: 2, Value: C
// Index: 3, Value: D
// Index: 4, Value: E

let emptyArray8 = [];
emptyArray8.forEach((element, index) => {
  console.log(`Index: ${index}, Value: ${element}`);
}); // No output, as the array is empty

//complex example
let shoppingCart7 = [
  { name: "Shirt", price: 20 },
  { name: "Pants", price: 30 },
  { name: "Shoes", price: 50 },
];
shoppingCart7.forEach((item, index) => {
  console.log(`Index: ${index}, Item: ${item.name}, Price: ${item.price}`);
});
// Output:
// Index: 0, Item: Shirt, Price: 20
// Index: 1, Item: Pants, Price: 30
// Index: 2, Item: Shoes, Price: 50

// 12. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.

//syntax: array.map(callback(currentValue, index, array) , thisArg)

let numbersArray5 = [1, 2, 3, 4, 5];
let squaredNumbers = numbersArray5.map((number) => number * number); // squaredNumbers is [1, 4, 9, 16, 25]
console.log("Squared numbers array", squaredNumbers); // Output: [1, 4, 9, 16, 25]

let lettersArray6 = ["A", "B", "C", "D", "E"];
let upperCaseLetters = lettersArray6.map((letter) =>
  letter.toLocaleLowerCase()
); // upperCaseLetters is ["A", "B", "C", "D", "E"]
console.log("Uppercase letters array", upperCaseLetters); // Output: ["A", "B", "C", "D", "E"]

let emptyArray9 = [];
let mappedEmpty = emptyArray9.map((element) => element * 2); // mappedEmpty is []
console.log("Mapped empty array", mappedEmpty); // Output: []

//complex example
let shoppingCart8 = [
  { name: "Shirt", price: 20 },
  { name: "Pants", price: 30 },
  { name: "Shoes", price: 50 },
];
let itemNames = shoppingCart8.map((item) => [item.name, `${item.price}`]); // itemNames is ["Shirt", "Pants", "Shoes"]
console.log("Item names in shopping cart", itemNames); // Output: ["Shirt", "Pants", "Shoes"]
console.log("Item prices in shopping cart", shoppingCart8); // Output: ["20", "30", "50"]

//filter() - Creates a new array with all elements that pass the test implemented by the provided function.
//syntax: array.filter(callback(currentValue, index, array) , thisArg)

let numbersArray6 = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = numbersArray6.filter((number) => number % 2 === 0); // evenNumbers is [2, 4,6,8]
console.log("Even numbers array", evenNumbers); // Output: [2, 4,6,8]

let lettersArray7 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
];
let vowels = lettersArray7.filter((letter) =>
  ["A", "E", "I", "O", "U"].includes(letter)
); // vowels is ["A", "E"]
console.log("Vowels in letters array", vowels); // Output: ["A", "E"]

let emptyArray10 = [];
let filteredEmpty = emptyArray10.filter((element) => element > 0); // filteredEmpty is []
console.log("Filtered empty array", filteredEmpty); // Output: []

//complex example
let shoppingCart9 = [
  { name: "Shirt", price: 20 },
  { name: "Pants", price: 30 },
  { name: "Shoes", price: 50 },
  { name: "Hat", price: 15 },
  { name: "Socks", price: 100 },
];
let expensiveItems = shoppingCart9.filter((item) => item.price > 25); // expensiveItems is [{ item: "Pants", price: 30 }, { item: "Shoes", price: 50 }]
console.log("Expensive items in shopping cart", expensiveItems); // Output: [{ item: "Pants", price: 30 }, { item: "Shoes", price: 50 }]
