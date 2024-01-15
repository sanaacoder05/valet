//Create a reference for canvas 

//Give specific height and width to the car image
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

var carImage = new Image();
carImage.src = 'car2.png'; // replace with your car image path
carImage.width = 85; // replace with your desired width
carImage.height = 125; // replace with your desired height
var carX = 0;
var carY = 0;



function add() {
    var backgroundImage = new Image();
    backgroundImage.onload = function() {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(carImage, carX, carY, carImage.width, carImage.height);
    };
    backgroundImage.src = background_image // replace with your background image path
}

window.addEventListener('keydown', my_keydown);

function my_keydown(e) {
    var key = e.keyCode;
    console.log(key);
    if(key == '38') { // ASCII for up arrow key
        up();
    } else if(key == '40') { // ASCII for down arrow key
        down();
    } else if(key == '37') { // ASCII for left arrow key
        left();
    } else if(key == '39') { // ASCII for right arrow key
        right();
    }
}

function up() {
    carY -= 10;
    add();
}

function down() {
    carY += 10;
    add();
}

function right() {
    carX += 10;
    add();
}

function left() {
    carX -= 10;
    add();
}
