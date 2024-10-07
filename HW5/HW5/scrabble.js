var letter = '';
var tileSlots = 0, score = 0, remainingNum = 0, highScore = 0;
var remainingTiles = [];


var ScrabbleTiles = [];
ScrabbleTiles["A"] = { "value": 1, "original-distribution": 9,
"number-remaining": 9, "image": "./images/Scrabble_Tiles/Scrabble_Tile_A.jpg" };
ScrabbleTiles["B"] = { "value": 3, "original-distribution": 2,
"number-remaining": 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_B.jpg" };
ScrabbleTiles["C"] = { "value": 3, "original-distribution": 2,
"number-remaining": 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_C.jpg" };
ScrabbleTiles["D"] = { "value": 2, "original-distribution": 4,
"number-remaining": 4, "image": "./images/Scrabble_Tiles/Scrabble_Tile_D.jpg" };
ScrabbleTiles["E"] = { "value": 1, "original-distribution": 12,
"number-remaining": 12, "image":"./images/Scrabble_Tiles/Scrabble_Tile_E.jpg" };
ScrabbleTiles["F"] = { "value": 4, "original-distribution": 2,
"number-remaining": 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_F.jpg" };
ScrabbleTiles["G"] = { "value": 2, "original-distribution": 3,
"number-remaining": 3, "image": "./images/Scrabble_Tiles/Scrabble_Tile_G.jpg" };
ScrabbleTiles["H"] = { "value": 4, "original-distribution": 2,
"number-remaining": 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_H.jpg" };
ScrabbleTiles["I"] = { "value": 1, "original-distribution": 9,
"number-remaining": 9, "image": "./images/Scrabble_Tiles/Scrabble_Tile_I.jpg" };
ScrabbleTiles["J"] = { "value": 8, "original-distribution": 1,
"number-remaining": 1, "image": "./images/Scrabble_Tiles/Scrabble_Tile_J.jpg" };
ScrabbleTiles["K"] = { "value": 5, "original-distribution": 1,
"number-remaining": 1, "image": "./images/Scrabble_Tiles/Scrabble_Tile_K.jpg" };
ScrabbleTiles["L"] = { "value": 1, "original-distribution": 4,
"number-remaining": 4, "image": "./images/Scrabble_Tiles/Scrabble_Tile_L.jpg" };
ScrabbleTiles["M"] = { "value": 3, "original-distribution": 2,
"number-remaining": 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_M.jpg" };
ScrabbleTiles["N"] = { "value": 1, "original-distribution": 6,
"number-remaining": 6, "image": "./images/Scrabble_Tiles/Scrabble_Tile_N.jpg" };
ScrabbleTiles["O"] = { "value": 1, "original-distribution": 8,
"number-remaining": 8, "image": "./images/Scrabble_Tiles/Scrabble_Tile_O.jpg" };
ScrabbleTiles["P"] = { "value": 3, "original-distribution": 2,
"number-remaining": 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_P.jpg" };
ScrabbleTiles["Q"] = { "value": 10, "original-distribution": 1,
"number-remaining": 1, "image": "./images/Scrabble_Tiles/Scrabble_Tile_Q.jpg" };
ScrabbleTiles["R"] = { "value": 1, "original-distribution": 6,
"number-remaining": 6, "image": "./images/Scrabble_Tiles/Scrabble_Tile_R.jpg" };
ScrabbleTiles["S"] = { "value": 1, "original-distribution": 4,
"number-remaining": 4, "image": "./images/Scrabble_Tiles/Scrabble_Tile_S.jpg" };
ScrabbleTiles["T"] = { "value": 1, "original-distribution": 6,
"number-remaining": 6, "image": "./images/Scrabble_Tiles/Scrabble_Tile_T.jpg" };
ScrabbleTiles["U"] = { "value": 1, "original-distribution": 4,
"number-remaining": 4, "image": "./images/Scrabble_Tiles/Scrabble_Tile_U.jpg" };
ScrabbleTiles["V"] = { "value": 4, "original-distribution": 2,
"number-remaining": 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_V.jpg" };
ScrabbleTiles["W"] = { "value": 4, "original-distribution": 2,
"number-remaining": 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_W.jpg" };
ScrabbleTiles["X"] = { "value": 8, "original-distribution": 1,
"number-remaining": 1, "image": "./images/Scrabble_Tiles/Scrabble_Tile_X.jpg" };
ScrabbleTiles["Y"] = { "value": 4, "original-distribution": 2,
"number-remaining": 2, "image": "./images/Scrabble_Tiles/Scrabble_Tile_Y.jpg" };
ScrabbleTiles["Z"] = { "value": 10, "original-distribution": 1,
"number-remaining": 1, "image": "./images/Scrabble_Tiles/Scrabble_Tile_Z.jpg" };
ScrabbleTiles["_"] = { "value": 0, "original-distribution": 2,
"number-remaining": 2,
"image": "./images/Scrabble_Tiles/Scrabble_Tile_Blank.jpg" };

// Scrabble board contains data on each board slot
var ScrabbleBoard = {};
ScrabbleBoard.slots = []
ScrabbleBoard.slots[0] = { "letterMultiplier": 1, "wordMultiplier": 1,
"image": "./images/Scrabble_BlankSquare_81x87.jpg" }
ScrabbleBoard.slots[1] = { "letterMultiplier": 1, "wordMultiplier": 2,
"image": "./images/Scrabble_DoubleWordScore_81x87.jpg" }
ScrabbleBoard.slots[2] = { "letterMultiplier": 1, "wordMultiplier": 1,
"image": "./images/Scrabble_BlankSquare_81x87.jpg" }
ScrabbleBoard.slots[3] = { "letterMultiplier": 1, "wordMultiplier": 1,
"image": "./images/Scrabble_BlankSquare_81x87.jpg" }
ScrabbleBoard.slots[4] = { "letterMultiplier": 1, "wordMultiplier": 1,
"image": "./images/Scrabble_BlankSquare_81x87.jpg" }
ScrabbleBoard.slots[5] = { "letterMultiplier": 1, "wordMultiplier": 2,
"image": "./images/Scrabble_DoubleWordScore_81x87.jpg" }
ScrabbleBoard.slots[6] = { "letterMultiplier": 1, "wordMultiplier": 1,
"image": "./images/Scrabble_BlankSquare_81x87.jpg" }

// Sends seven tiles to the rack and updates remaining tiles
function getTiles(numSlots) {
    for (let i = 0; i < numSlots; i++) {
        let randomIndex = Math.floor(Math.random() * remainingTiles.length);
        letter = remainingTiles[randomIndex];
        $("#rack").append("<img src=\"" + ScrabbleTiles[letter]["image"] +
        "\" class=\"draggable\"></img>");
        $("#rack > .draggable").last().attr("letter", letter);
        remainingTiles[randomIndex]["number-remaining"]--;
        remainingNum--;
    }
}

// Document is ready to display content
$(document).ready(function () {
    tileSlots = ScrabbleBoard.slots.length;
    for (let i = 0; i < tileSlots; i++) {
        // add tile slots to the page
        $("#board").append("<div class=\"boardSlot droppable\"></div>");
        $(".boardSlot").last().css({ "background-image":  "url(" +
        ScrabbleBoard.slots[i].image + ")" });
    }

    // Store the remaining number of each tile
    for (let letter in ScrabbleTiles) {
        let remaining = ScrabbleTiles[letter]["number-remaining"];
        for (let i = 0; i < remaining; i++) {
          remainingTiles.push(letter);
          remainingNum++;
        }
    }

    // Get tiles for the rack
    getTiles(tileSlots);

    // Send tiles dragged out of bounds back in bounds
    $(".draggable").draggable({
        revert: "invalid"
    });

    // Make the tile rack droppable
    $("#rack.droppable").droppable({
        classes: {
            "ui-droppable": "highlight"
        },
        drop: function (event, ui) {
            $(ui.draggable).css({"top": 0, "left": 0});
            $(this).append(ui.draggable);
        }
    });

    // Make the boardslots droppable and get tile info on drop
    $(".boardSlot.droppable").droppable({
        classes: {
            "ui-droppable": "highlight"
        },
        drop: function (event, ui) {
            $(ui.draggable).css({"top": 0, "left": 0});
            $(this).append(ui.draggable);
            letter = ui.draggable.attr("letter");
            score += ScrabbleTiles[letter]["value"];

            let word = "";
            // Concatenate each letter on the board
            for (let i = 0; i <= tileSlots; i++) {
                if ($(".boardSlot:nth-child(" + i + ") > img").length) {
                    word += $(".boardSlot:nth-child(" + i +
                    ") > img").attr("letter");
                }
            }
            $("#word").text("Word: " + word);
            $("#score").text("Score: " + score);
            $("#remainingTiles").text("Remaining Tiles: " + remainingNum);
        }
    });

    
    // Reset board (currently refreshes page)
    $("#reset").on("click", function() {
        location.reload();
    });   
});