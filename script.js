
let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-button");
// console.log(box);
let turnX = true;
let winBox = document.querySelector("#winner");

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2 ,5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// let clicked = {
//     0: false,
//     1: false,
//     2: false,
//     3: false,
//     4: false,
//     5: false,
//     6: false,
//     7: false,
//     8: false
// };

function checkWinner() {
    for (pattern of winPattern) {
        if (boxes[pattern[0]].innerHTML !== "" &&
        boxes[pattern[0]].innerHTML === boxes[pattern[1]].innerHTML &&
            boxes[pattern[0]].innerHTML === boxes[pattern[2]].innerHTML) {
            return boxes[pattern[0]].innerHTML;
        }
    }

    for (let i=0; i<boxes.length; i++) {
        if (boxes[i].innerHTML === "") return "*";
    }
    // its a draw
    return "$";
}


for (let i=0; i<boxes.length; i++) {
    // console.log(box[i]);
    boxes[i].addEventListener("click", () => {
        console.log("box was clicked");
        
            if (turnX) {
                boxes[i].innerHTML = "X";
            }
            else {
                boxes[i].innerHTML = "O";
            }
            turnX = !turnX;
            boxes[i].disabled = true;
            let winner = checkWinner();
            console.log(winner);
            
            if (winner !== "*") {
                if (winner === "$") winBox.innerHTML = "It's a Draw!";
                else winBox.innerHTML = winner + " Won!";
                winBox.style.visibility = "visible";
                for (let i=0; i<boxes.length; i++) {
                    boxes[i].disabled = true;
                }
            }


    })
};


reset_btn.addEventListener("click", () => {
    turnX = true;
    winBox.style.visibility = "hidden";
    for (let i=0; i<boxes.length; i++) {
        boxes[i].disabled = false;
        boxes[i].innerHTML = "";    
    }
});

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("box was clicked");
//         if (turnX) {
//             box.innerHTML = "X";
//         }
//         else {
//             box.innerHTML = "O";
//         }
//         turnX = !turnX;
//     })
// });