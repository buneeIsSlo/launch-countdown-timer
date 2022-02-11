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
        this.now = Date.now();
        this.then = this.now + (seconds * 1000);

        this.displayTimeLeft(seconds);
        this.firstAnimation = true;
        console.log(this.cardDataset);

        this.countdown = setInterval(() => {
            const secondsLeft = Math.round((this.then - Date.now()) / 1000);
            // console.log([this.timerFront.dataset.front, this.timerBack.dataset.back]);

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
        //console.log([this.days, this.hours, this.minutes, this.remainderSeconds]);

        if (!this.firstAnimation) return;

        if (this.cardDataset === "days") {
            this.currentTime = `${this.days + 1}`;

            if (this.initialTime != this.currentTime) {
                this.nextTime = this.days;
                this.flipDown(this.currentTime, this.nextTime);
                //console.log("called flip from days");
            }
        }

        else if (this.cardDataset === "hours") {
            this.currentTime = `${this.hours + 1}`;
            //console.log([this.nextTime, this.hours, this.minutes, this.remainderSeconds]);
            if (this.initialTime != this.currentTime) {
                this.nexTime = this.hours;
                console.log([this.currentTime, this.nextTime]);
                this.flipDown(this.currentTime, this.nextTime);
                //console.log("called flip from hours");
            }
        }

        else if (this.cardDataset === "minutes") {
            this.currentTime = `${this.minutes + 1}`;

            if (this.initialTime != this.currentTime) {
                this.nextTime = this.minutes;
                this.flipDown(this.currentTime, this.nextTime);
                //console.log("called flip from mins");
            }
        }

        else {
            this.currentTime = `${this.remainderSeconds + 1}`;
            this.nextTime = this.remainderSeconds;
            //console.log([this.currentTime, this.nextTime]);
            this.flipDown(this.currentTime, this.nextTime);
            //console.log("called flip from secs");
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
        time = +time;
        this.initialTime = time + 1;

        if (this.cardDataset === "days") {
            if (time > 8 || time === 0) {
                this.timerFront.dataset.front = "00";
            }
            else if (time <= 7 || time > 0) {
                this.timerFront.dataset.front = `0${time}`;
            }
        }

        else if (this.cardDataset === "hours") {
            if (time > 23) {
                this.timerFront.dataset.front = "00";
                console.log(time, "above");
            }
            else if (time >= 10) {
                this.timerFront.dataset.front = time;
                console.log(time, "between");
            }
            else if (time < 10 && time > 0) {
                this.timerFront.dataset.front = `0${time}`;
                console.log(time, "below");
            }
        }

        else {
            //console.log(["called flip from secs/mins", time, this.cardDataset]);
            if (time > 59 || time == 0) {
                this.timerFront.dataset.front = "00";
            }
            else if (time >= 10) {
                this.timerFront.dataset.front = time;
            }
            else if (time < 10) {
                this.timerFront.dataset.front = `0${time}`;
            }
        }
    }

    cardBackTime(time) {
        if (time > 59 || time == 0) {
            this.timerBack.dataset.back = "00";
        }
        else if (time >= 10) {
            this.timerBack.dataset.back = time;
        }
        else if (time < 10) {
            this.timerBack.dataset.back = `0${time}`;
        }
    }
}