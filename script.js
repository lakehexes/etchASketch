// create a div element
const divs = [];
const container = document.querySelector(".container");
const clearButton = document.querySelector("#clear");

let rowOfDivsQuantity= 16;
const divRows = [];


//going to nest the lists maybe? div 0-15 then each of them also has 16 in 

makeGrid(rowOfDivsQuantity);

function makeGrid (rowOfDivsQuantity) {

for (let i=0; i<rowOfDivsQuantity; i++) {
            divRows[i]=document.createElement("div");
            divRows[i].id= i;
            divRows[i].className="row";
           container.appendChild(divRows[i]);

           for (let j=0; j<rowOfDivsQuantity; j++) {
            divs[j]= document.createElement("div");
            divs[j].id = "x:" + i + "y:" + j;
            divs[j].className="grid";
            divs[j].addEventListener("mouseenter", function (e) {
                e.target.style.backgroundColor="black";

            });
            // divs[j].textContent= i;
            
            // container.appendChild(divs[j]);
            divRows[i].appendChild(divs[j]);
        
        }


}
}


// clearButton.addEventListener("click", function (e) {
//     rowOfDivsQuantity = window.prompt("How many rows for your new ladybird?", "10");});

clearButton.addEventListener("click", newGame);

function newGame () {

    //clear screen
    var node= document.querySelector(".container");
    node.querySelectorAll('*').forEach(n => n.remove());

    rowOfDivsQuantity = window.prompt("How many rows for your new ladybird?", "10");
    makeGrid(rowOfDivsQuantity);
}