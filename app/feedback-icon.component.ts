import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'feedback-icon',
  template: `
    <div class="feedback-icon">
     <svg
      *ngIf="iconClass == 'incorrect'"
      class="incorrect-icon" 
      preserveAspectRatio="xMinYMin meet" 
      viewBox="0 0 44 40" 
      style="enable-background:new 0 0 44 40;" 
      xml:space="preserve">
        <g>
          <rect x="11" y="17.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.852 19.2507)" class="incorrect-background" width="16.6"
            height="3.7"></rect>
          <rect x="17.4" y="10.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.8175 19.209)" class="incorrect-background" width="3.7"
            height="16.6"></rect>
        </g>
     </svg>
     <svg *ngIf="iconClass == 'correct'" class="correct-icon" preserveAspectRatio="xMinYMin meet"  version="1.1" x="0px" y="0px" viewBox="0 0 44 40" style="enable-background:new 0 0 44 40;"
        xml:space="preserve">
        <g>
          <g>
            <polygon class="correct-background" points="19.1,28.6 11.8,22.3 14.4,19.2 17.9,22.1 23.9,11.4 27.5,13.4"></polygon>
          </g>
        </g>
      </svg>
    </div>
  `,

  styles: [`
      :host {
        width: 25px;
        height: 33px;
        position: relative;
        display: inline-block;
      }
      .correct-icon, .incorrect-icon {
        width: 33px;
        height: 33px;
        position: absolute;
        top: 10px;
      } 
      
      .correct-background {
        fill: #4caf50;
        stroke: #4caf50;
      }

      .incorrect-background {
        fill: #ff9800;
        stroke: #ff9800;
      }
    `
  ]

})

export class FeedbackIcon {
  @Input()
  iconClass: string;

}