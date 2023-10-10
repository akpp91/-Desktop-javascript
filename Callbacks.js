setTimeout(function time(params) {
    console.log("timer");
},5000)

function x(y) {
    console.log("logging x");
    y()
}

x(function y(params) {
    console.log("logging y");
})

