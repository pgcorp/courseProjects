const  { readFileSync, writeFileSync } = require('fs');
console.log('Start');
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

//un usuario puede ocupar el proceso y suelta hasta que termina
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`,{ flag: 'a' });
console.log('Done with this task');
console.log('starting the next one');
