import React from 'react';

const About = () => {
    return (
        <div className='p-5'>
            <h1 className='text-center text-decoration-underline'>About Me</h1>
            <div>
                <img src="https://lh3.googleusercontent.com/a-/AOh14Ghjc6DDBXgbwOh7Vf_dfp180582kTqtRtnWuZYcrA=s360-p-rw-no" alt="Kazi Mamun" />
                <p>Name: Kazi Mamunar Rashid</p>
                <p>Student of Web and App Development</p>
                <p>Working as an Assistant Engineer in A Power Plant</p>
                <p>Connect with Me in <a href="https://facebook.com/kazi.mamun.716" rel='noreferrer' target="_blank">Facebook</a></p>
            </div>
        </div>
    );
};

export default About;