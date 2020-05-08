import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import FormGroup from './FormGroup/';

const stories = storiesOf('Molecules', module);

stories
    .addDecorator(withKnobs)
    .add('FormGroup', withReadme(...FormGroup));
