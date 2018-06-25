import { ListenerInterpreter } from "./ListenerInterpreter";

export interface ICommandState {
    CallCommand(wrapper: ListenerInterpreter, commandInput: String);

    GetCommandName(): string;
}