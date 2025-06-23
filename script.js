// const boxes = document.querySelectorAll(".box");

// const scoreDisplay= document.querySelector("#score");

// const colorDysplay= document.querySelector("#rgbColor")

// const startBtn = document.querySelector("#start");


// const startMedyum= document.querySelector("#startMedium")
// let score= 0;

// let currentAnswer=-1;

// let colors= [];

// startBtn.addEventListener("click", startEasyGame);


// boxes.forEach((box, i )=>{
//     box.addEventListener("click", ()=>{
//         if(i=== currentAnswer){
//             alert("correct")
//             score +=10;
//             startEasyGame()
//                startMedyumGame()
//         }else{
//             alert("wrong")
//             score -=5
//             if(score<0) score=0;
//         }
//         scoreDisplay.textContent = score
//     })
// })

// function startEasyGame(){
// colors= getRandomColors(3);

// currentAnswer= Math.floor(Math.random()*3);

// colorDysplay.textContent=colors[currentAnswer];

// boxes.forEach((box, i)=>{

// box.style.backgroundColor=colors[i];
// box.classList.add("hover")

// })
// }



// function getRandomColors(count){
//     const arr=[];

//     for(let i=0; i<count; i++){
//         const r = Math.floor(Math.random()*256)
//         const g = Math.floor(Math.random()*256)
//         const b = Math.floor(Math.random()*256)
//         arr.push(`rgb(${r},${g},${b})`)
//     }
//     return arr
// }



// startMedyum.addEventListener("click", startMedyumGame)



// function startMedyumGame(){
//     colors=getRandomColors(6);
//     currentAnswer=Math.floor(Math.random()*6);
//     colorDysplay.textContent=colors[currentAnswer];

// boxes.forEach((box, i)=>{

// box.style.backgroundColor=colors[i];
// box.classList.add("hover")

// })
// }
// // boxes.forEach((box, i )=>{
// //     box.addEventListener("click", ()=>{
// //         if(i=== currentAnswer){
// //             alert("correct")
// //             score +=10;
         
// //         }else{
// //             alert("wrong")
// //             score -=5
// //             if(score<0) score=0;
// //         }
// //         scoreDisplay.textContent = score
// //     })
// // })

const scoreDisplay= document.getElementById("score");

const colorDisplay= document.getElementById("rgbColor");

const startEasyBtn = document.getElementById("start");

const startMedyumBtn= document.getElementById("startMedium");

const startHardBtn = document.getElementById("startHard");

const resetGameBtn = document.getElementById("reset");

const swapBtn = document.getElementById("swap");

const boxes = document.querySelectorAll(".box");


let score = 0;

let colors = [];

let currentAnswer = -1;


let rotation=0;

startEasyBtn.addEventListener("click", startEasyGame);

function getRandomColors(numOfColors){
    let randomArr=[]
    for(let i=0; i<numOfColors; i++){
        const r= Math.floor(Math.random()*256);
        const g= Math.floor(Math.random()*256);
        const b= Math.floor(Math.random()*256);
        randomArr.push(`rgb(${r}, ${g}, ${b})`)
    }

    return randomArr
}
console.log(getRandomColors(3))

function startEasyGame(){
    colors=getRandomColors(3);
    currentAnswer= Math.floor(Math.random()*3);
    colorDisplay.textContent=colors[currentAnswer];

    boxes.forEach((box,i)=>{
        box.style.backgroundColor= colors[i];
        box.classList.add("hover")
        rotation+=360
        box.style.transform=`rotate(${rotation}deg)`
    })

}


boxes.forEach((box,i)=>{
    box.addEventListener("click", ()=>{
        
        if(i===currentAnswer){
            score +=10;
            startEasyGame();
            Swal.fire({
  title: "Correct!",
  icon: "success",
  draggable: true
});
        }else{
            score-=5;
            Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Incorrect Answer!",
});
            if(score<0){
                score=0;
            }
        }
        scoreDisplay.textContent=score;
    })
})


function startMedyumGame(){
    colors= getRandomColors(6);
    currentAnswer= Math.floor(Math.random()*6);
    colorDisplay.textContent=colors[currentAnswer];
    boxes.forEach((box,i)=>{
        box.style.backgroundColor=colors[i];
        box.classList.add("hover")
        rotation+=360
        box.style.transform=`rotate(${rotation}deg)`
    }
    )
}

startMedyumBtn.addEventListener("click",startMedyumGame);

function startHardGame(){
    colors=getRandomColors(9);
    currentAnswer=Math.floor(Math.random()*9);
    colorDisplay.textContent=colors[currentAnswer];
    boxes.forEach((box,i)=>{
        box.style.backgroundColor=colors[i];
        box.classList.add("hover");
        rotation+=360
        box.style.transform=`rotate(${rotation}deg)`
    })
}


startHardBtn.addEventListener("click", startHardGame);


resetGameBtn.addEventListener("click", ()=>{
    colorDisplay.textContent='';
    scoreDisplay.textContent=0;
    boxes.forEach(box=>{
        rotation+=360
        box.style.backgroundColor="";
        box.style.transform=`rotate(${rotation}deg)`

    })

})


