// div container for all boxes

const container = document.querySelector('.container');

// creates class for all boxes so they can be formatted in CSS

const box = document.createElement('box');
box.classList.add('box');

// creates all new boxes

grid01 = document.createElement('div');
grid01.classList.add('box');
container.appendChild(grid01);

grid02 = document.createElement('div');
grid02.classList.add('box');
container.appendChild(grid02);

grid03 = document.createElement('div');
grid03.classList.add('box');
container.appendChild(grid03);

grid04 = document.createElement('div');
grid04.classList.add('box');
container.appendChild(grid04);

grid05 = document.createElement('div');
grid05.classList.add('box');
container.appendChild(grid05);

grid06 = document.createElement('div');
grid06.classList.add('box');
container.appendChild(grid06);

grid07 = document.createElement('div');
grid07.classList.add('box');
container.appendChild(grid07);

grid08 = document.createElement('div');
grid08.classList.add('box');
container.appendChild(grid08);

grid09 = document.createElement('div');
grid09.classList.add('box');
container.appendChild(grid09);

grid10 = document.createElement('div');
grid10.classList.add('box');
container.appendChild(grid10);

grid11 = document.createElement('div');
grid11.classList.add('box');
container.appendChild(grid11);

grid12 = document.createElement('div');
grid12.classList.add('box');
container.appendChild(grid12);

grid13 = document.createElement('div');
grid13.classList.add('box');
container.appendChild(grid13);

grid14 = document.createElement('div');
grid14.classList.add('box');
container.appendChild(grid14);

grid15 = document.createElement('div');
grid15.classList.add('box');
container.appendChild(grid15);

grid16 = document.createElement('div');
grid16.classList.add('box');
container.appendChild(grid16);

// hovering causes boxes to turn pink

const hover = document.querySelectorAll('.box');
for (let i = 0; i < hover.length; i++) {
    hover[i].addEventListener('mouseover', function() {
        hover[i].style.backgroundColor = "pink";
});
}

// clicking the button reverts all boxes back to lavender

const clearButton = document.querySelector('.clearbutton');
const clear = document.querySelectorAll('.box');
for (let i = 0; i < clear.length; i++) {
    clearButton.addEventListener('click', function() {
        clear[i].style.backgroundColor = "lavender";
});
}