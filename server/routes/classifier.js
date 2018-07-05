const Router = require('express');
const Classifier = require('wink-naive-bayes-text-classifier');
const nlp = require('wink-nlp-utils');

const routes = Router();
const nbc = Classifier();
consolidate();

routes.get('/classifier/:expression', (req, res) => {
    let expression = req.params.expression;

    return res.json(nbc.predict(expression)).send();
});

function consolidate() {
    let InitCommand = 'Mister snow';
    let CreateTodoCommand = 'Create';
    let GetAllTodoCommand = 'Get';
    
    nbc.definePrepTasks([
        nlp.string.tokenize0,
        nlp.tokens.removeWords,
        nlp.tokens.stem
    ]);

    nbc.defineConfig( { coinsiderOnlyPresence: true, smoothingFactor: 0.5 } );

    nbc.learn('Mister snow', InitCommand);

    nbc.learn('I need to get all to do', GetAllTodoCommand);
    nbc.learn('enlist me all to do', GetAllTodoCommand);
    nbc.learn('Get all to do', GetAllTodoCommand);
    nbc.learn('Bring me all to do', GetAllTodoCommand);
    nbc.learn('Access all to do', GetAllTodoCommand);
    nbc.learn('Pull all to do', GetAllTodoCommand);
    nbc.learn('Fetch all to do', GetAllTodoCommand);
    nbc.learn('Get list of to do', GetAllTodoCommand);

    nbc.learn('I need to create a new to do', CreateTodoCommand);
    nbc.learn('Create a new to do for me', CreateTodoCommand);
    nbc.learn('Insert new to do', CreateTodoCommand);
    nbc.learn('Generate a new to do', CreateTodoCommand);
    nbc.learn('Make new to do', CreateTodoCommand);
    nbc.learn('Set up a new to do', CreateTodoCommand);

    nbc.consolidate();
}

module.exports = { routes };