function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "Some message"; }
    console.log("The shirt is size ".concat(size, " and it says: \"").concat(message, "\"."));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Its too small!");
