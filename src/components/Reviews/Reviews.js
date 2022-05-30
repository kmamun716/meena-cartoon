import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>            
            <h2 className='text-center'>Viewer Reviews:</h2>
            {
                reviews && reviews.map(review => <Review key={review.id} review={review} />)
            }
        </div>
    );
};

export default Reviews;