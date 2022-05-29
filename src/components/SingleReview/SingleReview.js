import React from 'react';
import { Card, Image } from 'react-bootstrap';

const SingleReview = (props) => {
    const {name, review, image} = props.review;
    return (
        <Card
            bg="info"
            text='dark'
            style={{ width: '18rem' }}
            className="mx-1"
            >
            <Card.Header><Image src={image} thumbnail roundedCircle width="40px" /> {name}</Card.Header>
            <Card.Body>
                <Card.Text> {review.length>50 ? review.slice(0, 50)+"..." : review} </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SingleReview;