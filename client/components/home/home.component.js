import template from './home.template.html';
import controller from './home.controller';
import './home.style.css';

let homeComponent = {
    template,
    controller,
    bindings: {
        columns: '<',
        data: '<',
    },
    require: {
        parent: "^app"
    }
};

export default homeComponent;
