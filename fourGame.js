/* DOM MANIPS */
window.onload = function(){
	var d = document;
	var boardHolder = d.getElementById('boardHolder');	//the div w/ the board

	/*builds a blank board*/
	function buildBoard(){
		var board = d.createElement('table');
		for(var i=0;i<6;i++){
			var r = d.createElement('tr');	//create a
			r.setAttribute('id',("r"+i));	//id the row
			for(var j=0;j<7;j++){
				r.appendChild(d.createElement('td'));	//add the cells
			}
			board.appendChild(r);	//add the row to the board
		}
		boardHolder.appendChild(board);
	}
	buildBoard();	//build the board!
}

/* GAME LOGIC */
var boardArr = [];	//the array we'll keep our game data in

/* Builds our boardArray for playing with */
function initBoard(){
	//we'll init our array with ' ' as blanks
	for(var i=0;i<6;i++){
		boardArr.push([]);
		for(var j=0;j<7;j++){
			boardArr[i].push(' ');
		}
	}
	console.log(boardArr);
}

initBoard();