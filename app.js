const addSquareButton = document.createElement("button");
addSquareButton.textContent = "Add Square";
document.body.appendChild(addSquareButton);

const squareContainer = document.createElement("div");
squareContainer.id = "square-container";
document.body.appendChild(squareContainer);

let numOfSquares = 0;

addSquareButton.addEventListener("click", function () {
    const newDiv = document.createElement("div");
    newDiv.className = "square";
    // newDiv.style.backgroundColor = "black";
    // newDiv.style.height = "100px";
    // newDiv.style.width = "100px";

    numOfSquares++
    newDiv.id = numOfSquares;

    newDiv.addEventListener("mouseover", function () {
        newDiv.textContent = newDiv.id;
    });

    newDiv.addEventListener("mouseout", function () {
        newDiv.textContent = "";
    });

    newDiv.addEventListener("click", function () {
        newDiv.style.backgroundColor = getRandomColor();
    });

    newDiv.addEventListener("dblclick", function () {
        if (newDiv.id % 2 == 0) {
            if (newDiv.nextSibling) {
                newDiv.nextSibling.remove();
            } else {
                alert("No Square!");
            }
        } else {
            if (newDiv.previousSibling) {
                newDiv.previousSibling.remove();
            } else {
                alert("No Square!");
            }
        }
    });
    
    squareContainer.appendChild(newDiv);
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
