// fibonacci series 
// shomantoral dhara 0,1,1,2,3,5,8,13,21,34,55,89,144.......+

// fibo[3] =fibo[2] +fibo[1]
// fibo[4] =fibo[3] +fibo[2]
// fibo[5] =fibo[4] +fibo[3]
// fibo[6] =fibo[5] +fibo[4]
// fibo[7] =fibo[6] +fibo[5]
// fibo[8] =fibo[7] +fibo[6]
// fibo[9] =fibo[8] +fibo[7]
// fibo[49] =fibo[48] +fibo[47]
// fibo[487] =fibo[486] +fibo[485]
// fibo[i] =fibo[i-1] +fibo[i-2]

const fibo=[0,1];
for (let i=2; i<=25;  i++){
    fibo[i]=fibo[i-1] + fibo[i-2];
}
console.log(fibo);