class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

    createSpaces() {
        const spaceArray = [];

        for (let x = 0; x < this.columns; x++) {
            const columnArray = [];

            for (let y = 0; y < this.rows; y++) {
                const space = new Space(x, y);
                columnArray.push(space);
            }
            spaceArray.push(columnArray);
        }

        return spaceArray; 
    }

    drawHTMLBoard() {
        for (let column of this.spaces) {
            for (let space of column) {
                space.drawSVGSpace();
            }
        }
    }
    
}