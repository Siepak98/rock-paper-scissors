const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const resetGame = document.getElementById('reset-game');
const scores = document.getElementById('score');
const moves = document.getElementById('moves');
const result = document.getElementById('result');
const autoPlay = document.getElementById('auto-play');
const oneHundredRock = document.getElementById('oneHundredRock');
const scoreOneHundred = document.getElementById('scoreOneHundred');
const oneHundredPaper = document.getElementById('oneHundredPaper');
const oneHundredScissors = document.getElementById('oneHundredScissors');
const resetConfirmation = document.getElementById('confirmation-reset');
const btnYes = document.querySelector('.btnYes');
const btnNo = document.querySelector('.btnNo');

let score = JSON.parse(localStorage.getItem('score')) || {
	wins: 0,
	lose: 0,
	draws: 0,
};

let testerCount = 0;

scores.innerHTML = `Wins: ${score.wins}, Losses: ${score.lose}, Draws: ${score.draws}`;

const winner = playerChoice => {
	let compChoice = '';

	const compRandom = () => {
		const randomNumber = Math.random();

		if (randomNumber >= 0 && randomNumber < 1 / 3) {
			compChoice = 'rock';
		} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
			compChoice = 'paper';
		} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
			compChoice = 'scissors';
		}
	};

	compRandom();

	if (
		(compChoice === 'rock' && playerChoice === 'rock') ||
		(compChoice === 'paper' && playerChoice === 'paper') ||
		(compChoice === 'scissors' && playerChoice === 'scissors')
	) {
		score.draws++;
		// console.log(`Computer choose ${compChoice}. Draw!
		// Wins: ${score.wins}, Losses: ${score.lose}, Draws: ${score.draws}`);
		scores.innerHTML = `Wins: ${score.wins}, Losses: ${score.lose}, Draws: ${score.draws}`;
		result.innerHTML = 'Draw!';
		moves.innerHTML = `You<img src="img/${playerChoice}-emoji.png" alt=""><img src="img/${compChoice}-emoji.png" alt="">Computer`;

		// ! how to do replacing result divs?
		// const test = document.getElementById('test');
		// const picksDiv = document.createElement('div');
		// picksDiv.classList.add('tester');
		// test.appendChild(picksDiv);
		// picksDiv.innerHTML = `Computer choose ${compChoice}. Draw!`;
		// testerCount++;
		// const tester = document.getElementsByTagName('div');
		// if (testerCount === 3) {
		// 	tester[3].remove();
		// 	tester[3].textContent = `Computer choose ${compChoice}. Draw!`;
		// } else if (testerCount === 4) {
		// 	tester[4].remove();
		// 	tester[4].textContent = `Computer choose ${compChoice}. Draw!`;
		// } else if (testerCount === 5) {
		// 	testerCount = 0;
		// 	tester[5].remove();
		// 	tester[5].textContent = `Computer choose ${compChoice}. Draw!`;
		// }
	} else if (
		(compChoice === 'paper' && playerChoice === 'rock') ||
		(compChoice === 'scissors' && playerChoice === 'paper') ||
		(compChoice === 'rock' && playerChoice === 'scissors')
	) {
		score.lose++;
		// console.log(`Computer choose ${compChoice}. You lost!
		// Wins: ${score.wins}, Losses: ${score.lose}, Draws: ${score.draws}`);
		scores.innerHTML = `Wins: ${score.wins}, Losses: ${score.lose}, Draws: ${score.draws}`;
		result.innerHTML = 'You lose!';
		moves.innerHTML = `You<img src="img/${playerChoice}-emoji.png" alt=""><img src="img/${compChoice}-emoji.png" alt="">Computer`;
	} else if (
		(compChoice === 'paper' && playerChoice === 'scissors') ||
		(compChoice === 'scissors' && playerChoice === 'rock') ||
		(compChoice === 'rock' && playerChoice === 'paper')
	) {
		score.wins++;
		// console.log(`Computer choose ${compChoice}. You win!
		// Wins: ${score.wins}, Losses: ${score.lose}, Draws: ${score.draws}`);
		scores.innerHTML = `Wins: ${score.wins}, Losses: ${score.lose}, Draws: ${score.draws}`;
		result.innerHTML = 'You win!';
		moves.innerHTML = `You<img src="img/${playerChoice}-emoji.png" alt=""><img src="img/${compChoice}-emoji.png" alt="">Computer`;
	} else {
		console.error('ERROR!!!');
	}

	localStorage.setItem('score', JSON.stringify(score));
};

const playerRandom = () => {
	const randomNumber = Math.random();

	if (randomNumber >= 0 && randomNumber < 1 / 3) {
		playerChoice = 'paper';
	} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		playerChoice = 'scissors';
	} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
		playerChoice = 'rock';
	}
	return playerChoice;
};

rock.addEventListener('click', () => {
	winner('rock');
});
paper.addEventListener('click', () => {
	winner('paper');
});
scissors.addEventListener('click', () => {
	winner('scissors');
});

window.addEventListener('keydown', e => {
	if (e.key === '1') {
		winner('rock');
	} else if (e.key === '2') {
		winner('paper');
	} else if (e.key === '3') {
		winner('scissors');
	} else if (e.key === 'a') {
		autoPlayStart();
	} else if (e.key === 'Backspace') {
		resetConfirmationDiv();
	}
});

resetGame.addEventListener('click', () => {
	resetConfirmationDiv();
});

function resetGameFunc() {
	(score.wins = 0), (score.lose = 0), (score.draws = 0);
	scores.innerHTML = `Wins: ${score.wins}, Losses: ${score.lose}, Draws: ${score.draws}`;
	result.innerHTML = '';
	moves.innerHTML = '';
	localStorage.removeItem('score');
	alert('Game reset successfully');
}

btnYes.addEventListener('click', () => {
	resetConfirmationDiv('yes');
});

btnNo.addEventListener('click', () => {
	resetConfirmationDiv('no');
});

function resetConfirmationDiv(value) {
	// resetConfirmation.textContent = 'Are you sure you want to reset the score?';
	// const btn1 = document.createElement('button');
	// btn1.classList.add('btn1');
	// btn1.classList.add('btn-reset');
	// btn1.classList.add('button-margin');
	// btn1.textContent = 'Yes';
	// resetConfirmation.appendChild(btn1);
	// const btn2 = document.createElement('button');
	// btn2.classList.add('btn2');
	// btn2.classList.add('btn-reset');
	// btn2.classList.add('button-margin');
	// btn2.textContent = 'No';
	// resetConfirmation.appendChild(btn2);
	// document.querySelector('btn1').addEventListener('click', () => {
	// 	resetGameEnd('yes');
	// });
	// const btn2Selector = document.querySelector('btn2');
	// btn2Selector.addEventListener('click', () => {
	// 	resetGameEnd('no');
	// });
	resetConfirmation.classList.toggle('hidden');
	if (value === 'yes') {
		resetGameFunc();
	} else if (value === 'no') {
		alert("Let's play the game!");
	}
}

// function resetGameEnd(value) {
// 	console.log('hi');
// 	if (value === 'yes') {
// 		resetGameFunc();
// 	} else if (value === 'no') {
// 		alert("Let's play the game!");
// 	}
// }

let interval;

autoPlay.addEventListener('click', () => {
	autoPlayStart();
});

function autoPlayStart() {
	winner(playerRandom());
	if (autoPlay.innerText === 'Auto Play') {
		autoPlay.innerText = 'Stop Play';
		interval = setInterval(() => {
			winner(playerRandom());
		}, 1000);
	} else if (autoPlay.innerText === 'Stop Play') {
		autoPlay.innerText = 'Auto Play';
		clearInterval(interval);
		// interval = null;
	}
}

oneHundredRock.addEventListener('click', () => {
	for (let i = 1; i <= 100; i++) {
		winner('rock');
	}
});

oneHundredPaper.addEventListener('click', () => {
	for (let i = 1; i <= 100; i++) {
		winner('paper');
	}
});

oneHundredScissors.addEventListener('click', () => {
	for (let i = 1; i <= 100; i++) {
		winner('scissors');
	}
});
