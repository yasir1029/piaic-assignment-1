// Array of usernames
var usernames = ["admin", "Yasir", "Hashim", "Saqib", "shaheed"];
// Check if the list of users is not empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the array and print greetings
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username.toLowerCase() === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// Remove all usernames from the array
usernames = [];
// Check if the list of users is now empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
