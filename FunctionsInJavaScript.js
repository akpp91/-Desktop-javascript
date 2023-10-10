a();
b();
function a() {
    var a=3;
console.log(a);    
}

//named functional expression
var b =function named() {
    console.log(b);    
}

function named(a , b) //parameters
{
    console.log(b);    
}

named(a,b)// a,b arguments