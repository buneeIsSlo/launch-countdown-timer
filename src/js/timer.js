export default class Timer {

    constructor(time, element) {
        this.time = time;
        this.element = element;
        if (!this.vars()) return false;
        this.setUpEvents();
    }

    vars() {
        this.selectors = {
            card: this.element,
            timerFront: "data-front",
            timerBack: "data-back",
            screenReaderEle: "data-sr",
            activeClass: "running"
        }

        this.card = document.querySelector(`[${this.selectors.card}]`);
        this.timerFront = this.card.querySelector(`[${this.selectors.timerFront}]`);
        this.timerBack = this.card.querySelector(`[${this.selectors.timerBack}]`);
        this.screenReaderEle = document.querySelector(`[${this.selectors.screenReaderEle}]`);
        if (!this.card || !this.timerFront || !this.timerBack) return false;

        this.cardDataset = this.card.dataset.card;
        this.countdown;
        this.currentTime = 0;
        this.nextTime = 0;
        this.initialTime = 0;
        this.duration = 500;
        this.firstAnimation = false;
        this.isCardFlipping = false;

        return true;
    }

    setUpEvents() {
        this.timer(this.time);
    }

    /* Function to calculate and begin countdown */
    timer(seconds) {
        const now = Date.now();
        const endTime = now + (seconds * 1000);

        // This flips all the cards from "00" to thier respective time value
        this.firstAnimation = true;

        // Set countdown interval
        const countdown = setInterval(() => {
            const secondsLeft = Math.round((endTime - Date.now()) / 1000);

            // Clear inteval if seconds left is less than 0
            if (secondsLeft < 0) {
                clearInterval(countdown);
                return;
            }

            // Display time left
            this.displayTimeLeft(secondsLeft);
        }, 1000);
    }

    /* Function to display the time left */
    displayTimeLeft(seconds) {

        this.days = Math.floor(seconds / 86400); // seconds to days
        this.remainderHours = seconds % 86400;
        this.hours = Math.floor(this.remainderHours / 3600); // seconds to hours
        this.remainderMinutes = seconds % 3600;
        this.minutes = Math.floor(this.remainderMinutes / 60); // seconds to minutes
        this.remainderSeconds = seconds % 60;

        // If it's the initial flip animation do nothing.
        if (!this.firstAnimation) return;

        // Change time based on card's dataset
        switch (this.cardDataset) {
            case "days":
                this.currentTime = `${this.days + 1}`;

                if (this.initialTime != this.currentTime) {
                    this.nextTime = this.days;
                    this.flipDown(this.currentTime, this.nextTime);
                }
                break;

            case "hours":
                this.currentTime = `${this.hours + 1}`;

                if (this.initialTime != this.currentTime) {
                    this.nextTime = this.hours;
                    this.flipDown(this.currentTime, this.nextTime);
                }
                break;

            case "minutes":
                this.currentTime = `${this.minutes + 1}`;

                if (this.initialTime != this.currentTime) {
                    this.nextTime = this.minutes;
                    this.flipDown(this.currentTime, this.nextTime);
                    this.handleScreenReaders(); // Relay the time left for screen readers
                }
                break;

            default:
                this.currentTime = `${this.remainderSeconds + 1}`;
                this.nextTime = this.remainderSeconds;
                this.flipDown(this.currentTime, this.nextTime);
        }

    }

    /* Function to add card flip-down animation */
    flipDown(currentTime, nextTime) {
        if (this.isCardFlipping) return false;

        this.isCardFlipping = true;
        this.cardFrontTime(currentTime);
        this.cardBackTime(nextTime);
        this.card.classList.add(`${this.selectors.activeClass}`);

        setTimeout(() => {
            this.card.classList.remove(`${this.selectors.activeClass}`);
            this.isCardFlipping = false;
            this.cardFrontTime(nextTime);
        }, this.duration)
    }

    /* Function to set currentTime to the front of the card */
    cardFrontTime(time) {
        this.initialTime = +(time) + 1;

        if (this.cardDataset === "days") {
            this.setTime(time, this.days, this.timerFront, "front");
        }
        else if (this.cardDataset === "hours") {
            this.setTime(time, 23, this.timerFront, "front");
        }
        else {
            this.setTime(time, 59, this.timerFront, "front");
        }
    }

    /* Function to set nextTime to the back of the card */
    cardBackTime(time) {
        this.setTime(time, 59, this.timerBack, "back");
    }

    /* Function to format and set time */
    setTime(time, limit, card, side) {
        if (time > limit) {
            card.dataset[side] = "00";
        }
        else if (time >= 10) {
            card.dataset[side] = time;
        }
        else if (time < 10) {
            card.dataset[side] = `0${time}`;
        }
    }

    /* Function to updat and handle screen readers */
    handleScreenReaders() {
        this.screenReaderEle.innerHTML = `Time before launch: ${this.days} days ${this.hours} hours ${this.minutes} minutes`;
    }
}