/**REST Pattern - 1hr mark part 7 */

/**Steps to what we did beneath the restaurant object.
 * 1st part Destructuring
 * 2nd part is functions */
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

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log('Main ingredient required is:' , mainIngredient);
    console.log('the rest of the stuff is:' , otherIngredients);
  }
};

/*Spread operators are done on the left side of assignment operator
REST pattern collects elements unused in the restructuring assignment, the three dots can be done on either side of the array */

/*
This is a SPREAD operator remove the ... to see the difference
*/
const arr = [1, 2, ...[3, 4]];
console.log(arr);
console.log(
  '*_______________________________________________________________*'
);

/* 
The ... after the b is a use of a REST Parameter
Also there can only be one REST element which can only be at the end of the array
*/
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a, b);
console.log(others);
console.log(
  '*_______________________________________________________________*'
);

/* ____________________________________________________________________________ */

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(risotto, pizza, otherFood);
console.log(
  '*_______________________________________________________________*'
);

/* ____________________________________________________________________________ */

const { sat, ...weekdays } = { ...restaurant.openingHours };
console.log(sat, weekdays);

console.log(
  '*_______________________________________________________________*'
);

/* ____________________________________________________________________________ */

/*
Now to show why we use spread or rest operators 
a simple example such as adding stuff
*/

/*
Created addition to take in a spread operator
By taking in the spread operator as a value
It does not matter if one single value or a bunch of values is added
The answer
*/
const addition = (...numbers) => {
  let sum = 0;
  numbers.forEach(number => {
    sum = +number;
    console.log(sum);
  });
};

let x = [12, 123, 142, 1421, 12312];
addition(...x);

console.log(
    '*_______________________________________________________________*'
  );
  
  /* ____________________________________________________________________________ */

/*Using the knowledge we know lets create this orderPizza function refer to the first comma and how its read on the console  */

restaurant.orderPizza('mushroom', 'egg','banana','red olives', 'macarrel')

console.log(
    '*_______________________________________________________________*'
  );
  
  /* ____________________________________________________________________________ */