import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newGoal = new Quote(0,"","","",new Date());
  @Output() addGoal = new EventEmitter<Quote>();
  
  submitGoal(){
    this.addGoal.emit(this.newGoal);
      }

  constructor() { }

  ngOnInit(): void {
  }

}
