import template from './logIn.template.html';
import controller from './logIn.controller';
import './logIn.style.css';

let logInComponent = {
    template,
    controller,
    replace: true,
    bindings: {
        columns: '<',
        data: '='
    }
};

export default logInComponent;


