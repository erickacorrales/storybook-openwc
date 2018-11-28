import  './x-foo-shadowdom.define';
import { storiesOf } from '@open-wc/storybook';

storiesOf('Creating an element that uses Shadow DOM', module)
    .add('Empty', () => `<x-foo-shadowdom></x-foo-shadowdom>`)
    .add('With Text', () => `<x-foo-shadowdom><div>Con texto!!!</div> </x-foo-shadowdom>`);

