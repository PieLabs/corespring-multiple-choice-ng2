import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent}  from './app.component';
import {DemoComponent}  from './demo.component';
import {CorespringMultipleChoiceComponent} from './corespring-multiple-choice.component';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdRadioModule} from '@angular2-material/radio';
import {ShowCorrectAnswerToggle} from "./show-correct-answer-toggle.component";
import {FeedbackIcon} from "./feedback-icon.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MdRadioModule,
    MdCheckboxModule
  ],
  declarations: [
    AppComponent,
    DemoComponent,
    CorespringMultipleChoiceComponent,
    ShowCorrectAnswerToggle,
    FeedbackIcon
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}