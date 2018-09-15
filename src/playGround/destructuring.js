const person = {
  name: "ravi",
  age: 35,
  location: {
    city: "calgary",
    temp: -1
  }
};

// const { name, age } = person;
// const { city = "canada", temp: temperature = "Too hot" } = person.location;

// console.log(`${name} is ${age} and he lives in ${city},
// temperature in ${city} is ${temperature}F `);

//

const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

// nested object
const {
  title,
  author,
  publisher: { name: publisherName = "self-published" }
} = book;

console.log(title, author, publisherName);

// nested arrays

const menu = ["coffee(hot)", ["$1", "$2", "$3", ["a", "b", "c"]]];
const [item, [small, medium, large, [A, B, C]]] = menu;

console.log(`A medium ${item} is for ${medium} ${A} ${B} ${C}`);
