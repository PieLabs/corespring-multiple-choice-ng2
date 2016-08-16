import {Component, Input} from '@angular/core';

@Component({
  selector: 'demo',
  template: `
    <h2>{{title}}</h2>
    <table class="demo-table">
      <tr>
        <th>comp</th>
        <th>config</th>
        <th>outcomes</th>
        <th>response</th>
      </tr>
      <tr>
        <td style="min-width: 300px"><corespring-multiple-choice [config]="config" [outcomes]="outcomes" [response]="response"></corespring-multiple-choice></td>
        <td><pre>{{config | json}}</pre></td>
        <td><pre>{{outcomes | json}}</pre></td>
        <td><pre>{{response | json}}</pre></td>
      </tr>
    </table>

  `
})

export class DemoComponent  {
  @Input()
  title: String;

  @Input()
  config: any;

  @Input()
  outcomes: Array<any>;

  @Input()
  response: Array<String>;

}