let member_number = 21543;
let age = 27; 
let price;
if (age >= 65) {
    price = 5;
}else if (age <= 10) {
    price = 8;
}else{
    price = 10;
}
const isMember = (member_number > 0);
if (isMember){
    console.log("Welcome Back!");
    price *= 0.8;
}
console.log("Ticket Price: $" + price);