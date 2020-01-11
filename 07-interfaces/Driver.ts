import { CricketCoach } from "./CricketCoach";
import { FootballCoach } from "./FootballCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach();
let myFootballCoach = new FootballCoach();
let theCoaches: Coach[] = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myFootballCoach);
for (let tempCoaches of theCoaches) {
  console.log(tempCoaches.getDailyWorkout());
}
