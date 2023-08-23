'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

  orderDelivery: function({starterIndex, mainIndex, time, address}){
    console.log(`Your order was received!
    Delivery will arrive at ${time} at ${address}.
    You ordered ${this.starterMenu[starterIndex]} with ${this.mainMenu[mainIndex]}.`);
  }
};




/*Destructuring an object and inputting its values
created the orderDelivery Method, refer to console output what occur and play with below object below and its method above */

restaurant.orderDelivery({
  time: '23:30',
  address:'saes rd 21',
  mainIndex: 1,
  starterIndex: 1
});

// the : is used for renaming the values for later use in console log as shown in example below
const {name: resturantName, categories: restaurantFoodCategories,openingHours: restaurantOpeningHrs,mainMenu:restaurantMainMenu} = restaurant;

// console.log(resturantName,restaurantFoodCategories,restaurantMainMenu, restaurantOpeningHrs);



//nested objects

// const {
//   fri: { open : o,close: c}} = restaurantOpeningHrs;
//   console.log(o,c);

//mutating variables examples
// let a = 234;
// let b = 123;
// const obj = { a: 23, b: 12, c: 14 };

//this is the way we destructure and reassign variables to objects that are one liners
// ({a,b } = obj)
// console.log(a,b);


/*///////////////////////////////////// */

// const arr = [2,3,4];
// const [x,y,z] = arr;
// console.log(x,y,z);

// const [first,, second] = restaurant.categories;
// console.log(first,second);
