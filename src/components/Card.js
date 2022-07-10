import React from 'react'
import styled from 'styled-components'

const CardStyles = styled.div`
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

box-shadow: 0 1px 10px #34383c0f, 0 2px 4px #34383c14;
width: 100%;
border-radius: 8px;

// padding: 24px 0;

`

const Card = ({ children }) => {
    return (
        <CardStyles>{children}</CardStyles>
    )
}

Card.propTypes = {
    // children: PropTypes.string.isRequired,
};
  
Card.defaultProps = {};

export default Card;