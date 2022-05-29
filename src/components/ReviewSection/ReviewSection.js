import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';

const ReviewSection = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate();
    return (
        <div>
            <h1>Viewer's Review: {reviews.length}</h1>
            <div className='d-flex'>
                {
                    reviews.slice(0,6).map(review=><SingleReview key={review.id} review={review} />)
                }
            </div>
            <Button variant='primary' onClick={()=>navigate('/reviews')}>View All Reviews</Button>
        </div>
    );
};

export default ReviewSection;