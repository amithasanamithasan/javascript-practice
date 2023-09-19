//  const arr=[1,2,3,4,5,6,7,8,9,10,11];

//  const odd= arr.filter(number => {
//     return number%2 !== 0;

//  });
//  console.log(odd);




//  var even= [100,22,3,44,55,66,74,673,76];

//    var result = even.filter 
//    (number =>{
//             return number % 2 === 0;
//    });
//    console.log(result);


// //   is given arrays values 1 2 3 4 5 6 7 8 9 10 11 find you odd numbers
   

//  var odd = [1,2,3,4,5,6,7,8,9,10,11,12,13];

//  var number= odd.filter (number => {

//      return number % 2 !== 0;

//  });
//  console.log(number);

// //  even number array output
//  var arr = [32,44,55,52,53,22,53,5,66,3243,63,32534];
//    var  result = arr.filter( number => {
//    return number % 2 === 0;
//    });
//    console.log(result);

  //  find  sum values  and find index every value 

   function getSumOfAnArray(number){
   let sum = 0;
     for (let i = 0; i<number.length; i++){
     const index =i;
       const element = number[index];
        sum =sum+element;
        // console.log(index,element,sum);

     }
     return sum;

  }

  function numberArrayodd(numbers){
   
    for(let i=0; i<numbers.length; i++){
      console.log(i);
       const index=i;
       const element=numbers[index];
      if(element % 2 !== 0){
        console.log('its number odd ',index,element)
      }
    
      // console.log(index,element);
    }
    
  
  }
   const MyNumbers =[12,22,65,45,78,32,45,91];
   numberArrayodd(MyNumbers);
   getSumOfAnArray(MyNumbers);


 




  // const MyNumbers =[12,65,45,78,32,45,91];
  // numberArrayodd(MyNumbers);
  // getsumarry(MyNumbers);