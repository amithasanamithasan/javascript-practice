function reverseWord(str){
    const words=str.split(' ');
    const result= [];
    // i am a good booy
    for(let i = words.length-1; i>=0; i--){
        const element= words[i];

        result.push(element);
        


    }
    const reversed= result.join(' ');
    return reversed;
}
const myString='I am a good boy';
const reversed=reverseWord(myString);
console.log(reversed);
