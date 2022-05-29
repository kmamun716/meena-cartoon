import React from 'react';
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='my-2'>
            <div className="row">
                <div className="col-md-8 d-flex align-items-center">
                    <div>
                        <h1>The Meena Cartoon</h1>
                        <p style={{textAlign: "justify"}}>Her popularity is due to her not being closely bound to just one country or culture of South Asia, but uniting the common characteristics of them all. The character of Meena was created by a team of people in UNICEF that was led by Neill McKee, head of the Communication Section in the early 1990s.</p>                        
                        <Button variant="outline-info">Live Demo</Button>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className='w-100 rounded' src="https://images.thedailystar.net/sites/default/files/styles/big_202/public/feature/images/op_2_new_0.jpg" alt="meena-cartoon" />
                </div>
            </div>
        </div>
    );
};

export default Banner;