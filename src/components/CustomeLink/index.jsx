import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Span } from '../Typography';

const LinkSpan = styled(Span)`
  display: contents;
  cursor: pointer;
  
  a{
    display: contents;
    text-decoration: none;
    color: inherit;
  }
`;

const CustomLink = ({ to, className = "", children, ...rest }) => {
  return <LinkSpan className={className} {...rest}>
    <Link to={to}>
      {children}
    </Link>
  </LinkSpan>
}

export default CustomLink;