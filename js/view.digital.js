"use strict";

export let digitalView = {

    init(parent) {
        this.display = document.createElement("div");
        this.display.classList.add("digital");
        this.display.textContent = "00:00:00";
        parent.appendChild(this.display);
    },

    update(time) {
        let h = String(time.hours).padStart(2, "0");
        let m = String(time.minutes).padStart(2, "0");
        let s = String(time.seconds).padStart(2, "0");

        this.display.textContent = `${h}:${m}:${s}`;
    }
}

