// main container for everything

const container = document.querySelector(".container");

// creates class for all boxes so they can be formatted in CSS

const box = document.createElement("box");
box.classList.add("box");

// creates a div that will appear when the page is first loaded

const initialGrid = document.createElement("intialGrid");
initialGrid.classList.add("initialGrid");
container.appendChild(initialGrid);

// creates all the boxes in the initial grid

for (let i = 0; i < 4; i++) {
    firstrow = document.createElement("div");
    firstrow.classList.add("row");
    initialGrid.appendChild(firstrow);
        for (let i = 0; i < 4; i++) {
            firstdiv = document.createElement("div");
            firstdiv.classList.add("box");
            firstrow.appendChild(firstdiv);
}
}

// hovering causes boxes to turn pink

const hover = document.querySelectorAll(".box");
for (let i = 0; i < hover.length; i++) {
    hover[i].addEventListener("mouseover", function() {
        hover[i].style.backgroundColor = "pink";
});
}

// delete the old container, replace with a new one

const newButton = document.querySelector(".newbutton");

function newGrid() {
    var removeFirstGrid = document.querySelector(".container");
    removeFirstGrid.firstElementChild.remove();
    const newcontainer = document.createElement("newcontainer");
    newcontainer.classList.add("newcontainer");
    container.appendChild(newcontainer);
      var answer = prompt("How many rows?");
      if (Number.isInteger(+answer) && answer > 1 && answer <= 100) {
        for (let i = 0; i < answer; i++) {
          newrow = document.createElement("div");
          newrow.classList.add("row");
          newcontainer.appendChild(newrow);
          for (let i = 0; i < answer; i++) {
              newdiv = document.createElement("div");
              newdiv.classList.add("box");
              newrow.appendChild(newdiv);
            }
          }
            const hoveragain = document.querySelectorAll(".box");
            for (let i = 0; i < hoveragain.length; i++) {
            hoveragain[i].addEventListener("mouseover", function() {
            hoveragain[i].style.backgroundColor = "pink";
            });
            }
        } else if (answer == 0 || answer == null) {
          alert("Maybe next time");
        } else if (answer >= 101) {
          alert("Let's keep things simple");
        } else {
          alert("Only whole numbers, please")
  }
}

newButton.addEventListener("click", newGrid);