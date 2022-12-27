import React from 'react'

function ProductsCard(props) {
    const { details } = props;
    const gambar = details.images;
    console.log(gambar)

    return (
        <>
            <div>
                {gambar.map((images) => {
                    return <img src={images.src}/>
                })}
            </div>
        </>
    )
}

export default ProductsCard;