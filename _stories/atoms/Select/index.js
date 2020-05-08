import React from 'react';
import { text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Select from '../../../components/atoms/Select';
import FormGroupLabel from '../../../components/atoms/FormGroupLabel';
import FormGroup from '../../../components/molecules/FormGroup';

const options = [
    {
        name: 'bananas',
        value: '1'
    },
    {
        name: 'apples',
        value: '2'
    },
    {
        name: 'strawberries',
        value: '3'
    },
    {
        name: 'limes',
        value: '4'
    }
];

const contextOptions = {
    'No Value': '',
    dark: 'dark'
};

const sizeOptions = {
    'No Value': '',
    sm: 'sm',
    lg: 'lg'
};

const component = () => (
    <div>
        <p>Controlled example (change the value in the Knobs section)</p>
        <FormGroup>
            <FormGroupLabel text="Fruits" />
            <Select
                options={object('Options', options)}
                name={text('Name', 'fruit')}
                value={text('Value', '2')}
                customName={text('Custom Name', 'name')}
                customValue={text('Custom Value', 'value')}
                onChange={action('Select changed')}
                context={optionalSelect('Context', contextOptions, '')}
                size={optionalSelect('Size', sizeOptions, '')}
                className={text('Classname', '')}
                style={object('Style', {})}
            />
        </FormGroup>
    </div>
);

export default [readme, component];
