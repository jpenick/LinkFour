/* DOM MANIPS */
window.onload = function(){
    var d = document;
    var boardHolder = d.getElementById('boardHolder');  //the div w/ the board

    /*builds a blank board*/
    function buildBoard(){
        var board = d.createElement('table');
        for(var i=0;i<6;i++){
            var r = d.createElement('tr');  //create a
            r.setAttribute('id',("r"+i));   //id the row
            for(var j=0;j<7;j++){
                r.appendChild(d.createElement('td'));   //add the cells
            }
            board.appendChild(r);   //add the row to the board
        }
        boardHolder.appendChild(board);
    }
    buildBoard();   //build the board for looking at
    initBoard();    //init the board for working on
}

/* GAME LOGIC */
/* 
    We're storing the gameboard array sideways (b[7][6] instead of b[6][7])
    This way we can catch a break with logic in determining links4s.
    As board fills, smaller indices in the 2D will be occupied first.
*/
var boardArr = [];  //the array we'll keep our game data in
var areBlanks = true;   //keep track of available spaces??

/* Builds our boardArray for playing with */
function initBoard(){
    //we'll init our array with 0 as blanks
    for(var i=0;i<7;i++){   //board columns
        boardArr.push([]);
        for(var j=0;j<6;j++){   //board rows
            boardArr[i].push(0);
        }
    }
    console.log(boardArr);
}

/* Returns true if there's an open (0) space in the boardArr */
function areSpaces(){
    return boardArr.indexOf(0) >= 0;
}

/* With row and col of new piece (type p), calcs if four in a row 
    REMEMBER 2D arr ROW represents a board COL
*/
function linksFour(r,c,p){
    
}

function runGame(){
    //while there's no winner and open spaces
    //  p1 chooses a column to drop a piece in
    //  if piece linksFour()
    //      p1 wins
    //  start over with p2
}