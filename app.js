let gameSeq = [];
let userSeq = [];

let start = false;
let level = 0;
let btn = ['yellow', 'red', 'purple', 'green'];
let h2 = document.querySelector('h2');
let h1 = document.querySelector(".highScore");


function btnFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 500);
}

function userflash(btn) {
    btn.classList.add('userflash');
    setTimeout(function () {
        btn.classList.remove('userflash');
    }, 500);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let random = Math.floor(Math.random() * 4);
    let randomColor = btn[random];
    let btns = document.querySelector(`.${randomColor}`);

    if (btns) {
        btnFlash(btns);
    }
    gameSeq.push(randomColor);
    console.log(gameSeq);
}

document.addEventListener('keypress', function () {
    if (start == false) {
        console.log("Game started");
        start = true;
        levelUp();
    }
});

function btnPress() {
    let btn = this;
    userflash(btn);

    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerText = `GAME OVER your high score is ${level}
    press any key to start`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white";
        }, 200);
        reset();
    }
}

let allBtn = document.querySelectorAll('.btn');
for (button of allBtn) {
    button.addEventListener("click", btnPress);
}

function reset() {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
};

function newScore(){
    if(level <= h1){
        h1.innerText = `your highest score ${h1}`;
    }
}