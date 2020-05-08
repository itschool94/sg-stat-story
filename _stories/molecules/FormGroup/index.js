import React from 'react';
import { boolean, text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import readme from './README.md';

import FormGroupLabel from '../../../components/atoms/FormGroupLabel';
import FormGroupTextHelp from '../../../components/atoms/FormGroupTextHelp';
import TextInput from '../../../components/atoms/TextInput';
import FormGroup from '../../../components/molecules/FormGroup';

const contextOptions = {
    danger: 'danger',
    success: 'success',
    'No Value': ''
};

const component = () => (
    <FormGroup
        isInline={boolean('isInline', false)}
        context={optionalSelect('Context', contextOptions, 'success')}
        className={text('Classname', '')}
        style={object('Style', {})}>
        <FormGroupLabel text={text('Input Label', 'Cool Label')} />
        <TextInput name="username" disabled={boolean('isDisabled', false)} placeholder="Bruce Lee" />
        <FormGroupTextHelp text="You got a cool username right there" />
    </FormGroup>
);

export default [readme, component];
