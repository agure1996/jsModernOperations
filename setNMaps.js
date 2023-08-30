/* Set is a collection of UNIQUE VALUES
sets cant have duplicates */

'use strict';

const rest = new Map();
rest.set('Name', 'Abbas');
rest.set('age', 22);
rest.set(true, `It exists`);
rest.set(false, `It doesn't exist`);
rest.set(undefined, `Answer is undefined`);

/*A good use of hashmap is me making this quiz, watch */

const question = new Map([
  ['Question', 'What is the best starter language in the whole world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  [4, 'HTML/CSS'],
  ['Correct', 2],
  ['Also Correct', 3],
  [true, 'You are correct! 🎉 '],
  [false, 'Incorrect 😑'],
]);

/*

Now lets ask a question? :)

*/
const quiz = console.log(question.get('Question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'))

if(answer == question.get('Correct')) {
    console.clear();
    console.log(`${question.get(true)} , ${question.get(2)} is an EXCELLENT starter language `);
} else if(answer == question.get('Also Correct')) {
    console.clear();
    console.log(`${question.get(true)} , ${question.get(3)} is also an EXCELLENT starter language but I prefer ${question.get(2)} for a starter language to teach you how the world of coding works 😁`);
}else {
    
    {console.clear();console.log(`${question.get(false)}, I guess you're a ${question.get(Number(answer))} degen`);}
}


// a neat trick to converting map to an array using the spread operator
/**This one turns up looking like an array containing arrays */
// console.log([...question]);

/**Entries map iterator */
// console.log([...question.entries()]);
/**Keys map iterator */
// console.log([...question.keys()]);
/**Values map iterator */
// console.log([...question.values()]);

