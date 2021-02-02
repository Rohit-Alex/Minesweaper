     const grid = document.querySelector('.grid');
    let width = 9;
    let noOfBombs = 10;
    const random = []; // to store the bombs at unique positions
    const bombs = []; // to copy the bombs position to display later
    const suffledArray = [];  // actual array containing bombs and safe position. Bombs at that particular itself
    let grandTotal =document.getElementById("gameScore");
    let resultDisplay =document.getElementById("resultDisplay");

    var upperBound = width*width ;
    
        while(random.length < noOfBombs) {
            var uniqueNo = Math.floor(Math.random()*upperBound);
            if(random.indexOf(uniqueNo+1) === -1)
                random.push(uniqueNo+1);
        }

        function createBoard() {
        for(let i= 0;i<width*width; i++) {
            if(random.indexOf(i+1) === -1){
                suffledArray.push('safe');
              }else{
                suffledArray.push(i+1);
              }
            const square = document.createElement('div');
            square.setAttribute('id',"cell_"+Number(i+1));
            square.setAttribute('class',suffledArray[i]);
            if(suffledArray[i] !== 'safe')
                bombs.push(square);
            grid.appendChild(square);
        }
    }
    createBoard();
    console.log(suffledArray);
   
    var total = 1;
    document.querySelector(".grid").addEventListener('click',handler);
    
    function handler(e) {
        if(e.target.className !== "safe" && e.target.className !== "checked" ) {
            e.target.className = "bomb";
            showReaminingBombs();
            resultDisplay.innerText = "game over";
            document.querySelector(".grid").removeEventListener('click',handler);
        }
       if(e.target.className === "safe"){
                e.target.className = "checked";
                grandTotal.innerHTML = total++;
                if( total === 72) {
                    resultDisplay.innerText = "win";
                    document.querySelector(".grid").removeEventListener('click',handler);
                }
            }
    }
    
    function showReaminingBombs() {
        for(let i=0; i<noOfBombs; i++){
            bombs[i].className = "bomb";
          }
    }

    function reload() {
        location.reload();
    }