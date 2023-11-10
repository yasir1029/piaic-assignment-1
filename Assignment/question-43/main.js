var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to show magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to make magicians great
function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
// Array of magician's names
var originalMagicianNames = ["Hamoon Jaadugar", "David Copperfield", "bill batodi", "Vikraal"];
// Call make_great() with a copy of the array to modify the names
var greatMagicianNames = make_great(__spreadArray([], originalMagicianNames, true));
// Call show_magicians() with each array to show the original and modified names
console.log("Original Magicians:");
show_magicians(originalMagicianNames);
console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames);
