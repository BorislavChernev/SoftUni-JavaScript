class footballTeam {
	constructor(clubName, country) {
		this.clubName = clubName;
		this.country = country;
		this.invitedPlayers = [];
	}

	newAdditions(footballPlayers) {
		let buff = 'You successfully invite';

		for (let i = 0; i < footballPlayers.length; i++) {
			let curr = footballPlayers[i];
			curr = curr.split('/');

			let name = curr[0];
			let age = curr[1];
			let playerValue = curr[2];

			let currPlayer = this.invitedPlayers.find((x) => x.name == name);
			if (currPlayer !== undefined) {
				if (currPlayer.playerValue <= playerValue) {
					currPlayer.playerValue = playerValue;
				}
			} else {
				this.invitedPlayers.push({
					name,
					age: Number(age),
					playerValue: Number(playerValue),
				});
			}

			buff += ` ${name}`;
			if (i < footballPlayers.length - 1) {
				buff += ',';
			}
		}
		buff += '.';
		return buff;
	}

	signContract(selectedPlayer) {
		selectedPlayer = selectedPlayer.split('/');

		let name = selectedPlayer[0];
		let playerOffer = Number(selectedPlayer[1]);

		let currPlayer = this.invitedPlayers.find((x) => x.name == name);
		if (currPlayer === undefined) {
			throw new Error(`${name} is not invited to the selection list!`);
		}

		if (playerOffer < currPlayer.playerValue) {
			throw new Error(
				`The manager's offer is not enough to sign a contract with ${name}, ${
					currPlayer.playerValue - playerOffer
				} million more are needed to sign the contract!`
			);
		}
		let copyValue = playerOffer;
		currPlayer.playerValue = 'Bought';

		return `Congratulations! You sign a contract with ${name} for ${copyValue} million dollars.`;
	}

	ageLimit(name, age) {
		let currPlayer = this.invitedPlayers.find((x) => x.name == name);
		if (currPlayer === undefined) {
			return `${name} is not invited to the selection list!`;
		}

		if (currPlayer.age < age) {
			if (age - currPlayer.age < 5) {
				return `${name} will sign a contract for ${
					age - currPlayer.age
				} years with ${this.clubName} in ${this.country}!`;
			}
			return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
		}

		return `${name} is above age limit!`;
	}

	transferWindowResult() {
		let buff = 'Players list:\n';

		let sorted = this.invitedPlayers.sort((a, b) =>
			a.name.localeCompare(b.name)
		);
		for (let i = 0; i < sorted.length; i++) {
			let currPlayer = sorted[i];

			buff += `Player ${currPlayer.name}-${currPlayer.playerValue}`;
			if (i < sorted.length - 1) {
				buff += '\n';
			}
		}

		return buff;
	}
}

let football = new footballTeam('Barcelona', 'Spain');

console.log(
	football.newAdditions([
		'Kylian Mbappé/23/160',
		'Lionel Messi/35/50',
		'Pau Torres/25/52',
	])
);
console.log(football.signContract('Lionel Messi/60'));
console.log(football.signContract('Kylian Mbappé/240'));
console.log(football.signContract('Barbukov/10'));
