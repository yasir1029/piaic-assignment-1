function make_shirt(size: string = "Large", message: string = "Some message"): void {
    console.log(`The shirt is size ${size} and it says: "${message}".`);
}

make_shirt();

make_shirt("Medium");

make_shirt("Small", "Its too small!");
