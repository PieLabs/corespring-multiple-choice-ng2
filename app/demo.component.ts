import {Component, Input, OnInit, OnChanges, SimpleChange, DoCheck} from '@angular/core';
import {Config} from './config';
import {Outcomes} from './outcomes';
import {Response} from './response';
import * as _ from 'lodash';


@Component({
  selector: 'demo',
  template: `
    <table class="demo-table">
      <tr>
        <th>comp</th>
        <th>config</th>
        <th>outcomes</th>
        <th>response</th>
      </tr>
      <tr>
        <td><corespring-multiple-choice [config]="config" [response]="response"></corespring-multiple-choice></td>
        <td><pre>{{config | json}}</pre></td>
        <td><pre>{{outcomes | json}}</pre></td>
        <td><pre>{{response | json}}</pre></td>
      </tr>
    </table>

  `
})

export class DemoComponent implements OnInit, OnChanges, DoCheck {
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

  ngOnInit() {
  };

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
  };

  ngDoCheck() {
  };

}