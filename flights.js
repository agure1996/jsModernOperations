'use strict'

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';



    //Used for the code of the destination, we use slice since we dont need the rest of the number stuff above attached to the destination codes above
  const getCode = str => str.slice(0,3).toUpperCase();

  for (const flight of flights.split('+')){
  let[type,from,to,time] = flight.split(';');
  type = type.replaceAll('_',' ');
  const output = `${type.startsWith(' Delayed') ? '🔴' : '✈'}${type} from ${getCode(from)} to ${getCode(to)} - Duration: (${time.replace(':', 'h ')})`.padStart(57); //we can add padding to align the contents of the console, but thats optional, if we choose to in the future add it to the end of the string
  console.log(output);
}
  