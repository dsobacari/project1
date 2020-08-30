//Challenge 1: Your Age in Days
function ageInDays() {
    var birthYear = prompt('What year where you born?');
    var ageInDayss = (2020 - birthYear)* 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

//Challenge 2: Cat Generator
function reset() {
    document.getElementById('ageInDays').remove();
}

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}


//Challenge 3: Rock, Paper, Scissor
function rpsGame(yourChoice){ //yourChoice is passed from image selection in html file 
    console.log(yourChoice); //puts in console what you selected in this case the src content from img
    var humanChoice, botChoice; //initialise choices
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomToRpsInt());
    console.log('Computer choice:', botChoice);
    results = decideWinner(humanChoice, botChoice); //[0, 1] human lost | bot won
    console.log(results);
    
    message = finalMessage(results); // {message: 'You won!', 'color': green'}
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

//Math.random(); //picks a float number betwen 1 and zero
//Math.random()*3;//since we have 3 choices we dont go over 3 including 0 
//Math.floor(); //floor a number, ie 2.8 becomes 2, 4.5 becomes 4

function randomToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return[yourScore, computerScore];     
}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
        return {'message': 'You lost!', 'color': 'red'};

    } else if (yourScore=== 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //create the  new divs

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
     
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width =150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width =150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: "+ finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//Challange 4: Change the Color of All Buttons
var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}



function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value ==='reset') {
        buttonsReset();
    } else if (buttonThingy.value ==='random') {
        randomColors();
    }
}

function buttonsRed(){
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}


function buttonsReset(){
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]); //replace with i value from our copy
    }
}

function randomColors(){
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    
    for (let i=0; i < all_buttons.length; i++) {    
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]); 
    }
}
















// scissors http://images.clipartpanda.com/scissors-clip-art-9iRAgX6ie.svg
//paper http://images.clipartpanda.com/paper-clip-art-yioab7piE.png
// rock http://images.clipartpanda.com/rock-clipart-clipart-harvestable-resources-rock.png