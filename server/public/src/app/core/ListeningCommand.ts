import { ICommandState } from "./ICommandState";
import { ListenerInterpreter } from "./ListenerInterpreter";
import { CommandStatesConstants } from "./CommandStatesConstants";
import { ListeningInitCommand } from "./ListeningInitCommand";
import { CreateTodoCommand } from "./CreateTodoCommand";
import { TodoService } from "./todo.service";
import { ReflectiveInjector } from "@angular/core";

export class ListeningCommand implements ICommandState {
    CallCommand(wrapper: ListenerInterpreter, command: String) {
        switch(command) {
            case CommandStatesConstants.InitCommand:
                wrapper.SetState(new ListeningInitCommand());
            break;

            case CommandStatesConstants.GetAllTodoCommand:
                throw new Error('Not implemented');
            break;

            case CommandStatesConstants.CreateTodoCommand:
                const injector = ReflectiveInjector.resolveAndCreate([TodoService])
                wrapper.SetState(new CreateTodoCommand(injector.get(TodoService)));
            break;

            case CommandStatesConstants.DeleteTodoCommand:
                throw new Error('Not implemented');
            break;
        }
    }
}