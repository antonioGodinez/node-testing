import { Component, OnInit } from '@angular/core';
import { ListenerInterpreter } from './../core/ListenerInterpreter';
import { ReflectiveInjector } from "@angular/core";

@Component({
  selector: 'app-speech-listener',
  templateUrl: './speech-listener.component.html',
  styleUrls: ['./speech-listener.component.css']
})
export class SpeechListenerComponent implements OnInit {  
  constructor(private listener: ListenerInterpreter) {
    
   }

  ngOnInit() {
    this.listener.StartListening();
  }
}
