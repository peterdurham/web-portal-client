import React from "react";
import styled from 'styled-components'

const TextFieldStyles = styled.input`
// margin: -4px 0;
padding: 7px 15px;
width: 100%;
border: 1px solid #808589;
border-radius: 6px;
font-size: 16px;
line-height: 24px;
font-weight: 700;

&:focus {
    outline: #5cebdf solid 2px;
}
`

const TextField = ({ value, placeholder, onChange, defaultValue, id }) => {
    return (
        <TextFieldStyles
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            defaultValue={defaultValue}
            id={id}
        />
    )
}

export default TextField