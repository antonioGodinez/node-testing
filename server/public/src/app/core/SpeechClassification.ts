import { Metaphone, BayesClassifier } from 'natural';
import { CommandStatesConstants } from './CommandStatesConstants';

export class SpeechClassification {
    private classifier: BayesClassifier;

    constructor() {
        this.classifier = new BayesClassifier();

        this.TrainClassifier();
    }

    private TrainClassifier(): void {
        this.classifier.addDocument('Mister slave', CommandStatesConstants.InitCommand);

        this.classifier.addDocument('New to do', CommandStatesConstants.CreateTodoCommand);
        this.classifier.addDocument('Create to do', CommandStatesConstants.CreateTodoCommand);
        this.classifier.addDocument('Insert to do', CommandStatesConstants.CreateTodoCommand);

        this.classifier.addDocument('Get all', CommandStatesConstants.GetAllTodoCommand);
        this.classifier.addDocument('All to do', CommandStatesConstants.GetAllTodoCommand);
    }
}