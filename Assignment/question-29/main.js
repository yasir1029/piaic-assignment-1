// Array of favorite fruits
var favorite_fruits = ["banana", "apple", "mango"];
// Check for specific fruits using a for loop
function checkForFavoriteFruit(fruitToCheck) {
    var isFavorite = false;
    for (var i = 0; i < favorite_fruits.length; i++) {
        if (favorite_fruits[i] === fruitToCheck) {
            isFavorite = true;
            break;
        }
    }
    if (isFavorite) {
        console.log("You really like ".concat(fruitToCheck, "s!"));
    }
    else {
        console.log("".concat(fruitToCheck, "s are not in your list of favorite fruits."));
    }
}
// Test different fruits
checkForFavoriteFruit("banana");
checkForFavoriteFruit("apple");
checkForFavoriteFruit("mango");
checkForFavoriteFruit("orange");
checkForFavoriteFruit("strawberry");
