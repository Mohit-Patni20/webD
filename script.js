function checkFare() {
    let age = document.getElementById("age").value;
    let output = document.getElementById("fareOutput");
    if (age <= 19) {
        output.innerText = "You can pay child’s fare";
    } else {
        output.innerText = "You must pay the adult fare";
    }
}
function showFoodChoice() {
    let name = document.getElementById("userName").value;
    let food = document.getElementById("foodChoice").value;
    document.getElementById("foodOutput").value = name + " likes " + food;
}