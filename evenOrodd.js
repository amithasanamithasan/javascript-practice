function isEven(number)
{
    const remainder= number % 2;
    // console.log(remainder);
    if (remainder === 0)
    {
        // console.log('number is even');
        return false;
    }else{
        // console.log('number is odd');
            return true;
    }

}
//  isEven(303)
 
 const mynumbariseven = isEven(303);
 console.log(mynumbariseven);
 const mynumberisodd= isEven(1280);
 console.log(mynumberisodd);


