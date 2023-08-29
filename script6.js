/**Looping Objects: Object keys, Values and entries
 * 
 * we did for-of loops to loop through arrays
 * 
 * we can also loop through objects in an indirect way, for this lesson will try that now
 */
'use strict';

/*created days to be used for opening hrs and inputted them into the opening hrs day, destructuring days array to select the value relative to the day the restaurant is open */
const days = ['mon','tue','wed','thu','fri','sat','sun'];


/*Removed and placed opening hrs seperate object*/

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

/*
 Looping over Object property names, also called keys
 */

//  for (const day of Object.keys(openingHours)) console.log(day);

 //lets look at properties of object.keys

 const properties = Object.keys(openingHours)
//  console.log(properties);

 /** Remember:Distinction between the array and the object is important as we loop over the entire object */
 

 //Object.property value
 const values = Object.values(openingHours);
//  console.log(values);

 //Object.property value
 const entries = Object.entries(openingHours);
//  console.log(entries);

/*now lets do Key.value pairs

key = day in opening hrs
value -> deconstructred into open and close values*/


  for (const [day , {open,close:closed}] of entries){
    console.log(`On ${day} we are open at : ${open} and close at ${closed} hrs `);
  } 
