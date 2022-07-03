import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const CardStyles = styled.div`
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

box-shadow: 0 1px 10px #34383c0f, 0 2px 4px #34383c14;
// min-height: 200px;
width: 100%;
padding: 24px;
border-radius: 8px;
`

const Card = ({ children }) => {
    return (
        <CardStyles>{children}</CardStyles>
    )
}

Card.propTypes = {
    children: PropTypes.string.isRequired,
};
  
Card.defaultProps = {};

export default Card;