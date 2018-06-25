import { Component, OnInit } from '@angular/core';
import { ListenerInterpreter } from './../core/ListenerInterpreter';

@Component({
  selector: 'app-speech-listener',
  templateUrl: './speech-listener.component.html',
  styleUrls: ['./speech-listener.component.css']
})
export class SpeechListenerComponent implements OnInit {  
  state: string;

  constructor(private listener: ListenerInterpreter) {
    this.state = listener.CurrentState;
   }

  ngOnInit() {
    this.listener.StartListening();
  }
}
