class SmartHike {
	constructor(username = '') {
		this.username = username;
		this.goals = {};
		this.listOfHikes = [];
		this.resources = 100;
	}

	addGoal(peak = ' ', altitude = 0) {
		let goal = this.goals[peak];
		if (goal) {
			return `${peak} has already been added to your goals`;
		}

		this.goals[peak] = Number(altitude);
		return `You have successfully added a new goal - ${peak}`;
	}

	hike(peak, time, difficultyLevel) {
		let goal = this.goals[peak];
		if (!goal) {
			throw new Error(`${peak} is not in your current goals`);
		}
		if (this.resources === 0) {
			throw new Error("You don't have enough resources to start the hike");
		}
		let difference = this.resources - time * 10;
		if (difference < 0) {
			return "You don't have enough resources to complete the hike";
		}

		this.listOfHikes.push({
			peak,
			time: Number(time),
			difficultyLevel,
		});

		this.resources = difference;
		return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
	}

	rest(time) {
		this.resources += Number(time) * 10;
		if (this.resources >= 100) {
			return `Your resources are fully recharged. Time for hiking!`;
		}
		return `You have rested for ${time} hours and gained ${
			time * 10
		}% resources`;
	}

	showRecord(criteria) {
		let currHikes = this.listOfHikes.filter(
			(x) => x.difficultyLevel === criteria
		);
		let shortestHike = currHikes.sort((a, b) => a.time - b.time)[0];
		if (!shortestHike && criteria !== 'all') {
			return `${this.username} has not done any ${criteria} hiking yet`;
		}

		let buff = '';
		if (criteria === 'all') {
			buff += 'All hiking records:\n';
			for (let currHike of this.listOfHikes.sort((a, b) => a.time - b.time)) {
				buff += `${this.username} hiked ${currHike.peak} for ${currHike.time} hours`;
			}
			return buff;
		} else {
			return `${this.username}'s best ${criteria} hike is ${shortestHike.peak} peak, for ${shortestHike.time} hours`;
		}
	}
}

let newHike = new SmartHike('Vili');

console.log(newHike.addGoal('Musala', 2925));
console.log(newHike.addGoal('Musala', 2925));
console.log(newHike.showRecord('easy'));
console.log(newHike.addGoal('Vihren', 2914));
console.log(newHike.hike('Vihren', 4, 'hard'));
console.log(newHike.showRecord('hard'));
console.log(newHike.addGoal('Rui', 1706));
console.log(newHike.hike('Rui', 3, 'easy'));
console.log(newHike.showRecord('all'));
