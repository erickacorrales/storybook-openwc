export default class XFooWithMarkup extends HTMLElement {

    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML = `<b>I'm an x-foo-with-markup!</b>`;
    }
}