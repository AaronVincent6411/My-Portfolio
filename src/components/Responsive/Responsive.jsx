import React from 'react';
import styled from 'styled-components';

const Response = styled.div`
  max-width: 100%;
  padding: 20px;

  @media (max-width: 767px) {
    /* Styles for mobile devices */
    padding: 10px;
  }

  @media (min-width: 768px) {
    /* Styles for tablets and larger screens */
    padding: 40px;
  }
`;


export default Response;
