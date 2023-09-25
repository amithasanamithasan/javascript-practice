



// array find index loop find max numbers

 const numbers = [122, 345, 678, 996, 433, 78865];
  let largest = numbers[0];  
//Assume the first element is the largest initially

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log("The largest number is:", largest);
// funcation use this max element

function maxArray(num){

    let largest =num[0];

    for(let i=0; i<num.length;i++)
    {
        const index =i;
        const element = num[index];
        if(element>largest)
        {
            largest=element;
         
            
        }
        return largest;
    }
}

const max =[167,190,120,165,137,265];
const total= maxArray(max);
console.log('tallest person is',total);