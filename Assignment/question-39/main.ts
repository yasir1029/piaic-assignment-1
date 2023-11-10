function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

var result1: string = city_country("Lahore", "Pakistan");
var result2: string = city_country("Tokyo", "Japan");
var result3: string = city_country("Sydney", "Australia");

console.log(result1);
console.log(result2);
console.log(result3);
