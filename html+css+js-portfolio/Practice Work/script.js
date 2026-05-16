// let h = document.querySelector("h1");
// console.dir(h.innerText);
// h.innerText = h.innerText + " Always Beat Anyone!"
// console.log(h.innerText);
// let h1 = document.querySelector("h1");
// let span = document.createElement("span");
// span.innerText = " Is Brave!";
// h1.appendChild(span); 

//Create The Butto with styling:
let btn = document.createElement("button");
btn.innerText= "Click Me!";
btn.style.backgroundColor = "red";
btn.style.color = "white";
document.body.prepend(btn);