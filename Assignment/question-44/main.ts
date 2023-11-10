function order_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected. Please add items to your sandwich.");
        
    } else {
        console.log(`You ordered a sandwich with: ${items.join(', ')}.`);
        console.log("Enjoy your sandwich!\n");
    }
}

order_sandwich("Turkey", "Cheese", "Lettuce", "Tomato");
order_sandwich("Onions", "Sauce");
order_sandwich();
