/**
 * @param {character[][]} board
 * @return {boolean}
 */
 //size of Sudoku side
 var m = 9, n = m;

var isValidSudoku = function(board) {
    if(checkRow(board) && checkColumn(board) && check3x3(board)){
        return true;
    }
    return false;
};

var isUnique = function(str) {
    var obj = {};
    for(var z = 0; z < str.length; ++z) {
        var ch = str[z];
        if(obj[ch]){
            return false
        }
        else{
            obj[ch] = true;
        }
    }
    return true;
}

var check3x3 = function(board){
    //center of every 3x3 grid
    var positions =  [
        [1,1], [1,4], [1,7],
        [4,1], [4,4], [4,7],
        [7,1], [7,4], [7,7]
    ];

    var row = '';

    return positions.every(function(position){
        row = '';
        row += board[position[0] - 1][position[1] - 1]; //top left
        row += board[position[0] - 1][position[1]]; //mid left
        row += board[position[0] - 1][position[1] + 1]; //bottom left

        row += board[position[0]][position[1] - 1]; //top top
        row += board[position[0]][position[1]]; //mid mid
        row += board[position[0]][position[1] + 1];//bottom bottom

        row += board[position[0] + 1][position[1] - 1];
        row += board[position[0] + 1][position[1]];
        row += board[position[0] + 1][position[1] + 1];
        if(! isUnique(row.replace(/\./g,''))){
            return false;
        }
        return true;
    })
}

var checkRow = function(board){
    var row = "";
    for(var i = 0 ; i < m; i++){
        row = '';
        for(var j = 0; j < n; j++){
            row+=board[i][j];
        }
        if(! isUnique(row.replace(/\./g,''))){
            return false;
        }
    }
   return true;
}

var checkColumn = function(board){
    var row = '';
   for(var i = 0 ; i < n; i++){
        row = '';
        for(var j = 0; j < m; j++){
             row+=board[j][i];
        }
         if(! isUnique(row.replace(/\./g,''))){
            return false;
        }
    }
    return true;
}
