import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent}  from './app.component';
import {DemoComponent}  from './demo.component';
import {CorespringMultipleChoiceComponent} from './corespring-multiple-choice';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    DemoComponent,
    CorespringMultipleChoiceComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}