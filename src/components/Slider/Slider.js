import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    const images = [
        {
            id:1,
            src:"https://images.thedailystar.net/sites/default/files/styles/big_202/public/feature/images/op_2_new_0.jpg",
            name: "meena-cartoon"
        },
        {
            id:2,
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERS-3c61S9lTvrxZdTjg1uZrey5GioYQW6Q&usqp=CAU",
            name: "meena-raju"
        },
        {
            id:3,
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiZI0vvzzcPXUmsjCE5aSKt9ISUPSFIWLuA&usqp=CAU",
            name: "meena-cartoon-chor"
        },
    ]
    return (
        <Carousel variant="dark">
            {
                images.map(img=><Carousel.Item key={img.id}>
                    <img
                    className="d-block w-100 rounded"
                    src={img.src}
                    alt={img.name}
                    height="300px"
                    />
                </Carousel.Item>)
            }
        </Carousel>
    );
};

export default Slider;