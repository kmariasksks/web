import React from 'react';

import './formError.css'

const FormError = ({ touched, error }) => {
    return touched && error ? <div className="error-type">{error}</div> : null;
};

export default FormError;