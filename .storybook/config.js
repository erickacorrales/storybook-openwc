import { configure, addDecorator } from '@storybook/polymer';

import { setConsoleOptions } from '@storybook/addon-console';

addDecorator(story => {
    const el = story();
    console.log('story-->', story)
    return `<div> <button onclick="location.reload(true)">Probando</button>  ${ el }</div>`;
    ///el.setAttribute('title', `${el.getAttribute('title')} - decorated`);
    //return el;
});


setConsoleOptions({
    panelExclude: [],
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
    //document.body.className += ' ' + 'hasHover';
    //document.getElementsByTagName("html")[0].setAttribute('data','pepe');
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
