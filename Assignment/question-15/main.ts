
var guest_list = ['shaheer','hashim','saqib'];

console.log(guest_list[0]+',you are invited to my dinner party on next Sunday.');
console.log(guest_list[1]+',you are invited to my dinner party on next Sunday.');
console.log(guest_list[2]+',you are invited to my dinner party on next Sunday.');
console.log(guest_list[1]+', wont be comming to the dinner')


guest_list.splice(1,1);
guest_list.push('zafeer');

console.log(guest_list[0]+',you are invited to my dinner party on next Sunday.');
console.log(guest_list[1]+',you are invited to my dinner party on next Sunday.');
console.log(guest_list[2]+',you are invited to my dinner party on next Sunday.');
