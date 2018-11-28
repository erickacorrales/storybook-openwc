export default class  XFooShadowdom extends HTMLElement {

    constructor() {
        super();
        let tmpl = document.createElement('template');
        tmpl.innerHTML = `
              <b>I'm in shadow dom!</b>
              <slot></slot>
            `;
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }

}