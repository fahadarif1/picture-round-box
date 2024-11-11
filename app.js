function generateBgColor() {
    var hexColor = Math.random().toString(16).slice(2, 8).padEnd(6, 0)
    var body = document.querySelector('body');
    // var hexField = document.querySelector('#hex-code')
    // var generatedCode = `#${hexColor}`

    // hexField.innerHTML = generatedCode

    body.style.backgroundColor = generatedCode

}

var initialRound = 0;

function roundBox(){
    var box = document.querySelector('.box');
    var hexColor = Math.random().toString(16).slice(2, 8).padEnd(6, 0)

    var round = initialRound += 25;
    box.style.rotate = `${round}deg`
    box.style.backgroundColor = `#${hexColor}`


}

setInterval(roundBox, 1000)
 
// var initialRound = 0;

// function roundBox(){
//     var box = document.querySelector('.box');
//     var hexColor = Math.random().toString(16).slice(2, 8).padEnd(6, 0)

//     var round = initialRound += 25;
//     box.style.rotate = `${round}deg`
//     box.style.backgroundColor = `#${hexColor}`


// }

// setInterval(roundBox, 700)

// var initialRound = 0;

// function roundBox1(){
//     var box = document.querySelector('.box1');
//     var hexColor = Math.random().toString(16).slice(2, 8).padEnd(6, 0)

//     var round = initialRound += 30;
//     box.style.rotate = `${round}deg`
//     box.style.backgroundColor = `#${hexColor}`


// }

// setInterval(roundBox, 700)
var initialRound = 0;

function roundBox(){
    var box = document.querySelector('.box');
    var hexColor = Math.random().toString(16).slice(2, 8).padEnd(6, 0)

    var round = initialRound += 25;
    box.style.rotate = `${round}deg`
    box.style.backgroundColor = `#${hexColor}`


}

setInterval(roundBox, 1000)

var initialRound = 0;

function roundBox1(){
    var box = document.querySelector('.box1');
    var hexColor = Math.random().toString(16).slice(2, 8).padEnd(6, 0)

    var round = initialRound += 25;
    box.style.rotate = `${round}deg`
    box.style.backgroundColor = `#${hexColor}`


}

setInterval(roundBox1, 1000)

var initialRound = 0;

function roundBox2(){
    var box = document.querySelector('.box3');
    var hexColor = Math.random().toString(16).slice(2, 8).padEnd(6, 0)

    var round = initialRound += 25;
    box.style.rotate = `${round}deg`
    box.style.backgroundColor = `#${hexColor}`


}

setInterval(roundBox2, 1000)

var initialRound = 0;

function roundBox3(){
    var box = document.querySelector('.box4');
    var hexColor = Math.random().toString(16).slice(2, 8).padEnd(6, 0)

    var round = initialRound += 25;
    box.style.rotate = `${round}deg`
    box.style.backgroundColor = `#${hexColor}`


}

setInterval(roundBox3, 1000)


 