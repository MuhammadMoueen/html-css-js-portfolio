/*================ Variable & DataType====================*/

// const profile = {
//     fullName : "Muhammad Moueen",
//     posts    :     195,
//     followers: "564k",
//     following: 4
// };

// profile.posts= profile.posts + 1;
// console.log(profile.posts);

// profile.fullName = "Sheikh Moueen";

// console.log(profile)


// a = 4;
// b = "5";

// console.log("a = b:", a == b);


//  let x = 10;

// if (x % 2 == 0){
//     console.log("Number is Even:", x);
// } 
// else{
//     console.log("Number is Old:", x);
// }

// let x = Number(prompt("Enter The Age Number:"));

// if (x < 18){
//     console.log("Young Boy");
// }

// else if (x >= 18 && x <= 25){
//     console.log("Adult Boy");
// }

// else{
//     console.log("Breeder Men");

// }


// let x = Number(prompt("Enter The Nmber:"));

// if (x % 5 == 0){
//     console.log("Number is multiple of 5");
// }
// else{
//     console.log("Number is not multiple of 5");

// }


// let marks = Number(prompt("Enter The Marks Of Student:"));

// if( marks <= 100 && marks >= 80){
//     console.log("Student Grade A");
// }
// else if( marks <= 89 && marks >= 70){
//     console.log("Student Grade B");
// }
// else if( marks <= 69 && marks >= 60){
//     console.log("Student Grade C");
// }
// else if( marks <= 59 && marks >= 50){
//     console.log("Student Grade D");
// }
// else if( marks <= 49){
//     console.log("Student Grade F");
// }
// else{
//     console.log("Invalid Input.")
// }

// let i = 6

// for(let i = 0 ; i <= 5; i++ ){
//     console.log("i =", i);
// }
// console.log(i);

// let student = {
//     user    : "Moueen",
//     rollNo  : 1131,
//     isPass  : true
// }
// for ( let key in student){
//     console.log("key is:",key , "Value:" , student[key]);
// }

// Print 0 to 100 even number:

// for(let i = 0; i <= 100; i++){
//     if( i % 2 == 0){
//         console.log(i);
//     }
// }
//     console.log("All Even Number Is Printed.")

//Guessing Game:

// let GuessNum = 25;
// let UserNum  = Number(prompt("Guess the number:"));
//    while(GuessNum != UserNum){
//       UserNum = Number(prompt("You guess the wrong number , try again:"));
//    }
//    console.log("Congratulations, You Win The Game.")

//Strings 
// let str = "Moueen";
// str1 = str.length
// console.log(str1);
// str2 = str[0]
// console.log(str2);

// Temp literal
// let obj={
//     item: pen,
//     price: 10,
// }
// let output = `The cost of ${obj.item} is ${obj.price}`;
// console.log(output);

// let name = "Moueen";

// console.log(`My name is ${name}`);


// let str = "Moueen";

// let newStr = str.toUpperCase();

// console.log(newStr);

// let str = "Moueen";
//  console.log(str[0]);

// Practice Question:

// let UserInput = prompt("Enter Your Full Name:")
// UserInput = UserInput.toLowerCase();
// UserInput = UserInput.replaceAll(" ", "");
// let str = UserInput.length
// let str_len = UserInput.concat(str)
// let UserName = "@"+ str_len;
// console.log(UserName);

// Practice Question:

// let marks = [85 , 97 , 44 , 37 ,76 , 60]
// sum = 85 + 97 + 44 + 37 + 76 + 60;
// average = sum / marks.length;
// console.log(`Average Marks of the student is :{average}`);

// Practice Question:

// let items = [250 , 645 , 300 , 900 , 50];
// let NewItems = [];
// for (let item of items){
//   let  final_price = item - (item / 100 * 10);
//     NewItems.push(final_price);
// }
// console.log(`Final Price of the items are shows: ${NewItems}`);



// let items = [250 , 645 , 300 , 900 , 50];
// for (let i = 0; i < items.length; i++){
//     items = items[0] - (items[0] / 100 * 10);
// }
// console.log(`Final Price of the items are shows: ${items}`);

// let items = [250, 645, 300, 900, 50];

// for (let i = 0; i < items.length; i++){

//     items[i] = items[i] - (items[i] / 100 * 10);

// }

// console.log(`Final Prices are: ${items}`);

// Practice Question:

// let companies = ["Bloomberge", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// let remove_first_company = companies.shift();
// let replace_company = companies.splice(1,1,"Ola");
// let Add_company =companies.push("Amazon");
// console.log(`Update companies data: ${companies}`);
  

//funation

// const MulNum = (a , b) => {
//     console.log(a * b);
// }

// MulNum(2,3);



// Practice 
// function countVowels(str){

//     let count = 0;

//     for(let char of str){

//         if(
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ){
//             count++;
//         }
//     }

//     return count;
// }

//Function Defination => parameter
// 


//Practice Question 

let arr = [87 , 93 , 64 , 99 , 87 , 65 , 90 , 23]

arr.filter((val) => {
    if (val >= 90){
        let newArr = val;
    }
    console.log(`The Score is not upto 90 ${val}`);
});
console.log(newArr);