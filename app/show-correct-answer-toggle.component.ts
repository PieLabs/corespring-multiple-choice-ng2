import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'show-correct-answer-toggle',
  template: `
    <div class="toggle-holder">
      <div class="toggle">
        <div class="svg-holder">
          <svg class="show-icon" *ngIf="!state" preserveAspectRatio="xMinYMin meet" viewBox="-129.5 127 34 35">
            <path style="fill:#B3ABA4;stroke:#CDC7C2;stroke-width:0.5;stroke-miterlimit:10;"
                  d="M-113.2,159c-8,0-14.5-6.5-14.5-14.5s6.5-14.5,14.5-14.5s14.5,6.5,14.5,14.5S-105.2,159-113.2,159z"/>
            <circle class="show-icon-background" cx="-114.2" cy="143.5" r="14"/>
            <path class="show-icon-border"
                  d="M-114.2,158c-8,0-14.5-6.5-14.5-14.5s6.5-14.5,14.5-14.5s14.5,6.5,14.5,14.5S-106.2,158-114.2,158zM-114.2,130c-7.4,0-13.5,6.1-13.5,13.5s6.1,13.5,13.5,13.5s13.5-6.1,13.5-13.5S-106.8,130-114.2,130z"/>
            <polygon class="show-icon-foreground"
                     points="-114.8,150.7 -121.6,144.8 -119,141.8 -115.9,144.5 -111.3,136.3 -107.8,138.2 			"/>
          </svg>
    
          <svg class="hide-icon" *ngIf="state" preserveAspectRatio="xMinYMin meet" viewBox="-283 359 34 35">
            <circle class="hide-icon-background" cx="-266" cy="375.9" r="14"/>
            <path class="hide-icon-background"
                  d="M-280.5,375.9c0-8,6.5-14.5,14.5-14.5s14.5,6.5,14.5,14.5s-6.5,14.5-14.5,14.5S-280.5,383.9-280.5,375.9zM-279.5,375.9c0,7.4,6.1,13.5,13.5,13.5c7.4,0,13.5-6.1,13.5-13.5s-6.1-13.5-13.5-13.5C-273.4,362.4-279.5,368.5-279.5,375.9z"/>
            <polygon class="hide-icon-foreground"
                     points="-265.4,383.1 -258.6,377.2 -261.2,374.2 -264.3,376.9 -268.9,368.7 -272.4,370.6 				"/>
          </svg>
        </div>
        <div class="toggle-label" (click)="onClick()" [ngClass]="toggleClass()">{{state ? 'Hide' : 'Show'}} Correct
          Answer
        </div>
      </div>
    </div>
  `,

  styles: [`
    .toggle-holder {
      display: table;
      text-align: center;
      cursor: pointer;
    }
    .toggle {
      display: table-row;
    }
    .svg-holder {
      display: table-cell;
      vertical-align: middle;
    }
    .toggle-label {
      display: table-cell;
      vertical-align: middle;
    }
    .show-icon, .hide-icon {
      width: 32px;
      height: 32px;
    }
    .show-icon .show-icon-background {
      fill: #fff;
    }
    .show-icon .show-icon-foreground {
      fill: #1a9cff;
    }
    .show-icon .show-icon-border {
      fill: #bce2ff;
    }
    .hide-icon .hide-icon-background {
      fill: #bce2ff;
    }
    .hide-icon .hide-icon-foreground {
      fill: #1a9cff;
    }
    `
  ]

})

export class ShowCorrectAnswerToggle {
  @Output()
  toggled = new EventEmitter();

  state: boolean = false;

  onClick() {
    this.state = !this.state;
    this.toggled.emit(this.state);
  }

  toggleClass() {
    return this.state ? 'toggle-on' : 'toggle-off';
  }
}