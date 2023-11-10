var person_age = 47;
if (person_age < 2) {
    console.log('Person is a baby');
}
else if (person_age >= 2 && person_age < 4) {
    console.log('Person is a toddler');
}
else if (person_age >= 4 && person_age < 13) {
    console.log('Person is a kid');
}
else if (person_age >= 13 && person_age < 20) {
    console.log('Person is a teenager');
}
else if (person_age >= 20 && person_age < 65) {
    console.log('Person is a adult');
}
else if (person_age >= 65) {
    console.log('Person is an elder');
}
else {
    console.log('Wrong input');
}
