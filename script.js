document.addEventListener("DOMContentLoaded", function () {
    const colorInput=document.querySelector(".color-input");
    let color=colorInput.value;
    let isErasing=false

    colorInput.addEventListener("input",()=>{
        color=colorInput.value;
        addEvent(color);
    });
    createGrid(16);
    
    //Erase Button
    const eraseButton=document.querySelector("#erase-btn");
    eraseButton.addEventListener("click",()=>{
        isErasing = !isErasing;
        eraseButton.classList.toggle("active", isErasing); 
    });
    //ClearButton
    const clearButton = document.querySelector("#clear-btn");
    clearButton.addEventListener("click", clear);
    //Grid-size Button
    const gridSize = document.querySelector("#size-btn");
    gridSize.addEventListener("click", changeSize);

    //Functions
    function createGrid(n) {
        const gridContainer = document.getElementById('container');
        gridContainer.innerHTML = '';
        for (let i = 0; i < n * n; i++) {
            const div = document.createElement('div');
            div.className = 'grid-item';
            div.style.width= `calc(100% / ${n})`;
            div.style.paddingBottom=`calc(100%/${n})`;
            gridContainer.appendChild(div);
        }
        addEvent(colorInput.value);
    }
    function addEvent(color) {
        const gridItem = document.querySelectorAll(".grid-item");
    
        gridItem.forEach(item => {
            item.addEventListener("mouseover", (event) => {
                if (isErasing) {
                    event.target.style.backgroundColor = "white";
                } else {
                    event.target.style.backgroundColor = color;
                }
            });
        });
    }
    function clear() {
        const gridItem = document.querySelectorAll(".grid-item");
    
        gridItem.forEach(item => {
            item.style.backgroundColor = "white";
        });
    }
    function changeSize() {
        let size = parseInt(prompt("Enter the number of squares per side (1-100):"));
    
        while (isNaN(size) || size < 1 || size > 100) {
            alert("Invalid input! Please enter a number between 1 and 100.");
            size = parseInt(prompt("Enter the number of squares per side (1-100):"));
        }
    
        isErasing=false;
        createGrid(size);
    }
});
