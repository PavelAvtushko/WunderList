import template from './tasksForm.template.html';
import controller from './tasksForm.controller';
import './tasksForm.style.css';

let tasksFormComponent = {
    template,
    controller,
    bindings: {
        columns: '<',
    },
    require: {
        parent: "^app"
    }
};

export default tasksFormComponent;
