const lyrics ='Tumi bondu khala Pakhi ami jano ki.boshonto kale tomie bolte pari ni.shada shada kala kala';
// shob word alada alda kore output dibe 
const parts =lyrics.split(' ');
// shob sentance er dot er por sentance gula part by part sentances dekhabe
const parts1 =lyrics.split('.');
// every letter indevisual output dekha be
const parts2 =lyrics.split('');


// substring or slice array index every letter found 5b 6o 7n index not 8 found bcz thats rule 
const parts3 =lyrics.slice(5, 8)
console.log(parts);
console.log(parts1);
console.log(parts2);
console.log(parts3);


const lines =['Tumi bondu khala Pakhi ami jano ki',
'boshonto kale tomie bolte pari ni',
'shada shada kala kala'];

const  newSong = lines.join('. ');
console.log(newSong); 






