// 1*2*3*4*5*6*7

function mutiplicationOfnumber (number){
    let result=1;
    for(let i=1; i<=number; i++){
        result= result*i;
    }
    return result;
    

}
const result=mutiplicationOfnumber(9);
console.log(result);