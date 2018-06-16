import { ICommandState } from "./ICommandState";
import { ListenerInterpreter } from "./ListenerInterpreter";
import { CommandStatesConstants } from "./CommandStatesConstants";
import { ListeningInitCommand } from "./ListeningInitCommand";
import { CreateTodoCommand } from "./CreateTodoCommand";
import { TodoService } from "./todo.service";
import { ReflectiveInjector } from "@angular/core";
import { CommandGetAllTodosCommand } from "./CommandGetAllTodosCommand";

export class ListeningCommand implements ICommandState {
    CallCommand(wrapper: ListenerInterpreter, command: String) {
        switch(command) {
            case CommandStatesConstants.InitCommand:
                wrapper.SetState(new ListeningInitCommand());
            break;

            case CommandStatesConstants.GetAllTodoCommand:
                wrapper.SetState(new CommandGetAllTodosCommand(this.GetTodoService()));
                wrapper.Current.CallCommand(wrapper, '');
            break;

            case CommandStatesConstants.CreateTodoCommand:
                wrapper.SetState(new CreateTodoCommand(this.GetTodoService()));
            break;

            case CommandStatesConstants.DeleteTodoCommand:
                throw new Error('Not implemented');
            // break;
        }
    }

    private GetTodoService(): TodoService {
        let injector = ReflectiveInjector.resolveAndCreate([TodoService]);
        return injector.get(TodoService);
    }
}