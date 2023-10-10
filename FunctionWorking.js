var a = 4;
b();
c();
console.log(a);
function b(params) {
    debugger;
    var a= 10;
    console.log(a);
}

function c(params) {
    debugger;
    var a =100;
    console.log(a);
}