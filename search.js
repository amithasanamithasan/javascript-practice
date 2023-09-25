const lyrics ='Tumi bondu khala Pakhi ami jano ki boshonto kale tomie bolte pari ni.shada shada kala kala';

const SearchString ='pakhi';
// const doesexist= lyrics.includes('pakhi');
// const doesexist =lyrics.includes('Pakhi')
// const doesexist = lyrics.includes(SearchString);

const lyricsLowerCase =lyrics.toLowerCase();
const searchstring =SearchString.toLowerCase();
const doesexist =lyricsLowerCase.includes(searchstring);

// const doesexist=lyricsLowerCase.includes(SearchString);
const DoesExist =lyrics.toLowerCase().includes(searchstring.toLowerCase());
// console.log(DoesExist);
// console.log(doesexist);
// ----------------------------------------
// index of found

console.log(lyrics.indexOf('khala'));
console.log(lyrics.indexOf('jano'));
//-1 na jodi hoi ..... -1 na hole amra ki bujbo jinis ta nie
if(lyrics.indexOf('shada')!== -1){

console.log('exist inside the string');

}else{
    console.log('cannot find it');
}
// startwith
// console.log(lyrics.startsWith('Tumi'));
console.log(lyrics.startsWith('2umi'));
// endwith
const fileName ='mybiodata.pdf';
const otherFile ='mypic.png';
fileName.endsWith('.png');