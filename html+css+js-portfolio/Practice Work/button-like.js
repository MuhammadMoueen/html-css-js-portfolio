let count = 0;

let btn = document.querySelector("button");

let p = document.querySelector("p");

btn.onclick = function(){

   count++;

   p.innerText = count + " Likes";
}