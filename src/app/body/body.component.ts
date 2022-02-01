import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  goals:Quote[] = [
    new Quote(1, 'Abraham', 'Admin', 'My concern is not whether God is on our side; my greatest concern is to be on God\'s side, for God is always right..” ',new Date(2013,3,14)),
    new Quote(2, ' Dennis Ritchie', 'Briana','I can see how it might be possible for a man to look down upon the earth and be an atheist, but I cannot conceive how a man could look up into the heavens and say there is no God.”',new Date(2020,6,9))
  ];

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }


  completeGoal(isComplete, index){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }


  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete post by ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
