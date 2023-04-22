
let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];
let seriesWatching=[];

seriesPending.push('The Last Of Us');

for (let i=0; i<seriesPending.length; i++){
    if (seriesPending[i]=== 'Boolean 99'){
    console.log('Found it!');
    }
    console.log(seriesPending[i]);
}

seriesWatching.push(seriesPending.shift());
console.log(seriesPending.length);
console.log(seriesWatching.length);

for (let j=0; j===4;j++){
    seriesWatching.push(seriesPending.shift());
}


seriesWatching.splice(0, seriesWatching.length);

console.log(seriesPending.length);
console.log(seriesWatching.length);
