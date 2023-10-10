const arr = [2,3, 4, 5,6];

function double(a) {
    return a*2;
}
const d= arr.map(double);

const t= arr.map((x)=>{ return x*3});

console.log(d);
console.log(t);

//filter

function greterthan4(x) {
    return x > 4;
}
console.log(arr.filter(greterthan4));
console.log(arr.filter((x)=> x % 2 == 0));

//reduce

function sumation(x) 
{
    sum=0;
    for (let index = 0; index < arr.length; index++) {
            sum = sum +     arr[index];    
    }   
return sum;
}

console.log(arr.reduce(sumation));
console.log(arr.reduce((m,c)=>{
if (c>m) {
    m = c;
}
return m;
},0));