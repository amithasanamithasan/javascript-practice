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
console.log(DoesExist);

console.log(doesexist);