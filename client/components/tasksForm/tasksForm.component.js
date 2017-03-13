import template from './tasksForm.template.html';
import controller from './tasksForm.controller';
import './tasksForm.style.css';

let tasksFormComponent = {
    template,
    controller,
    replace: true,
    bindings: {
        columns: '<',
        data: '=',
        user: '<'
    }
};

export default tasksFormComponent;
