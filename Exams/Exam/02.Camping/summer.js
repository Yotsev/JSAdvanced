class SummerCamp {

    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.listOfParticipants = [];
        this.priceForTheCamp = {
            'child': 150,
            'student': 300,
            'collegian': 500
        };
    }

    registerParticipant(name, conditon, money) {
        let participant = {
            name,
            conditon,
            power: 100,
            wins: 0
        };

        if (this.listOfParticipants.some(x => x.name === name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (!this.priceForTheCamp[conditon]) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.priceForTheCamp[conditon] > money) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        this.listOfParticipants.push(participant);

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        if (!this.listOfParticipants.some(x => x.name === name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        // // mutating method
        // let indexOfParticipant = this.listOfParticipants.findIndex(x=>x.name === name);
        // this.listOfParticipants.splice(indexOfParticipant,1);

        this.listOfParticipants = this.listOfParticipants.filter(x => x.name != name);

        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let participantOne = this.listOfParticipants.find(x => x.name === participant1)
        let participantTwo = null;
        if (typeOfGame === 'Battleship') {

            if (!participantOne) {
                throw new Error('Invalid entered name/s.');
            }

            participantOne.power += 20;

            return `The ${participantOne.name} successfully completed the game ${typeOfGame}.`;

        } else if (typeOfGame === 'WaterBalloonFights') {
            let participantTwo = this.listOfParticipants.find(x => x.name === participant2);

            if (!participantTwo) {
                throw new Error('Invalid entered name/s.');
            }

            if (participantOne.conditon != participantTwo.conditon) {
                throw new Error('Choose players with equal condition.');
            }

            let winner = '';

            if (participantOne.power > participantTwo.power) {
                participantOne.wins++;
                winner = participantOne.name;

            } else if (participantOne.power < participantTwo.power) {
                participantTwo.wins++;
                winner = participantTwo.name;

            } else {
                return 'There is no winner.';
            }

            return `The ${winner} is winner in the game ${typeOfGame}.`;
        }
    }

    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .forEach(x => {
                result.push(`${x.name} - ${x.conditon} - ${x.power} - ${x.wins}`)
            });
        return result.join('\n');
    }
}

let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
console.log(camp.registerParticipant('Petar Petarson', 'child', 300));
console.log(camp.registerParticipant('Sara Dickinson', 'child', 200));
console.log(camp.timeToPlay('Battleship', 'Sara Dickinson'));
console.log(camp.timeToPlay('WaterBalloonFights', 'Sara Dickinson','Petar Petarson'));
console.log(camp.toString());