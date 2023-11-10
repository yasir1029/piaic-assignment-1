let favoritePizzas: string[] = ["Supremo", "Pepperoni", "Fajita"];

console.log("Pizza Names:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

console.log("\nPizza Statements:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
