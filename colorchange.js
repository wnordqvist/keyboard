
//Function for when a key is pressed.
document.addEventListener('keydown', function (event) {
    console.log(event.code);

    document.getElementById(event.code).classList.add("pressed-button");
});
// Function for when key is released
document.addEventListener('keyup', function(event) {
    console.log(event.code);
    
    document.getElementById(event.code).classList.remove("pressed-button");
});
