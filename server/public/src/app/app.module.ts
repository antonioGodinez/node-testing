import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpeechListenerComponent } from './speech-listener/speech-listener.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeechListenerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
