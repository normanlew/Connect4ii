class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active
        this.tokens = this.createTokens(21);
    }

    createTokens(num) {

        const tokenArray = [];

        for (let i = 0; i < num; i++) {
            let t = new Token(i, this);
            tokenArray.push(t);
        }

        return tokenArray;
    }

    get unusedTokens() {
        return this.tokens.filter(t => !t.dropped);
    }

    get activeToken() {
        return this.unusedTokens[0];
    }

    checkTokens() {
        return this.unusedTokens.length == 0 ? false : true;
    }
    
}