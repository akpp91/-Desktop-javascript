

setTimeout(function removeClass() {
    // Get the element by its ID
    var element = document.getElementById("first");

    // Use classList.remove() to remove the class
    element.classList.remove("myClass");
}, 3000)

let a = document.getElementById("btn");

a.addEventListener('click',function al(params) {
    console.log(params);
    alert("alert is executed");
})