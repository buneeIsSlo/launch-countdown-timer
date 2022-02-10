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
        this.timerFront = document.querySelector(`[${this.selectors.timerFront}]`);
        this.timerBack = document.querySelector(`[${this.selectors.timerBack}]`);

        this.cardDataset = this.card.dataset.card;
        this.frontDataset = this.timerFront.dataset.front;
        this.backDataset = this.timerBack.dataset.back;
        this.countdown;
        this.currentTime = 0;
        this.nextTime = 0;
        this.firstAnimation = false;
        this.initialTime = 0;
        this.duration = 500;
        this.isCardFlipping = false;

        return true;
    }

    setUpEvents() {
        this.timer(this.time);
    }

    timer(seconds) {
        const now = Date.now();
        const then = now + (seconds * 1000);

        this.displayTimeLeft(seconds);
        this.firstAnimation = true;

        this.countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            // console.log([this.frontDataset, this.backDataset]);

            if (secondsLeft < 0) {
                clearInterval(this.countdown);
                return;
            }

            //console.log(secondsLeft);
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
        console.log([this.days, this.hours, this.minutes, this.remainderSeconds]);

        if (!this.firstAnimation) return;

        switch (this.cardDataset) {
            case "days":
                this.currentTime = `${this.days + 1}`;

                if (this.initialTime !== this.currentTime) {
                    this.nextTime = this.days;
                    this.flipDown(this.currentTime, this.nextTime);
                    //console.log([this.nextTime, this.hours, this.minutes, this.remainderSeconds]);
                }
                break;

            case "hours":
                this.currentTime = `${this.hours + 1}`;

                if (this.initialTime !== this.currentTime) {
                    this.nexTime = this.hours;
                    this.flipDown(this.currentTime, this.nextTime);
                }
                break;

            case "minutes":
                this.currentTime = `${this.minutes + 1}`;
                console.log(this.currentTime);

                if (this.initialTime !== this.currentTime) {
                    this.nextTime = this.minutes;
                    this.flipDown(this.currentTime, this.nextTime);
                }
                break;

            case "seconds":
                this.currentTime = `${this.remainderSeconds + 1}`;
                this.nextTime = this.remainderSeconds;
                console.log([this.currentTime, "10"]);
                this.flipDown(this.currentTime, "10");
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
        switch (this.cardDataset) {
            case "days":
                if (time > 8 || time === 0) {
                    this.frontDataset = "00";
                }
                else if (time <= 7 || time > 0) {
                    this.frontDataset = `0${time}`;
                }
                break;

            case "hours":
                if (time > 23 || time === 0) {
                    this.frontDataset = "00";
                }
                else if (time >= 10) {
                    this.frontDataset = time;
                }
                else if (time < 10) {
                    this.frontDataset = `0${time}`;
                }
                break;

            default:
                console.log("iss secs");
                if (time > 59 || time == 0) {
                    this.frontDataset = "00";
                }
                else if (time >= 10) {
                    this.timerFront.dataset.front = time;
                }
                else if (time < 10) {
                    this.frontDataset = `0${time}`;
                }
                break;
        }
    }

    cardBackTime(time) {
        if (time > 59 || time === 0) {
            this.backDataset = "00";
        }
        else if (time >= 10) {
            this.backDataset = time;
        }
        else if (time < 10) {
            this.backDataset = `0${time}`;
        }
    }
}