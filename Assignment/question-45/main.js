// Function to store car information
function store_car_info(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Add additional options to the carInfo object
    options.forEach(function (option) {
        var key = Object.keys(option)[0];
        carInfo[key] = option[key];
    });
    return carInfo;
}
// Call the function with required information and two other name-value pairs
var carInformation = store_car_info("Toyota", "Camry", { color: "Blue" }, { features: ["GPS", "Sunroof"] });
// Print the object to ensure all information was stored correctly
console.log(carInformation);
