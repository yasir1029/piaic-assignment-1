let current_users: string[] = ["admin", "Yasir", "Hashim", "Saqib", "shaheed"];

// List of new usernames
let new_users: string[] = ["Alice", "Yasir", "Hashim", "dave", "frank"];

for (let newUsername of new_users) {
    let isUsernameTaken: boolean = current_users.some(
        (currentUsername) => currentUsername.toLowerCase() === newUsername.toLowerCase()
    );

    if (isUsernameTaken) {
        console.log(`Sorry, ${newUsername} is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations, ${newUsername} is available.`);
        current_users.push(newUsername.toLowerCase());
    }
}
