let culori = ["green", "purple", "red", "blue", "yellow", "fuchsia", "lime", "teal", "aqua", "navy", "coral", "darkred", "gold", "hotpink"];
let inimi = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍"];

function setRandomColor() {

    let randomIndex = Math.trunc(Math.random() * 100 % culori.length);
    let textToChange = document.getElementById("text-branding");
    textToChange.style.color = culori[randomIndex];

}

function setRandomHeart() {

    let randomIndex = Math.trunc(Math.random() * 100 % inimi.length);
    let textTitlu = document.getElementById("titlu-poveste");
    text = textTitlu.innerText;
    arrayText = textTitlu.innerText.split(" ");
    arrayText[2] = inimi[randomIndex];
    textTitlu.innerText = arrayText.join(" ");

}

function loadPopUp() {

    if (JSON.parse(localStorage.getItem('popupCompletat')) == 1)
    {
        return ;
    }

    const body = document.getElementsByTagName("body");
    let copiiBody = body[0].children;
    let popUp = document.getElementById("fundal-popup");
    for (let i = 0; i < (copiiBody.length - 3); i++) {
        copiiBody[i].classList.add("blurry");
    }
    popUp.classList.remove("ascuns");
    document.getElementsByClassName("close-btn")[0].addEventListener("click", removePopUp);
    document.getElementById("form-popup").addEventListener("submit", submitForm);
}

function removePopUp()
{
    const body = document.getElementsByTagName("body");
    let copiiBody = body[0].children;
    let popUp = document.getElementById("fundal-popup");
    for (let i = 0; i < (copiiBody.length - 3); i++) {
        copiiBody[i].classList.remove("blurry");
    }
    popUp.classList.add("ascuns");
    document.getElementsByClassName("close-btn")[0].removeEventListener("click", removePopUp);
    document.getElementById("form-popup").removeEventListener("submit", submitForm);

}

function submitForm() {

    const regex = /^07\d{8}/; // accepta doar numere 07xxxxxxxx
    let email =  document.getElementById('email-user').value;
    let telefon =  document.getElementById('telefon-user').value;
    let nume =  document.getElementById('nume-user').value;

    if (!regex.test(telefon))
    {
        alert("Număr de telefon invalid, vă rugăm să reîncercați!");
        return;
    }

    localStorage.setItem('popupCompletat', JSON.stringify("1"));
    localStorage.setItem('emailUser', JSON.stringify(email));
    localStorage.setItem('telefonUser', JSON.stringify(telefon));
    localStorage.setItem('numeUser', JSON.stringify(nume));

    removePopUp();

}

function curataStorage()
{
    localStorage.clear();
}

window.onload = setInterval(setRandomColor, 7500);

window.onload = setInterval(setRandomHeart, 2000);

window.onload = setTimeout(loadPopUp, 7500);

document.querySelectorAll("#logo-nav").forEach(element => 
                                        element.addEventListener("click", curataStorage));



