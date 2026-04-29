"use strict";

export let analagoueView = {

    init(parent) {
        this.clock = document.createElement("div");
        this.clock.classList.add("clock");

        this.hourHand = document.createElement("div");
        this.hourHand.classList.add("hourHand");

        this.minuteHand = document.createElement("div");
        this.minuteHand.classList.add("minuteHand");

        this.secondHand = document.createElement("div");
        this.secondHand.classList.add("secondHand");

        this.clock.append(this.hourHand, this.minuteHand, this.secondHand);
        parent.appendChild(this.clock);
    },

    update(time) {
        let hDeg = time.hours * 30 + time.minutes * 0.5 - 90;
        let mDeg = time.minutes * 6 - 90;
        let sDeg = time.seconds * 6 - 90;

        this.hourHand.style.transform = `rotate(${hDeg}deg)`;
        this.minuteHand.style.transform = `rotate(${mDeg}deg)`;
        this.secondHand.style.transform = `rotate(${sDeg}deg)`;
    }
};
