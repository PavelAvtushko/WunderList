import template from './home.template.html';
import controller from './home.controller';
import './home.style.css';

let homeComponent = {
    template,
    controller,
    replace: true,
    bindings: {
        columns: '<',
        data: '='
    }
};

export default homeComponent;