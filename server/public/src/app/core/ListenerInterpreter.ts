import { ICommandState } from './ICommandState';
import { ListeningInitCommand } from './ListeningInitCommand';
import { Todo } from '../models/Todo';

export class ListenerInterpreter {
    private current: ICommandState;

    todos: Todo[];

    constructor () {
        this.current = new ListeningInitCommand() ;
    }

    SetState(state: ICommandState) {
        this.current = state;
    }
}