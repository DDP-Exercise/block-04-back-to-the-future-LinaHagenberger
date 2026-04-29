"use strict";

export let timeModel = {
    date: new Date(),

    setTime(date){
        this.date = date;
        return {
            hours: this.getHours(),
            minutes: this.getMinutes(),
            seconds: this.getSeconds(),
        };
    },

    getHours() {
        return this.date.getHours();
    },

    getMinutes() {
        return this.date.getMinutes();
    },

    getSeconds() {
        return this.date.getSeconds();
    }
}