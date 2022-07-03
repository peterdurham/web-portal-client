import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const types = {
  primary: 'storybook-button--primary',
  secondary: 'storybook-button--secondary',
  cta: 'storybook-button--cta',
}

const Button = ({ type, backgroundColor, color, size, children, ...props }) => {
  const typeClassName = types[type]
  
  return (
    <ButtonStyles
      type="button"
      className={['storybook-button', `storybook-button--${size}`, typeClassName].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {children}
    </ButtonStyles>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button;

const ButtonStyles = styled.button`
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

&.storybook-button {
  font-weight: 500;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  transition: background-color .2s ease, outline .1s ease;
}
&.storybook-button:focus {
  outline-style: solid;
  outline-color: #5cebdf;
  outline-width: 2.5px;
}
&.storybook-button--primary {
  color: #054861;
  background-color: #5cebdf;
  outline-offset: 2px;

  &:hover { background-color: #9ff9e1; }
}
&.storybook-button--secondary {
  color: #151a1e;
  background-color: #e8ebed;

  &:hover { background-color: #e1fef1; color: #054861; }
}
&.storybook-button--cta {
  color: white;
  background-color: #2451f5;
  outline-offset: 2px;

  &:hover { background-color: #112cb0; }
}
&.storybook-button--small {
  font-size: 16px;
  padding: 10px 16px;
}
&.storybook-button--medium {
  font-size: 16px;
  padding: 10px 16px;
}
&.storybook-button--large {
  font-size: 16px;
  padding: 10px 16px;
}
`