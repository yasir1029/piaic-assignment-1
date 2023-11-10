var guest_list = ['shaheer', 'hashim', 'saqib'];
console.log('\nGuest List\n');
console.log(guest_list[0] + ',you are invited to my dinner party on next Sunday.');
console.log(guest_list[1] + ',you are invited to my dinner party on next Sunday.');
console.log(guest_list[2] + ',you are invited to my dinner party on next Sunday.');
console.log('\n Unfortunately ' + guest_list[1] + ', wont be comming to the dinner\n');
guest_list[1] = 'zafeer';
console.log('\n New Guest List \n');
console.log(guest_list[0] + ',you are invited to my dinner party on next Sunday.');
console.log(guest_list[1] + ',you are invited to my dinner party on next Sunday.');
console.log(guest_list[2] + ',you are invited to my dinner party on next Sunday.');
// Add one guest to the beginning
guest_list.unshift('Amir');
// Add one guest to the middle
guest_list.splice(2, 0, 'ateeb');
// Use push to add one guest to the end
guest_list.push('Kuma');
console.log('\n I just got a bigger table for dinner so I invited some more friends. \n');
console.log('\n New Guest List \n');
console.log(guest_list[0] + ',you are invited to my dinner party on next Sunday.');
console.log(guest_list[1] + ',you are invited to my dinner party on next Sunday.');
console.log(guest_list[2] + ',you are invited to my dinner party on next Sunday.');
console.log(guest_list[3] + ',you are invited to my dinner party on next Sunday.');
console.log(guest_list[4] + ',you are invited to my dinner party on next Sunday.');
console.log(guest_list[5] + ',you are invited to my dinner party on next Sunday.');
