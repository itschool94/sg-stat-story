import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const FormGroup = ({ isInline, isDisabled, context, className, children, ...otherProps }) => {
    const baseClass = 'form-group';

    const rootClass = cx(baseClass, className, {
        [`${baseClass}-${context}`]: context,
        [`disabled`]: isDisabled,
        [`${baseClass}-inline`]: isInline
    });

    return (
        <div className={rootClass} {...otherProps}>
            {children}
        </div>
    );
};

FormGroup.displayName = 'FormGroup';

FormGroup.propTypes = {
    isInline: PropTypes.bool,
    isDisabled: PropTypes.bool,
    /** danger, warning, success */
    context: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default FormGroup;
