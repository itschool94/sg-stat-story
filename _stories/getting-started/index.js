import { storiesOf } from '@storybook/react';
import installation from './Installation/README.md';

const stories = storiesOf(' Getting Started', module);

stories
    .addParameters({
        info: {
            inline: true,
            source: false
        },
        options: {
            showAddonPanel: false
        }
    })
    .add('Customization', () => {}, { info: { text: installation } });
