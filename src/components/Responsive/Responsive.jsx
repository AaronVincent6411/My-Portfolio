import React from 'react';
import styled from 'styled-components';

const Response = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px; 

  @media (max-width: 768px) {
    /* Media query for smaller screens */
    padding: 0 8px; /* Adjust the padding as per your design for smaller screens */
  }`
;

export default Response;
