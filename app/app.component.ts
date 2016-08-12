import {Component} from '@angular/core';

import {Config} from './config';
import {Outcomes} from "./outcomes";
import {Response} from "./response";

import * as _ from 'lodash';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <demo *ngFor="let dd of demoDatas" [config]="dd.config" [outcomes]="dd.outcomes" [response]="dd.response"></demo>
  `
})


export class AppComponent {
  title = 'Corespring Multiple Choice Example';
  demoDatas: Array<DemoData>;

  private createConfig(prompt: String, overrides: Object) {
    return _.assign({
      prompt: prompt,
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
      // new DemoData(this.createConfig('Radio example'), ['apple'], []),
      // new DemoData(this.createConfig('Checkbox example', {choiceMode: 'checkbox'}), ['apple','banana'], []),
      new DemoData(this.createConfig('With outcomes', {choiceMode: 'checkbox'}), ['apple','banana'], [
        {value: 'apple', correct: true},
        {value: 'banana', correct: false}
      ])
    ];
  }
}


class DemoData {
  config: Object;
  response: Array<String>;
  outcomes: Array<Object>;
  constructor(config:Object, response: Array<String>, outcomes: Array<Object>) {
    this.config = config;
    this.response = response;
    this.outcomes = outcomes;
  }
}
