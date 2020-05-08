import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../../.storybook/scss/CSSModule.module.scss';

const cx = classNames.bind(styles);

const FormGroupLabel = ({ text, className, ...otherProps }) => (
    <label className={cx('form-group-label', className)} {...otherProps}>
        {text}
    </label>
);

FormGroupLabel.displayName = 'FormGroupLabel';

FormGroupLabel.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default FormGroupLabel;
