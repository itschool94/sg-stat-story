import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../../.storybook/scss/CSSModule.module.scss';

const cx = classNames.bind(styles);

const FormGroupTextHelp = ({ text, className, ...otherProps }) => (
    <small className={cx('form-group-text-help', className)} {...otherProps}>
        {text}
    </small>
);

FormGroupTextHelp.displayName = 'FormGroupTextHelp';

FormGroupTextHelp.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default FormGroupTextHelp;
