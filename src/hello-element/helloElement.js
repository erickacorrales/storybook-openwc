export default class HelloElement extends HTMLElement {

    static get observedAttributes() {
        return ['name'];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if (attr == 'name') {
            this.textContent = `Hello, ${newValue}`;
        }
    }
}

