import {Component, Input, OnInit, OnChanges, SimpleChange, DoCheck} from '@angular/core';

import * as _ from 'lodash';


@Component({
  selector: 'corespring-multiple-choice',
  template: `
    <div *ngIf="config.prompt">{{answer}}</div>
    <show-correct-answer-toggle (toggled)="showCorrectAnswerToggled($event)"></show-correct-answer-toggle>
    <md-radio-group [(ngModel)]="visibleAnswer" (change)="radioChange()">
      <div *ngFor="let choice of visibleChoices; let i=index" class="{{getChoiceClass(choice)}}">
         <feedback-icon [iconClass]="getChoiceClass(choice)"></feedback-icon>
         <md-checkbox 
            *ngIf="config.choiceMode == 'checkbox'" 
            [(ngModel)]="choice.selected" 
            >
            <strong>{{numberFor(i)}}</strong>            
            {{choice.label}}
         </md-checkbox>
         <md-radio-button 
            *ngIf="config.choiceMode == 'radio'" 
            [value]="choice.value"
            >
            <strong>{{numberFor(i)}}</strong>
            {{choice.label}}
         </md-radio-button>
         <div *ngIf="!showingCorrectResponse && feedbackFor(choice)" class="feedback">{{feedbackFor(choice)}}</div>
      </div>
    </md-radio-group>
  `,
  styles: [
  ` .feedback {
      display: block;
      border-radius: 6px;
      padding: 10px;
      margin-top: 10px;
      font-size: 12px;
      line-height: 25px;
      vertical-align: middle;
      background-color: #f8f6f6;
    }
    .correct .feedback {
      color: #1c421a; 
    }
    .incorrect .feedback {
      color: #946202; 
    }
  `]
})

export class CorespringMultipleChoiceComponent implements OnChanges, DoCheck {
  @Input()
  title: string;

  @Input()
  config: any;

  @Input()
  outcomes: Array<any>;

  @Input()
  response: Array<any>;

  choices: Array<any>;
  correctChoices: Array<any>;
  visibleChoices: Array<any>;

  answer: string;
  visibleAnswer: string;
  correctAnswer: string;

  showingCorrectResponse: boolean;

  showCorrectAnswerToggled(isToggleOn:boolean) {
    this.showingCorrectResponse = isToggleOn;
    if (this.config.choiceMode == 'radio') {
      this.visibleAnswer = (this.showingCorrectResponse) ? this.correctAnswer : this.answer;
    } else {
      this.visibleChoices = (this.showingCorrectResponse) ? this.correctChoices : this.choices;
    }
  }

  getChoiceClass(choice: any) {
    if (this.showingCorrectResponse) {
      return this.isCorrectChoice(choice) ? 'correct' : '';
    }
    var maybeOutcome = _.find(this.outcomes, function (o: any) {
      return o.value == choice.value;
    });

    if (!_.isEmpty(maybeOutcome)) {
      return maybeOutcome.correct ? 'correct' : 'incorrect';
    }
  }

  numberFor(index: number) {
    return (index+1)+'.';
  }

  feedbackFor(choice: any) {
    return (_.find(this.outcomes, function(o) {
       return o.value == choice.value;
    }) || {}).feedback;
  }

  radioChange() {
    if (!this.showingCorrectResponse) {
      this.answer = this.visibleAnswer;
    }
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if (changes['config']) {
      this.choices = _.map(this.config.choices, (c:any) => {
        let responseIncludesChoice = _.includes(this.response, c.value);
        return _.merge(_.clone(c), {selected: responseIncludesChoice});
      });
      this.answer = _.find(this.choices, (c:any) => { return c.selected}).value;

      this.correctChoices = _.map(this.config.choices, (c:any) => {
        let responseIncludesChoice = _.includes(this.config.correctResponse, c.value);
        return _.merge(_.clone(c), {selected: responseIncludesChoice});
      });
      this.correctAnswer = _.find(this.correctChoices, (c:any) => { return c.selected}).value;

      this.visibleAnswer = this.answer;
      this.visibleChoices = this.choices;
    }

  }

  private isChoiceSelected(choice: any) {
    return (choice.selected && this.config.choiceMode == 'checkbox')
      || (this.answer == choice.value && this.config.choiceMode == 'radio')
  }

  private isCorrectChoice(choice: any) {
    return (this.config.choiceMode == 'checkbox' && _.includes(this.config.correctResponse, choice.value))
      || (this.config.choiceMode == 'radio' && this.correctAnswer == choice.value)
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