import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../../.storybook/scss/CSSModule.module.scss';

const cx = classNames.bind(styles);

const Select = ({ context, size, customValue, customName, options, className, ...otherProps }) => {
    const baseClass = 'sel-box';

    const rootClass = cx(baseClass, className, {
        [`${baseClass}-${context}`]: context,
        [`${baseClass}-${size}`]: size
    });

    return (
        <div className={rootClass}>
            <select {...otherProps}>
                {options.map(o => (
                    <option key={o[customValue]} value={o[customValue]}>
                        {o[customName]}
                    </option>
                ))}
            </select>
        </div>
    );
};

Select.displayName = 'Select';

Select.defaultProps = {
    options: [],
    customValue: 'value',
    customName: 'name'
};

Select.propTypes = {
    /** primary, no-border, dark */
    context: PropTypes.string,
    /** xs, sm, lg */
    size: PropTypes.oneOf(['xs', 'sm', 'lg']),
    customValue: PropTypes.string,
    customName: PropTypes.string,
    options: PropTypes.array,
    className: PropTypes.string
};

export default Select;
