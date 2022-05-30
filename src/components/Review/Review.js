import React from 'react';
import { Image } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = (props) => {
    const {name, image, review, rating} = props.review;
    return (
        <div>
            <div className='d-flex align-items-center my-3 border border-danger rounded p-2'>
                <div className='me-2'>
                    <Image src={image} alt={name} />
                </div>
                <div>
                    <p><small class="text-nowrap bg-light border rounded p-1 font-monospace">{name}</small><span> said:</span></p>
                    <p>{review}</p>
                    <span className=''>Rating:</span> <Rating
                        initialRating={rating}
                        readonly
                    />
                </div>
            </div>
        </div>
    );
};

export default Review;