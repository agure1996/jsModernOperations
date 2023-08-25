/**Short circuitting using && and ||, check part 7 */

/*
 * 
*/

/* Restaurant Object */
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


  console.log(
    '*_______________________________________________________________*'
  );
  
  /* ____________________________________________________________________________ */

  /*Logical Operators have 3 properties 
  
  1- They can use ANY data type
  2- They can return ANY data type
  3- They can do shortcircuiting
  
  short cirtuiting: the logical operators will look at the values as shown in the example below

  In || short circuiting
  The first value that is TRUTHY, they will choose to immediately return that first value, not even evaluating the second value
  
  falsey values include:
  ' ' - basically an empty string
  0
  false
  */
  console.log(0 || 'Abdi');

  console.log(
    '*_______________________________________________________________*'
  );
  
  /* ____________________________________________________________________________ */

  //e.g. lets try a FALSY value

  console.log(undefined|| 'Abdi');

  console.log(
    '*_______________________________________________________________*'
  );
  
  /* ____________________________________________________________________________ */

  /*In && shorcircuiting 
  
  The first FALSEY value is returned
  you can say && shortcircuits oppositely to || */
  console.log(3 && null);
  console.log(
    '*_______________________________________________________________*'
  );
  
  /* ____________________________________________________________________________ */

  /* There is also the NULLISH COALESCING OPERATOR (??) VALUE
  THE NULLISH COALESCENT OPERATOR WORKS WITH THE CONCEPT OF NULL/UNDEFINED VALUES - DUBBED NULLISH VALUES 
  AND TREATS FALSEY VALUES AS WELL. . .  VALUES
  
  as you can see below 0 will be displayed in the console as it is not seen as a nullish value*/
  console.log(null ?? 0 ?? 22);

  console.log(
    '*_______________________________________________________________*'
  );
  
  /* ____________________________________________________________________________ */

  /*Now for the logical assignment operator 

  first we will make two objects
  
  notice how much more shorthand the ||= code is compared to the = || */


  const rest1  = {
    name: 'babahar',
    seats: 20
}
  const rest2  = {
    name: 'babahar',
    Owner: 'Abdisamad'
}

//watch this . . . 

rest1.seats = rest1.seats || 25;
rest2.seats = rest1.seats || 25;

console.log(rest1);
console.log(rest2);

/* the console will check to see if seat numbers are the same for the both lines, and if not it will assign 25 seats to the object
but keep in mind rest2 does not have seats, so a seat parameter was created . . . 
{name: 'babahar', seats: 20}
script4.js:133 {name: 'babahar', Owner: 'Abdisamad', seats: 20}

NOW we can shorthand this whole process using ||=
observe below
 */

rest1.seats ||= 25;
rest2.seats ||= 25;

console.log(rest1);
console.log(rest2);

/* You will get the same answer, but this code is much shorter!!

btw we can do this with ??= but remembering the truthy and falsey values you should know what will happen if I do that.*/


console.log(
    '*_______________________________________________________________*'
  );
  
  /* ____________________________________________________________________________ */
