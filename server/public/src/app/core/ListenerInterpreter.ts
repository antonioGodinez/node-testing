import { ICommandState } from './ICommandState';
import { ListeningInitCommand } from './ListeningInitCommand';
import { Todo } from '../models/Todo';

export class ListenerInterpreter {
    Current: ICommandState;

    todos: Todo[];

    constructor () {
        this.Current = new ListeningInitCommand() ;
    }

    SetState(state: ICommandState) {
        this.Current = state;
    }
}