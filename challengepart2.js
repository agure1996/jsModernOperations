'use strict'

/*extension of the football challenge previously done */


/*Making game event Map object */

const gameEvents = new Map([
[17, '⚽ Goal'],
[36 ,'🔃 Substitution'],
[47 ,'⚽ Goal'],
[61 ,'🔃 Substitution'],
[64 ,'🟨 Yellow Card'],
[69 ,'🟥 Red Card'],
[70 ,'🔃 Substitution'],
[72 ,'🔃 Substitution'],
[76 ,'⚽ Goal'],
[80 ,'⚽ Goal'],
[92 ,'🟨 Yellow Card']
])



/*create array 'events' of the different game events that occur (no duplicates please) */
const events = gameEvents.values();
// const eventSet = [...new Set(events)]
// console.log(eventSet);

/*Delete 64th min*/
// gameEvents.delete(64);
// console.log(gameEvents);



const time = [...gameEvents.keys()];
const finalTime = time.pop();
// console.log(final);

/* Print 'An event happened, on average every 9 mins */
// console.log(`An event occured every ${finalTime / gameEvents.size} Minutes`);

/* how to figure out first half and second half */

for (const [min,event] of gameEvents){
    const half = min <= 45 ? `[First` : `[Second` ;
    const message = `${half} Half] -  ${min} : ${event}`;
   console.log(message);
}
