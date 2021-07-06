import React from 'react';
import './from-imput.scss';

const FormInput = ({handleChange, label, ...otherProps }) => (
    <div className="group">
        <input type="text" className="form-input" onChnage={handleChnage} {...otherProps}/>
        {label ?  (
            <label className={`${otherProps.value.length ? 'shrink' : ''} from-input-label`} >
                {label}
            </label>
            ) : null}
    </div>
)

export default FormInput;