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
    buildBoard();   //build the board!
}

/* GAME LOGIC */
/* 
    We're storing the gameboard array sideways (b[7][6] instead of b[6][7])
    This way we can catch a break with logic in determining connect4s.
    As board fills, smaller indices in the 2D will be occupied first.
*/
var boardArr = [];  //the array we'll keep our game data in

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

/* With row and col of new piece (type p), calcs if four in a row 
    REMEMBER 2D arr ROW represents a board COL
*/
function connects4(r,c,p){
    //1 check both neighbors in this array first   ct++ c+1/c-1
    //  if neighbor p, check next neighbor         ct++ c++/c--
    //      until ct=4 (true) or neighbor !p
    //2 check neighbors in next arrays, top/bot    ct++ r+1/r-1
    //  if neighbor p, check next arr neighbor     ct++ r++/r--
    //      unitl ct=4 (true) or neighbor !p
    //3 check neighbors in next arrays, diagonal   ct++ r+1,c+1/c-1
    //  if diag p, check their diag                ct++ r++,c++/c--
    //      until ct=4 (true) or diag !p
    //4 IFF neighbor checked, no four in a row (false)
}

initBoard();