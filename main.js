const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const resetGame = document.getElementById('reset-game');
const scores = document.getElementById('score');
const moves = document.getElementById('moves');
const result = document.getElementById('result');

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

rock.onclick = () => {
	winner('rock');
};
paper.onclick = () => {
	winner('paper');
};
scissors.onclick = () => {
	winner('scissors');
};

resetGame.onclick = () => {
	(score.wins = 0), (score.lose = 0), (score.draws = 0);
	scores.innerHTML = `Wins: ${score.wins}, Losses: ${score.lose}, Draws: ${score.draws}`;
	result.innerHTML = '';
	moves.innerHTML = '';
	localStorage.removeItem('score');
	alert('Game reset successfully');
};
