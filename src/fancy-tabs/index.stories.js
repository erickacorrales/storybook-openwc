import  './fancy-tabs.define';
import { storiesOf, html } from '@open-wc/storybook';

storiesOf('Shadow DOM - fancy tabs', module)
    .add('Tabs', () =>  `<fancy-tabs background >
    <button slot="title">Tab 1</button>   <button slot="title" selected>Tab 2</button> <button slot="title">Tab 3</button>
     <section>content panel 1</section> <section>content panel 2</section> <section>content panel 3</section>
    </fancy-tabs>`)

