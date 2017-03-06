import template from './about.template.html';
import controller from './about.controller';
import './about.style.css';

let aboutComponent = {
    template,
    controller,
    replace: true,
    bindings: {
        columns: '<',
        data: '='
    }
};

export default homeComponent;