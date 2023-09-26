   //   ulta reverse
 function reverseString(text){
  
       for (let i=text.length-1; i>= 0;  i--) 
      for (let i =0; i<text.length ; i++)
     {
         const element =text[i];
         console.log(element);

     }
  }
  const myString='I am a bad boy';

  const reversed=reverseString(myString);

//    ulta revased string nich thake start hobe
 function ultarevarsed (input){
     for(let i = input.length-1; i>=0; i--){
         const elements=input[i];
         console.log(elements);

     }
 }
 const string='i have done this work';
 const revarse=ultarevarsed(string);
 console.log(revarse);

//   one letter  + one letter +one letter = full word

function oneletter(num){
    let revased='';
    // for (let i=num.length-1; i>=0; i--)
    for(let i=0; i<num.length;i++)
    {
        const elem = num[i];
        revased=revased+elem;
        console.log(elem, revased);
    }
    return revased;
}
const mystring='i love in bangladesh';
const revased=oneletter(mystring);
console.log(revased);