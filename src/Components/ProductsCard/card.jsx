import React from 'react';

import './card.css';
import { Card } from 'react-bootstrap';

function ProductsCard(props) {
    const { details } = props;
    // const gambar = details.images;

    return (
        <>
            <div>
                {/* {gambar.map((images) => {
                    return <img src={images.src}/>
                })} */}
                <a href={`/duke/${details.id}`} className='a-card'>
                <Card className="text-white products-card">
                <Card.ImgOverlay>
                    <div className='product-name'>
                        <h1 className='product-name-h1'>{details.product_name}</h1>
                    </div>
                </Card.ImgOverlay>
                <Card.Img src={details.src} alt="Card image" className='img-kartu'/>
                </Card>
                </a>
            </div>
        </>
    )
}

export default ProductsCard;