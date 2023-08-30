'use strict';


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Your order was received!
    Delivery will arrive at ${time} at ${address}.
    You ordered ${this.starterMenu[starterIndex]} with ${this.mainMenu[mainIndex]}.`);
  },

  orderPasta: function(ing1,ing2,ing3){

    /*const ingredient1 = prompt('type ingredient 1:')
    const ingredient2 = prompt('type ingredient 2:')
    const ingredient3 = prompt('type ingredient 3:')
    
    console.log(`We shall make pasta, the following ingredients are required:
    
    ${ingredient1}, ${ingredient2} & lastly ${ingredient3}`);

    we can instead also make an array of prompts taking the three ingredients then we can use the spread operator as shown below
    */

    
    console.log(`We shall make pasta, the following ingredients are required: ${ing1}, ${ing2} & ${ing3}`)

  }
};

const ingredients =[
  prompt("Ingredient 1"),
  prompt("Ingredient 2"),
  prompt("Ingredient 3"),

]
// restaurant.orderPasta(...ingredients);
/* _____________________________________ */
/*Destructuring an object and inputting its values
created the orderDelivery Method, refer to console output what occur and play with below object below and its method above */

// restaurant.orderDelivery({
//   time: '23:30',
//   address: 'saes rd 21',
//   mainIndex: 1,
//   starterIndex: 1,
// });

// the : is used for renaming the values for later use in console log as shown in example below (mutation of value names)
// const {
//   name: resturantName,
//   categories: restaurantFoodCategories,
//   openingHours: restaurantOpeningHrs,
//   mainMenu: restaurantMainMenu,
// } = restaurant;

/* _____________________________________ */

/* Now to use default empty arrays to display content of the existing array if the array of menu is empty (if no menu property exists) then we get empty array, this is a nice way of setting default value, good for when we doing have hardcoded data available so we set defaults

for startermenu we mutated the name of the object as shown below*/

// const { menu: mains = [], starterMenu: starters = [] } = restaurant;

// console.log(starters, mains);


/* _____________________________________ */


// console.log(resturantName,restaurantFoodCategories,restaurantMainMenu, restaurantOpeningHrs);

//nested objects

// const {
//   fri: { open : o,close: c}} = restaurantOpeningHrs;
//   console.log(o,c);

//mutating variables examples
// let a = 234;
// let b = 123;
// const obj = { a: 23, b: 12, c: 14 };
/* _____________________________________ */

//this is the way we destructure and reassign variables to objects that are one liners
// ({a,b } = obj)
// console.log(a,b);

/* _____________________________________ */

// const arr = [2,3,4];
// const [x,y,z] = arr;
// console.log(x,y,z);

// const [first,, second] = restaurant.categories;
// console.log(first,second);

/* _____________________________________ */