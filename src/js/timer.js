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
            activeClass: "running"
        }

        this.card = document.querySelector(`[${this.selectors.card}]`);
        this.timerFront = this.card.querySelector(`[${this.selectors.timerFront}]`);
        this.timerBack = this.card.querySelector(`[${this.selectors.timerBack}]`);
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

    timer(seconds) {
        const now = Date.now();
        const endTime = now + (seconds * 1000);

        this.displayTimeLeft(seconds);
        this.firstAnimation = true;

        const countdown = setInterval(() => {
            const secondsLeft = Math.round((endTime - Date.now()) / 1000);

            if (secondsLeft < 0) {
                clearInterval(countdown);
                return;
            }

            this.displayTimeLeft(secondsLeft);
        }, 1000);
    }

    displayTimeLeft(seconds) {
        this.days = Math.floor(seconds / 86400);
        this.remainderHours = seconds % 86400;
        this.hours = Math.floor(this.remainderHours / 3600);
        this.remainderMinutes = seconds % 3600;
        this.minutes = Math.floor(this.remainderMinutes / 60);
        this.remainderSeconds = seconds % 60;

        if (!this.firstAnimation) return;

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
                }
                break;

            default:
                this.currentTime = `${this.remainderSeconds + 1}`;
                this.nextTime = this.remainderSeconds;
                this.flipDown(this.currentTime, this.nextTime);
        }

    }

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

    cardBackTime(time) {
        this.setTime(time, 59, this.timerBack, "back");
    }

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
}