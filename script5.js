'use strict';

/*we will use object literal, a es6 function where you can call an object 

e.g. we will remove openinghours from the restaurant object and make it a seperate const object, then type openinghours in the bottom of the restaurant object, by doing this we have inputted the openinghours object into the restaurant object*/


//just destructured an array i made below and used it in restaurant opening hrs
const days = ['mon','tue','wed','thu','fri','sat','sun'];


//removed and placed opening hrs seperate object

const openingHours = {
    
    
  [days[3]]: {
    open: 12,
    close: 22,
  },
  [days[4]]: {
    open: 11,
    close: 23,
  },
  [days[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

/* Restaurant Object*/
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  /*As you can see in order and orderdelivery, i removed the : & function showing that this is a new
  object literal format you can shorthand write methods in es6 */
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(`Your order was received!
        Delivery will arrive at ${time} at ${address}.
        You ordered ${this.starterMenu[starterIndex]} with ${this.mainMenu[mainIndex]}.`);
  },
  //personally though I like arrow funcs
  orderPizza: (mainIngredient, ...otherIngredients) => {
    console.log('Main ingredient required is:', mainIngredient);
    console.log('the rest of the stuff is:', otherIngredients);
  },
  //we now just write the name of the object which brings openinghours into the restaurant object
  openingHours,
};

//compare the ?? && and ||, look at if the values were null, false or true  jason sschmedtman part 7 - 2:34:27
console.log(restaurant.order?.(0,1)?? 'Method doesnt exist');
console.log(restaurant.orders?.(0,1)&& 'Method doesnt exist');
console.log(restaurant.orders?.(0,1)|| 'Method doesnt exist');

/*for of function, used to iterate through something that holds multiple values and produce the value individually, 
look at how category values come out in the console
*/


// for (const day of days) {
// //   console.log(day);



//  const open = openingHours[day]?.open ?? 'we are closed, sorry!';
 
//     console.log(`for ${day} if open it is at ${open} `);

// }

console.log(
  '*_______________________________________________________________*'
);
