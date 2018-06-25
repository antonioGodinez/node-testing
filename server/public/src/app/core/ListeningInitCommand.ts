import { ICommandState } from './ICommandState';
import { ListenerInterpreter } from './ListenerInterpreter';
import { CommandStatesConstants } from './CommandStatesConstants';
import { ListeningCommand } from './ListeningCommand';

export class ListeningInitCommand implements ICommandState{
    CallCommand(wrapper: ListenerInterpreter, command: String) {
        if(command === CommandStatesConstants.InitCommand) {
            wrapper.SetState(new ListeningCommand());
        } else {
            wrapper.SetState(new ListeningInitCommand());
        }
    }

    GetCommandName:() => "Listening for initial command";
}