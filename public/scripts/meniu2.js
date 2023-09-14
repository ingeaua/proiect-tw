
document.getElementById("butonel").addEventListener("click", addCafelute)

function addCafelute() {

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/json", true);
    
    xhr.onload = function() {
        if(this.status == 200) {
            let cafele = JSON.parse(this.response);
            for (let i = 0; i < cafele.length; i++)
            {
                let card = document.createElement("div");
                card.classList.add("card");
                let img = document.createElement("img");
                img.src = cafele[i].picture_link;
                let cardContent = document.createElement("div");
                cardContent.classList.add("card-content");
                let coffeeName = document.createElement("div");
                coffeeName.classList.add("coffee-name");
                coffeeName.innerHTML = cafele[i].name;
                let description = document.createElement("div");
                description.classList.add("description");
                description.innerHTML = cafele[i].description;
                let price = document.createElement("div");
                price.classList.add("price");
                price.innerHTML = cafele[i].price;
                cardContent.appendChild(coffeeName);
                cardContent.appendChild(description);
                cardContent.appendChild(price);
                card.appendChild(img);
                card.appendChild(cardContent);
                document.getElementsByClassName("grid")[0].appendChild(card);
                document.getElementById("butonel").removeEventListener("click", addCafelute)
            }
        }
    }

    xhr.send();

} 


