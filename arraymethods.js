let num = [2 ,1 , 3, 8,5 ,9] ;
let splicen = [3,2,1,4,5,6];

let s =num.splice(2,3, 88,6, 8, 0,8);

console.log(s);
console.log(num);

console.log(splicen.slice(3));

splicen.forEach( (item) =>
console.log(item * item));


    let mapped = num.map(value => {
        return value * value;
    }) 

    console.log(mapped);