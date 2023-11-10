// Function to store car information
function store_car_info(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): { manufacturer: string, modelName: string, [key: string]: any } {
    var carInfo: { manufacturer: string, modelName: string, [key: string]: any } = {
        manufacturer,
        modelName
    };

    // Add additional options to the carInfo object
    options.forEach(option => {
        const key = Object.keys(option)[0];
        carInfo[key] = option[key];
    });

    return carInfo;
}

// Call the function with required information and two other name-value pairs
var carInformation = store_car_info("Toyota", "Camry", { color: "Blue" }, { features: ["GPS", "Sunroof"] });

// Print the object to ensure all information was stored correctly
console.log(carInformation);
