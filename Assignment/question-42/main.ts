function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
}

var magicianNames: string[] = ["Hamoon Jaadugar", "David Copperfield", "bill batodi", "Vikraal"];

let greatMagicians: string[] = make_great(magicianNames);

console.log("Original Magicians:");
show_magicians(magicianNames);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
