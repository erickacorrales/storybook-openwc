import { FOO_TEMPLATE } from './xFooTemplate';

export default class XFooFromTemplate extends HTMLElement {

    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(FOO_TEMPLATE.content.cloneNode(true));
    }

}