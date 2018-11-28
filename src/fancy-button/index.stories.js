import  './fancy-button.define.js';
import { storiesOf } from '@open-wc/storybook';

storiesOf('Custom Elements - Extended HTML native  elements', module)
        .add('Button', () => '<button is="fancy-button" >atractivo botón.</button>')