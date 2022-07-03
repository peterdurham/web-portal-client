import React from 'react'
import styled from 'styled-components'

const ChipStyles = styled.span`
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
padding: 2px 4px;
font-size: 14px;
line-height: 16px;
font-weight: 700;
border-radius: 6px;

&.storybook-chip--success {
    color: #054861;
    background-color: #e1fef1;
}
&.storybook-chip--fail {
    color: #78122d;
    background-color: #ffece0;
}
`

const types = {
    success: 'storybook-chip--success',
    fail: 'storybook-chip--fail',
    failed: 'storybook-chip--fail',
    failure: 'storybook-chip--fail',
}

const Chip = ({ text, type }) => {
    const typeClassName = types[type]
    return (
        <ChipStyles className={['storybook-chip', typeClassName].join(' ')}>{text}</ChipStyles>
    )
}

export default Chip