// Function to show magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Function to make magicians great
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
}

// Array of magician's names
var originalMagicianNames: string[] = ["Hamoon Jaadugar", "David Copperfield", "bill batodi", "Vikraal"];

// Call make_great() with a copy of the array to modify the names
let greatMagicianNames: string[] = make_great([...originalMagicianNames]);

// Call show_magicians() with each array to show the original and modified names
console.log("Original Magicians:");
show_magicians(originalMagicianNames);

console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames);
