import { Injectable } from '@angular/core';

import { ICommandState } from './ICommandState';
import { ListeningInitCommand } from './ListeningInitCommand';
import { Todo } from '../models/Todo';
import SpeechToText from 'speech-to-text';
import { SpeechClassification } from './SpeechClassification';

@Injectable({
    providedIn: 'root'
  })
export class ListenerInterpreter {
    Current: ICommandState;
    SpeechListener: SpeechToText;
    CurrentClassification: string;
    CurrentState: string;

    todos: Todo[];

    constructor (private classifier: SpeechClassification) {
        this.Current = new ListeningInitCommand() ;
        let self = this;
        this.SpeechListener = new SpeechToText(function() {}, function OnStopTalking(text){
            console.log(text);
            self.classifier.GetClassification(text).subscribe((classification: string) => {
                self.CurrentClassification = classification;
                console.log(`Classification: ${self.CurrentClassification}`);
                self.Current.CallCommand(self, self.CurrentClassification);
            });
        }, function() {});
        console.log('Listening');
    }

    SetState(state: ICommandState) {
        this.CurrentState = state.GetCommandName();
        console.log(`On state: ${this.CurrentState}`);
        this.Current = state;
    }

    StartListening(): void {
        this.SpeechListener.startListening();
    }
}