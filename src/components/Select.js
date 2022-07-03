import React from "react";
import styled from 'styled-components'
import PropTypes from 'prop-types';

const SelectStyles = styled.select`
// margin: -4px 0;
width: 100%;
padding: 7px 15px;
border: 1px solid #808589;
border-radius: 6px;
font-size: 16px;
line-height: 24px;
font-weight: 700;

&:focus {
    outline: #5cebdf solid 2px;
}
`

const Select = ({ options, onChange }) => {
    return (
        <SelectStyles
            type="select"
            onChange={onChange}
        // value={value}
        // placeholder={placeholder}
        // onChange={onChange}
        >
            {options.map((option) => <option key={option.value} value={option.value}>
                {option.label}
            </option>)}
        </SelectStyles>
    )
}

Select.propTypes = {
    options: PropTypes.array,
};

Select.defaultProps = {};


export default Select