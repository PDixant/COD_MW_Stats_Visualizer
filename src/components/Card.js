import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const KDContainer = styled.div`
height: 100%;
width: 500px;
background: #282C34;
border-radius: 15px;
color: white;
margin: 50px;
text-align: center;
`;

const StyledP = styled.p`
color: white;
`;

const CardContainer = ({
    title,
    input
}) => (
        <KDContainer>
            <h3>
                {title}
            </h3>
            <StyledP>
                {input}
            </StyledP>
        </KDContainer>

    )

export default CardContainer;