oprirePropagare = false;

document.getElementById('mybtn').addEventListener('click', function () {

    oprirePropagare = true;
});

document.querySelector('.div-mare').addEventListener('click', function (event) {
    
    if (oprirePropagare) {
        event.stopPropagation();
    }
    alert("Event div mare: \nTarget: " + event.target + "\nCurrentTarget: " + event.currentTarget);

});

document.querySelector('.div-middle').addEventListener('click', function (event) {
    
    if (oprirePropagare) {
        event.stopPropagation();
    }
    alert("Event div mijloc: \nTarget: " + event.target + "\nCurrentTarget: " + event.currentTarget);

});

document.querySelector('.div-mic').addEventListener('click', function (event) {
       
    if (oprirePropagare) {
        event.stopPropagation();
    }
    alert("Event email: \nTarget: " + event.target + "\nCurrentTarget: " + event.currentTarget);

});
