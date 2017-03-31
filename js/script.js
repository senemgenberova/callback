var circle = document.getElementById("circle");
var img = document.getElementById("img");
var n = Number(prompt("Enter seconds"));

circle.addEventListener("click", function() {
    border(boyut);
})

function border(callback) {
    circle.style.border = "5px solid #0078D7";
    callback();

}

function boyut() {
    setTimeout(function() {
        img.style.width = "235px";
        img.style.transition = "all 1s ease-in-out";
        circle.style.border = "none";
    }, n * 1000);
}