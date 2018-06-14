import { Component, OnInit } from '@angular/core';
import * as SpeechToText from 'speech-to-text';

@Component({
  selector: 'app-speech-listener',
  templateUrl: './speech-listener.component.html',
  styleUrls: ['./speech-listener.component.css']
})
export class SpeechListenerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const onAnythingSaid = text => console.log(`OnAnythingSaid: ${text}`);
    const onFinalised = text => console.log(`OnFinalised: ${text}`);

    try {
      const listener = new SpeechToText.default(onAnythingSaid, onFinalised);
      listener.startListening();
    } catch(error) {
      console.log(error);
    } 
  }

}
