function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
var magicianNames = ["Hamoon Jaadugar", "David Copperfield", "bill batodi", "Vikraal"];
var greatMagicians = make_great(magicianNames);
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
