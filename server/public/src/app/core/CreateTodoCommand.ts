import { ICommandState } from "./ICommandState";
import { ListenerInterpreter } from "./ListenerInterpreter";
import { CommandStatesConstants } from "./CommandStatesConstants";
import { ListeningInitCommand } from "./ListeningInitCommand";
import { TodoService } from "./todo.service";
import { Todo } from "../models/Todo";

export class CreateTodoCommand implements ICommandState {

    constructor(private todoService: TodoService) {
    }

    CallCommand(wrapper: ListenerInterpreter, command: String) {
        if(command === CommandStatesConstants.InitCommand) {
            return wrapper.SetState(new ListeningInitCommand());
        }

        let todo = new Todo();
        todo.text = command;
        this.todoService.NewTodo(todo).subscribe((newTodo: Todo) => {
            if(todo) {
                if(!wrapper.todos) wrapper.todos = [] as Todo[];

                wrapper.todos.push(newTodo);
            }
            
            return wrapper.SetState(new ListeningInitCommand());
        });
    }
}