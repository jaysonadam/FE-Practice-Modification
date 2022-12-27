import React from 'react';

import './products.css';
import ProductsCard from '../../Components/ProductsCard/card';

const bikes = [
  {
    id: 1,
    product_name: 'DUKE 200 2022',
    price: 53600000,
    product_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla doloribus, libero explicabo delectus minus distinctio earum cumque ullam, omnis suscipit animi sapiente magnam quos debitis possimus repellendus nostrum deleniti veniam magni vitae nesciunt eligendi! Accusantium dolorum eaque tempora, voluptates quo ipsum esse deleniti distinctio nisi officiis vero expedita sit quam quas dolor voluptatem, ipsam itaque laborum nam modi aspernatur!',
    src: require("../../Images-Videos/images/duke/duke200-1.png"),
    images: [ { src: require("../../Images-Videos/images/duke/duke200-2.png") },
    { src: require("../../Images-Videos/images/duke/duke200-3.png") },
    { src: require("../../Images-Videos/images/duke/duke200-4.png") },
    { src: require("../../Images-Videos/images/duke/duke200-5.png") },
    { src: require("../../Images-Videos/images/duke/duke200-6.jpg") },
    { src: require("../../Images-Videos/images/duke/duke200-7.jpg") }
    ]
    
  }
]

function Products() {

  return (

    <>
      <div className='product-catalogue'>
        <h1 className='product-head'>Duke</h1>
        {bikes.map((bike) => {
          return <ProductsCard details={bike}/>
        })}
      </div>

      <div className='product-catalogue'>
        <h1 className='product-head'>RC</h1>
      </div>
    </>

  )
};

export default Products;