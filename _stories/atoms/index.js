import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import Button from './Button/';
import FormGroupLabel from './FormGroupLabel/';
import FormGroupTextHelp from './FormGroupTextHelp/';
import Select from './Select';
import TextInput from './TextInput';

const stories = storiesOf('Atoms', module);
stories
    .addDecorator(withKnobs)
    .add('Button', withReadme(...Button))
    .add('FormGroupLabel', withReadme(...FormGroupLabel))
    .add('FormGroupTextHelp', withReadme(...FormGroupTextHelp))
    .add('Select', withReadme(...Select))
    .add('TextInput', withReadme(...TextInput));
