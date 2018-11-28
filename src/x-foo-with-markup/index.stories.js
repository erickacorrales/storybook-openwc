import  './x-foo-with-markup.define';
import { storiesOf } from '@open-wc/storybook';

storiesOf('Element-defined content', module)
    .add('element foo', () =>  `<x-foo-with-markup> </x-foo-with-markup>`)