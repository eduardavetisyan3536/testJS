let boxOver = document.querySelector(".box-over");
let quizBox = document.querySelectorAll(".quiz_box");
let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
console.log(quizBox);

// for (let i = 0; i <= quizBox.length; i++) {

//         if (b >= i) {
//             next.addEventListener("click", () => {
//                 quizBox[i].style.marginLeft = "-20%";
//                 console.log('yes');
//                 console.log(5156453435);
//                 b++
//             });
//         }
//         console.log(b, 'count');
//         console.log(i, 'iiiiiiiii');

// }
function question() {
  btn.addEventListener("click", () => {
    quizBox[0].style.marginLeft = "-20%";
  });
  btn1.addEventListener("click", () => {
    quizBox[1].style.marginLeft = "-20%";
  });
  btn2.addEventListener("click", () => {
    quizBox[2].style.marginLeft = "-20%";
  });
  btn3.addEventListener("click", () => {
    quizBox[3].style.marginLeft = "-20%";
  });
  btn4.addEventListener("click", () => {
    quizBox[4].style.marginLeft = "-20%";
  });
  again()
}

let restart = document.querySelector('.res')
function again() {
    for (const iterator of boxOver.children) {
        
        restart.addEventListener('click', () =>{
            iterator.style.marginLeft = "0%";
    
        })
    }
}
question()


