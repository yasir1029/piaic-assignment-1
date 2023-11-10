// Array of favorite fruits
var favorite_fruits: string[] = ["banana", "apple", "mango"];

// Check for specific fruits using a for loop
function checkForFavoriteFruit(fruitToCheck: string): void {
    let isFavorite: boolean = false;

    for (let i = 0; i < favorite_fruits.length; i++) {
        if (favorite_fruits[i] === fruitToCheck) {
            isFavorite = true;
            break;
        }
    }

    if (isFavorite) {
        console.log(`You really like ${fruitToCheck}s!`);
    } else {
        console.log(`${fruitToCheck}s are not in your list of favorite fruits.`);
    }
}

// Test different fruits
checkForFavoriteFruit("banana");
checkForFavoriteFruit("apple");
checkForFavoriteFruit("mango");
checkForFavoriteFruit("orange");
checkForFavoriteFruit("strawberry");
