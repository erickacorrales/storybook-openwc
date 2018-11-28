import  './x-foo-from-template.define';
import { storiesOf } from '@open-wc/storybook';

storiesOf('Creating elements from a "\<template\>"', module)
    .add('element using template', () => `<x-foo-from-template></x-foo-from-template>`)

