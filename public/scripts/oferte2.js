document.addEventListener('keyup', keyupHandler = (event) => {
    var name = event.key;
    if (name == '1' || name == '2' || name == '3')
    {
        document.removeEventListener('keyup', keyupHandler);
        startGame()
    }

})

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let culoareGlobal = '';
let randomXGlobal = 0;
const patrat = document.getElementById("patrat-interesant");

function startGame()
{
    const culoare = getRandomColor();
    console.log(culoare)
    patrat.style.backgroundColor = culoare;

    const Xmax = window.innerWidth - 100; 
    const randomX = Math.floor(Math.random() * Xmax);
    console.log(randomX);
    patrat.style.left = randomX + "px";

    culoareGlobal = culoare;
    randomXGlobal = randomX;

}

function rgbToHex(rgb) {
    const regex = /(\d+), (\d+), (\d+)/;
    const matches = regex.exec(rgb);
  
    const red = parseInt(matches[1], 10);
    const green = parseInt(matches[2], 10);
    const blue = parseInt(matches[3], 10);
  
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');
  
    const hexColor = `#${redHex}${greenHex}${blueHex}`;
    return hexColor.toUpperCase();
}

const formular = document.getElementById("formular");

formular.addEventListener("submit", () => {

    
    if (document.getElementById("culoare").value == rgbToHex(getComputedStyle(patrat).backgroundColor) && 
    document.getElementById("pozitie").value == patrat.getBoundingClientRect().left)
    {
        alert("Ai trisat!");
    }
    else 
    {

        alert("Culoarea patratului este " + rgbToHex(getComputedStyle(patrat).backgroundColor) + " iar pozitia este " + patrat.getBoundingClientRect().left);
          
    }

});

window.onload = setInterval(checkPatrat, 13000);

function checkPatrat() {

    const rect = patrat.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
    if (!isInViewport) {

        alert("Patratul nu se afla in viewport!");

    }
    else
    {
        alert("Patratul se afla in viewport!");
    }

}
