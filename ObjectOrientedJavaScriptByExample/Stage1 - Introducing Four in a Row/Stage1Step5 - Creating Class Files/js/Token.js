class Token {
    constructor (index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }

    drawHTMLToken() {
        const tokenDiv = document.createElement('div');
        const gameBoardUnderlay = document.querySelector('#game-board-underlay');
        gameBoardUnderlay.appendChild(tokenDiv);
        tokenDiv.setAttribute('id', this.id);
        tokenDiv.setAttribute('class', 'token');
        tokenDiv.style.backgroundColor = this.owner.color;
    }

    get htmlToken() {
        return document.getElementById(this.id);
    }

    get offsetLeft() {
        return this.htmlToken.offsetLeft;
    }

    moveLeft() { 
        if (this.columnLocation > 0) {
            const tokenDiv = this.htmlToken;
            tokenDiv.style.left = this.offsetLeft - 76;
            this.columnLocation--;
        }
    }

    moveRight(columns) {
        if (this.columnLocation < columns - 1) {
            const tokenDiv = this.htmlToken;
            tokenDiv.style.left = this.offsetLeft + 76;
            this.columnLocation++;
        }
    }

    drop(target, reset) {
        this.dropped = true;

        $(this.htmlToken).animate({
            top: (target.y * target.diameter)
        }, 750, 'easeOutBounce', reset);
        

    }
}