var painted;
var content;
var winningCombinations;
var turn = 0;
var theCanvas;
var c;
var cxt;
var squaresFilled = 0;
var w;
var y;

window.onload = function () {

    painted = new Array();
    content = new Array();
    winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (var l = 0; l <= 8; l++) {
        painted[l] = false;
        content[l] = '';
    }
}

function canvasClicked(canvasNumber) {
    theCanvas = "canvas" + canvasNumber;
    c = document.getElementById(theCanvas);
    cxt = c.getContext("2d");

    if (painted[canvasNumber - 1] == false) {
        if (turn % 2 == 0) {
            cxt.beginPath();
            cxt.lineWidth = 4;
            cxt.moveTo(10, 10);
            cxt.lineTo(90, 90);
            cxt.moveTo(90, 10);
            cxt.lineTo(10, 90);
            cxt.stroke();
            cxt.closePath();
            content[canvasNumber - 1] = 'X';
        }

        else {
            cxt.beginPath();
            cxt.arc(50, 50, 45, 0, Math.PI * 2, true);
            cxt.lineWidth = 4;
            cxt.stroke();
            cxt.closePath();
            content[canvasNumber - 1] = 'O';
        }

        turn++;
        painted[canvasNumber - 1] = true;
        squaresFilled++;
        checkForWinners(content[canvasNumber - 1]);

        if (squaresFilled == 9) {
            alert("Game Over!");
            playAgain();
        }

    }
    else {
        alert("That's already checked.");
    }

}

function checkForWinners(symbol) {

    for (var a = 0; a < winningCombinations.length; a++) {
        if (content[winningCombinations[a][0]] == symbol && content[winningCombinations[a][1]] == symbol && content[winningCombinations[a][2]] == symbol) {
            alert(symbol + " WON!");
            playAgain();
        }
    }

}
function close_window() {
    if (confirm("Close Window?")) {
        close();
    }
    else {
        location.href = 'http://softuni.bg'
    }
}

function playAgain() {
    y = confirm("Play again?");
    if (y == true) {
        location.reload(true);
    }
    else {
        close_window();
    }

}

