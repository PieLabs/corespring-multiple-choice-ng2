import {Component} from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <demo *ngFor="let dd of demoDatas" [title]="dd.title" [config]="dd.config" [outcomes]="dd.outcomes" [response]="dd.response"></demo>
  `
})


export class AppComponent {
  title = 'Corespring Multiple Choice Example';
  demoDatas: Array<DemoData>;

  private createConfig(overrides: Object) {
    return _.assign({
      prompt: 'This is a prompt...',
      choiceMode: 'radio',
      keyMode: 'numbers',
      disabled: false,
      choices: [
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'},
        {label: 'Carrot', value: 'carrot'},
        {label: 'Donut', value: 'donut'}
      ]
    }, overrides)
  };


  constructor() {
    this.demoDatas = [
      // new DemoData('Radio example', this.createConfig({}), ['apple'], []),
      // new DemoData('Checkbox example', this.createConfig({choiceMode: 'checkbox'}), ['apple', 'banana'], []),
      // new DemoData('With outcomes', this.createConfig({choiceMode: 'checkbox'}), ['apple', 'banana'], [
      //   {value: 'apple', correct: true},
      //   {value: 'banana', correct: false}
      // ]),
      new DemoData('Radio With outcomes and correct response', this.createConfig({
        "correctResponse": [
          "apple",
        ]
      }), ['banana'], [
        {value: 'banana', correct: false}
      ]),
      new DemoData('With outcomes and correct response', this.createConfig({
        choiceMode: 'checkbox', "correctResponse": [
          "apple",
          "carrot"
        ]
      }), ['apple', 'banana'], [
        {value: 'apple', correct: true},
        {value: 'banana', correct: false}
      ]),
      new DemoData('With outcomes+feedback and correct response', this.createConfig({
        choiceMode: 'checkbox', "correctResponse": [
          "apple",
          "carrot"
        ]
      }), ['apple', 'banana'], [
        {
          "value": "apple",
          "correct": true,
          "feedback": "Apples are so tasty!"
        },
        {
          "value": "banana",
          "correct": false,
          "feedback": "Ugh - mushy banana"
        }
      ])
    ];
  }
}


class DemoData {
  title: String;
  config: Object;
  response: Array<String>;
  outcomes: Array<Object>;

  constructor(title: string, config: Object, response: Array<string>, outcomes: Array<Object>) {
    this.title = title;
    this.config = config;
    this.response = response;
    this.outcomes = outcomes;
  }
}
