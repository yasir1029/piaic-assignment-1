var current_users = ["admin", "Yasir", "Hashim", "Saqib", "shaheed"];
// List of new usernames
var new_users = ["Alice", "Yasir", "Hashim", "dave", "frank"];
var _loop_1 = function (newUsername) {
    var isUsernameTaken = current_users.some(function (currentUsername) { return currentUsername.toLowerCase() === newUsername.toLowerCase(); });
    if (isUsernameTaken) {
        console.log("Sorry, ".concat(newUsername, " is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations, ".concat(newUsername, " is available."));
        current_users.push(newUsername.toLowerCase());
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newUsername = new_users_1[_i];
    _loop_1(newUsername);
}
