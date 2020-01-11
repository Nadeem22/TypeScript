"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var FootballCoach_1 = require("./FootballCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach();
var myFootballCoach = new FootballCoach_1.FootballCoach();
var theCoaches = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myFootballCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var tempCoaches = theCoaches_1[_i];
    console.log(tempCoaches.getDailyWorkout());
}
