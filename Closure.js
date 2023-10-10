function x() {
  let  A= 3;
  function Y() {
    console.log(' '+A);
  }  
  return Y;

};

var a = x();

console.log(a);

a();