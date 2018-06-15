import { ICommandState } from './ICommandState';
import { ListenerInterpreter } from './ListenerInterpreter';
import { CommandStatesConstants } from './CommandStatesConstants';

export class ListeningInitCommand implements ICommandState{
    CallCommand(wrapper: ListenerInterpreter, command: String) {
        if(command === CommandStatesConstants.InitCommand) {
            wrapper.SetState(new ListeningInitCommand());
        };
    }
}