import {Component, Input, OnInit, OnChanges, SimpleChange, DoCheck} from '@angular/core';
import {Config} from './config';
import {Outcomes} from './outcomes';
import {Response} from './response';
import * as _ from 'lodash';


@Component({
  selector: 'corespring-multiple-choice',
  template: `
    <div *ngIf="config.prompt">{{config.prompt}}</div>
    <div *ngFor="let choice of choices">
      <label>
        <input 
            *ngIf="config.choiceMode == 'radio'" 
            [value]="choice.value" 
            (change)="answer = $event.target.value" 
            [checked]='answer == choice.value' 
            type="radio">
        
        <input 
            *ngIf="config.choiceMode == 'checkbox'" 
            [(ngModel)]="choice.selected" 
            type="checkbox">
        {{choice.label}}
      </label>
      <div>
      </div>
    </div>
  `
})

export class CorespringMultipleChoiceComponent implements OnInit, OnChanges, DoCheck {
  @Input()
  title: String;

  @Input()
  config: Object;

  @Input()
  outcomes: Array<Object>;

  @Input()
  response: Array<String>;

  choices: Array<Object>;
  answer: String;

  constructor() {
  }



  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    console.log('changes', changes);
    if (changes['config']) {
      let _self = this;
      this.choices = _.map(this.config.choices, function(c) {
        var o = _.clone(c);
        var responseIncludesChoice = _.includes(_self.response, c.value);
        o.selected = responseIncludesChoice;
        if (responseIncludesChoice) {
          _self.answer = c.value;
        }
        return o;
      });
      console.log('choices:',this.choices);

    }
  }

  private isChoiceSelected(choice) {
    return (choice.selected && this.config.choiceMode == 'checkbox')
      || (this.answer == choice.value && this.config.choiceMode == 'radio')
  }

  ngDoCheck() {
    if (this.response) {
      this.response.splice(0, this.response.length);

      for (let c of this.choices) {
        if (this.isChoiceSelected(c)) {
          this.response.push(c.value);
        }
      }
    }
  };

}