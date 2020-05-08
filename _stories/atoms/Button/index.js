import React from 'react';
import { text, select, boolean, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Button from '../../../components/atoms/Button';

const sizeOptions = {
    xs: 'xs',
    sm: 'sm',
    lg: 'lg',
    'No Value': ''
};

const contextOptions = {
    default: 'default',
    outline: 'outline',
    blue: 'blue'
};

const component = () => (
    <Button
        type={text('Type', 'button')}
        size={optionalSelect('Size', sizeOptions, '')}
        context={select('Context', contextOptions, 'default')}
        isGroup={boolean('isGroup', false)}
        isBlock={boolean('isBlock', false)}
        disabled={boolean('disabled', false)}
        onClick={action('button_clicked')}
        className={text('ClassName', '')}
        style={object('Style', {})}>
        Button
    </Button>
);

export default [readme, component];
