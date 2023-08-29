const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Parvard',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goeretzka',
      'Coman',
      'Muller',
      'Gnabry',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Goetze',
    ],
  ],
  Score: '4:0',
  Scored: ['Lewandowski', 'Gnabry', 'Muller', 'Hummels', 'Lewandowski'],
  date: 'Nov 6th, 2025',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Part 1 of the coding challenge

/* Lets get the two player list of the teams, destructuring players since they in arrays :) */
// const [players1, players2] = game.players;

// console.log(players1, players2);

/*Now lets seperate out gk from the field players S*/
// const [Bgk, ...BfieldPlayers] = players1;
// console.log(
//   `Bayern goalkeeper: ${Bgk} , the rest of the team:  ${BfieldPlayers}`
// );

// const [Dgk, ...DfieldPlayers] = players2;
// console.log(
//   `Dortmund goalkeeper: ${Dgk} , the rest of the team:  ${DfieldPlayers}`
// );

/*Now lets put all the players of both teams into one array so we can list them all */
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

/*Now lets get the game odds
    
    *const { odds } = game;*
    
    we will further destructure odds as shown below and change value names

*/

// const {
//   odds: { team1: bayern, x: draw, team2: dortmund },
// } = game;

/*Now lets print the goals
we will print the goals that were scored by which players
*/
// const playerList = game.Scored
// const goalsScored = function (...players){
//     console.log(`${players.length} goals were scored`);

//     console.log(`The following Goalscorers: ` , playerList);
// }
// goalsScored(...playerList);

/*Now lets look at which team is likely to win
the rule is the team with the lower odds is more likely to win

we will practise the coalescing operators we know

remember what the TRUTHY, FALSEY AND NULLISH COALESCING OPERATORS DO!!
*/

// bayern < dortmund && console.log('Bayern is more likely to win')
// dortmund < bayern && console.log('Dortmund is more likely to win');

/*Part 2 of the coding challenge */

//get the averages
// const scorers = game.Scored.entries()
// for([i,player] of scorers){
//   console.log(`Goal #${i + 1} is scored by ${player}`);
// }

//calculate the average odds
// let avg = 0;
// const gameodds = Object.values(game.odds);
// for (let odd of gameodds) avg += odd; avg /= gameodds.length;
// console.log(Math.round(avg));


/*get the team and their odds */
 
for( const [team,odd] of Object.entries(game.odds)){

  /*first part of the string is a tertiary operator to find out if we  */
  const teamStr = team === 'x' ? 'a Draw' : `${game[team]} winning`

  console.log(`Chances of ${teamStr} is ${odd} `);
}