const FOO_TEMPLATE = document.createElement('template');
FOO_TEMPLATE.innerHTML = `<style> p { color: orange; } </style>
                             <p>I'm in Shadow DOM. My markup was stamped from a &lt;template&gt;.</p>
                           `;
export { FOO_TEMPLATE };



