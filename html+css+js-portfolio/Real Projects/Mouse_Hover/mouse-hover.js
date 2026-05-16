    let card = document.querySelector(".card");

    card.addEventListener("mouseover", () => {

      card.style.backgroundColor = "purple";

      card.style.transform = "scale(1.1)";

      card.innerText = "Welcome 😄";

    });

    card.addEventListener("mouseout", () => {

      card.style.backgroundColor = "blue";

      card.style.transform = "scale(1)";

      card.innerText = "Hover Me";

    });