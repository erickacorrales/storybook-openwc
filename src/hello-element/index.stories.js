// TODO: add demo stories
import  './hello-element.define.js';
import { storiesOf } from '@open-wc/storybook';

storiesOf('Custom Elements - hello world', module)
        .add('hello Alejandro', () => `<hello-element name="Alejandro"></hello-element>`)
        .add('hello  People', () =>  `<hello-element name="People"></hello-element>`);