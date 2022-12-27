import React from 'react';

import './card.css';
import { Card } from 'react-bootstrap';

function ProductsCard(props) {
    const { details } = props;
    // const gambar = details.images;

    return (
        <>
            <div className='d-card'>
                {/* {gambar.map((images) => {
                    return <img src={images.src}/>
                })} */}

                <Card className="bg-dark text-white products-card">
                <Card.Img src={details.src} alt="Card image" className='img-kartu'/>
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
                </Card>
            </div>
        </>
    )
}

export default ProductsCard;