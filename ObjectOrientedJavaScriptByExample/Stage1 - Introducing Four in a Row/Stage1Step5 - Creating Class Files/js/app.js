const theGame = new Game();

const beginButton = document.querySelector('#begin-game');

beginButton.addEventListener('click', function() {
    theGame.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
})

document.addEventListener('keydown', function(event) {
    theGame.handleKeydown(event);
});