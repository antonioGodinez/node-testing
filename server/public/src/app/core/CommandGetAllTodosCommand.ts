import { ICommandState } from "./ICommandState";
import { TodoService } from "./todo.service";
import { ListenerInterpreter } from "./ListenerInterpreter";
import { CommandStatesConstants } from "./CommandStatesConstants";
import { ListeningInitCommand } from "./ListeningInitCommand";
import { Todo } from "../models/Todo";

export class CommandGetAllTodosCommand implements ICommandState{

    constructor(private todoService: TodoService) {
    }
 
    CallCommand(wrapper: ListenerInterpreter, command: String) {
        if(command === CommandStatesConstants.InitCommand) {
            return wrapper.SetState(new ListeningInitCommand());
        }

        this.todoService.GetAll().subscribe((todos: Todo[]) => {
            if(todos) {
                wrapper.todos = todos;
            }

            return wrapper.SetState(new ListeningInitCommand());
        });
    }
}