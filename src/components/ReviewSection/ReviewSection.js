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
            <h1 className='text-center'>Viewer's Review({reviews.slice(0,3).length})</h1>
            <div className='d-flex justify-content-center my-2'>
                {
                    reviews.slice(0,3).map(review=><SingleReview key={review.id} review={review} />)
                }
            </div>
            <div className="d-flex justify-content-center">
                <Button size="lg" variant='primary' onClick={()=>navigate('/reviews')}>View All Reviews</Button>
            </div>
        </div>
    );
};

export default ReviewSection;