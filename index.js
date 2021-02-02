// const grid = document.querySelector('.grid');
//     let width = 9;
//     let noOfBombs = 10;
//     const random = [];
//     const bombs = [];
//     let flag1 = true;
//     let grandTOtal =document.getElementById("gameScore");
//     let resultDisplay =document.getElementById("resultDisplay");

//     function createBoard() {
    
//         var upperBound = width*width + 1;
    
//         while(random.length < noOfBombs) {
//             var uniqueNo = Math.floor(Math.random()*upperBound);
//             if(random.indexOf(uniqueNo) === -1)
//                 random.push(uniqueNo);
//         }

//         const emptyArray = Array(width*width - noOfBombs).fill('safe');

//         const gameArray = emptyArray.concat(random);

//         const suffledArray = gameArray.sort(() => Math.random() - 0.5);

//         var total = 1;
        
//         for(let i= 0;i<width*width; i++) {
//             let flag = false;
//             const square = document.createElement('div');
//             square.setAttribute('id',"cell_"+Number(i+1));
//             square.setAttribute('class',suffledArray[i]);// or square.classList.add(shuffledArray[i]);
//             if(suffledArray[i] !== 'safe')
//                 bombs.push(square);
//             grid.appendChild(square);
//             square.addEventListener('click', clicked);
//             function clicked() {
//                 if(suffledArray[i] !== "safe")
//                 {
//                     square.className = "bomb";
//                     showReaminingBombs();
//                     flag1 = false;
//                     resultDisplay.innerText = "game over";
//                 }
//                 else
//                 {
//                     if(!flag && flag1)
//                     {
//                         square.className = "checked";
//                         grandTOtal.innerText = total++;
//                         if(total === 72)
//                            {
//                                resultDisplay.innerText = "win";
//                             //    break;
//                            }
//                         flag = true;
//                     }
                   
//                 }
        
//               }
//         }
//     }

   
//     createBoard();

//     function showReaminingBombs() {
//         for(let i=0; i<noOfBombs; i++){
//             bombs[i].className = "bomb";
//           }
//     }

//     function reload() {
//         location.reload();
//     }


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