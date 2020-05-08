import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../../.storybook/scss/CSSModule.module.scss';

const cx = classNames.bind(styles);

const TextInput = ({ className, disabled, type, size, ...otherProps }) => {
    const baseClass = 'inp-box';

    const rootClass = cx(baseClass, className, {
        [`${baseClass}-${size}`]: size,
        [`disabled`]: disabled
    });

    return (
        <span className={rootClass}>
            <input type={type} {...otherProps} disabled={disabled}/>
        </span>
    );
};

TextInput.displayName = 'TextInput';

TextInput.defaultProps = {
    type: 'text',
    size: 'md'
};

TextInput.propTypes = {
    // This prevents people forcing this component out of its intended use
    /** text, password */
    type: PropTypes.oneOf(['text', 'password']),
    disabled: PropTypes.bool,
    /** sm, md, lg */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    className: PropTypes.string,
    value: PropTypes.string
};

export default TextInput;
