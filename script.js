let newGamebtn = document.querySelector(".new-game");
let diceImg = document.getElementById("diceimg");
let rollDicebtn = document.querySelector(".roll");
let Holdbtn = document.querySelector('.hold')
let player1 = document.getElementById("player-0");
let player2 = document.getElementById("player-1");
let p1score = document.getElementById("score--0");
let p2score = document.getElementById("score--1");
let p1currentscore = document.getElementById("currentscore--0");
let p2currentscore = document.getElementById("currentscore--1");

let score, currentScore, activePlayer, playing;

p1score.textContent = 0;
p2score.textContent = 0;
p1currentscore.textContent = 0;
p2currentscore.textContent = 0;
diceImg.classList.add("hidden");

let init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  p1currentscore.textContent = 0;
  p2currentscore.textContent = 0;
  p1score.textContent = 0;
  p2score.textContent = 0;
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  player1.classList.add("player--active");
  player2.classList.add("player--active");
};
init();

let changeUser = () => {
  document.getElementById(`currentscore--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  console.log("activePlayer", activePlayer);
  currentScore = 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};

let rollDice = () => {
  if (playing) {
    let randomnumber = Math.trunc(Math.random() * 6) + 1;
    console.log(randomnumber);
    diceImg.src = `./images/dice-${randomnumber}.png`;
    diceImg.classList.remove("hidden");
    if (randomnumber === 1) {
      changeUser();
    } else {
      currentScore += randomnumber;
      document.getElementById(`currentscore--${activePlayer}`).textContent =
        currentScore;
    }
  }
};

let hold =()=>{
    if(playing){
        scores[activePlayer]+=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
        if(scores[activePlayer]>10){
            playing = false;
            diceImg.classList.add("hidden");
            document.querySelector(`.player-${activePlayer}`).classList.add('player--winner');
            // `player${activePlayer}`.classList.add('player--winner');
        }
        else{
            changeUser()
        }

    }
}
rollDicebtn.addEventListener("click", rollDice);
Holdbtn.addEventListener('click',hold)
newGamebtn.addEventListener('click',init)