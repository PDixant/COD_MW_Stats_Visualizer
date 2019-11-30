import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const KDContainer = styled.div`
height: 100%;
width: 33.3333%;
border: 2px solid black;
`;

const KDratio = () => (
    <KDContainer>
        <Card style={{}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
            </Card.Body>
        </Card>
    </KDContainer>

)

export default KDratio;