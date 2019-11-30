import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const KDContainer = styled.div`
height: 100%;
width: 33.3333%;
border: 2px solid black;
`;

const CardContainer = ({
        title,
        input
    }) => (
    <KDContainer>
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {input}
                </Card.Text>
            </Card.Body>
        </Card>
    </KDContainer>

)

export default CardContainer;