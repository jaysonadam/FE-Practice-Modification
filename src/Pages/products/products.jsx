import React from 'react';

import './products.css';
// import { Carousel } from 'react-bootstrap';
import DUKERIDER from '../../Images-Videos/videos/DUKERIDER.mp4';
import ProductsCard from '../../Components/ProductsCard/card';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const duke = [
  {
    id: 1,
    product_name: 'DUKE 200',
    price: 53600000,
    product_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla doloribus, libero explicabo delectus minus distinctio earum cumque ullam, omnis suscipit animi sapiente magnam quos debitis possimus repellendus nostrum deleniti veniam magni vitae nesciunt eligendi! Accusantium dolorum eaque tempora, voluptates quo ipsum esse deleniti distinctio nisi officiis vero expedita sit quam quas dolor voluptatem, ipsam itaque laborum nam modi aspernatur!',
    src: require("../../Images-Videos/images/duke/duke200-1.png"),
    images: [ 
    { src: require("../../Images-Videos/images/duke/duke200-2.png") },
    { src: require("../../Images-Videos/images/duke/duke200-3.png") },
    { src: require("../../Images-Videos/images/duke/duke200-4.png") },
    { src: require("../../Images-Videos/images/duke/duke200-5.png") },
    { src: require("../../Images-Videos/images/duke/duke200-6.jpg") },
    { src: require("../../Images-Videos/images/duke/duke200-7.jpg") } ]
  },
  {
    id: 2,
    product_name: 'DUKE 250',
    price: 53600000,
    product_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla doloribus, libero explicabo delectus minus distinctio earum cumque ullam, omnis suscipit animi sapiente magnam quos debitis possimus repellendus nostrum deleniti veniam magni vitae nesciunt eligendi! Accusantium dolorum eaque tempora, voluptates quo ipsum esse deleniti distinctio nisi officiis vero expedita sit quam quas dolor voluptatem, ipsam itaque laborum nam modi aspernatur!',
    src: require("../../Images-Videos/images/duke/duke250-3.png"),
    images: [ 
    { src: require("../../Images-Videos/images/duke/duke200-2.png") },
    { src: require("../../Images-Videos/images/duke/duke200-3.png") },
    { src: require("../../Images-Videos/images/duke/duke200-4.png") },
    { src: require("../../Images-Videos/images/duke/duke200-5.png") },
    { src: require("../../Images-Videos/images/duke/duke200-6.jpg") },
    { src: require("../../Images-Videos/images/duke/duke200-7.jpg") } ]
  },
  {
    id: 3,
    product_name: 'DUKE 390',
    price: 53600000,
    product_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla doloribus, libero explicabo delectus minus distinctio earum cumque ullam, omnis suscipit animi sapiente magnam quos debitis possimus repellendus nostrum deleniti veniam magni vitae nesciunt eligendi! Accusantium dolorum eaque tempora, voluptates quo ipsum esse deleniti distinctio nisi officiis vero expedita sit quam quas dolor voluptatem, ipsam itaque laborum nam modi aspernatur!',
    src: require("../../Images-Videos/images/duke/duke390-5.png"),
    images: [ 
    { src: require("../../Images-Videos/images/duke/duke200-2.png") },
    { src: require("../../Images-Videos/images/duke/duke200-3.png") },
    { src: require("../../Images-Videos/images/duke/duke200-4.png") },
    { src: require("../../Images-Videos/images/duke/duke200-5.png") },
    { src: require("../../Images-Videos/images/duke/duke200-6.jpg") },
    { src: require("../../Images-Videos/images/duke/duke200-7.jpg") } ]
  },
  {
    id: 4,
    product_name: 'DUKE 790',
    price: 53600000,
    product_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla doloribus, libero explicabo delectus minus distinctio earum cumque ullam, omnis suscipit animi sapiente magnam quos debitis possimus repellendus nostrum deleniti veniam magni vitae nesciunt eligendi! Accusantium dolorum eaque tempora, voluptates quo ipsum esse deleniti distinctio nisi officiis vero expedita sit quam quas dolor voluptatem, ipsam itaque laborum nam modi aspernatur!',
    src: require("../../Images-Videos/images/duke/duke790-1.png"),
    images: [ 
    { src: require("../../Images-Videos/images/duke/duke200-2.png") },
    { src: require("../../Images-Videos/images/duke/duke200-3.png") },
    { src: require("../../Images-Videos/images/duke/duke200-4.png") },
    { src: require("../../Images-Videos/images/duke/duke200-5.png") },
    { src: require("../../Images-Videos/images/duke/duke200-6.jpg") },
    { src: require("../../Images-Videos/images/duke/duke200-7.jpg") } ]
  },
  {
    id: 5,
    product_name: 'SUPER DUKE',
    price: 53600000,
    product_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla doloribus, libero explicabo delectus minus distinctio earum cumque ullam, omnis suscipit animi sapiente magnam quos debitis possimus repellendus nostrum deleniti veniam magni vitae nesciunt eligendi! Accusantium dolorum eaque tempora, voluptates quo ipsum esse deleniti distinctio nisi officiis vero expedita sit quam quas dolor voluptatem, ipsam itaque laborum nam modi aspernatur!',
    src: require("../../Images-Videos/images/duke/superduke-5.png"),
    images: [ 
    { src: require("../../Images-Videos/images/duke/duke200-2.png") },
    { src: require("../../Images-Videos/images/duke/duke200-3.png") },
    { src: require("../../Images-Videos/images/duke/duke200-4.png") },
    { src: require("../../Images-Videos/images/duke/duke200-5.png") },
    { src: require("../../Images-Videos/images/duke/duke200-6.jpg") },
    { src: require("../../Images-Videos/images/duke/duke200-7.jpg") } ]
  }
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 3,
    partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1500, min: 400 },
    items: 1,
    // partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
    // partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  }
};

function Products() {

  return (

    <>
      <div className='duke'>
        <div className='box-wrapper'>
          	<div className='duke-box'>
              <div className='d-flex flex-column'>
                <div className='duke-box-text'>
                  <h1 className='duke-text'>Duke</h1>
                  <h3 className='duke-text-h3'>Get naked</h3>
                  <h3 className='duke-text-h3'>Feel the torque</h3>
                  <h3 className='duke-text-h3'>Ready to Race</h3>
                </div>
                <div className='duke-box-subtext'>
                  <div className='d-flex flex-column'>
                    <h1 className='duke-text-b'>World's best naked bike</h1>
                    <h3 className='duke-text-h3-b'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quod. Officiis delectus at ullam nulla voluptatem aperiam, suscipit nihil, dolor eos omnis quos perspiciatis vitae sapiente molestias dicta! Laudantium, repudiandae eos. Harum illum officia eligendi, ad vel cum laboriosam aliquid?</h3>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <video width='60%' loop playsinline controls className='duke-video'>
          <source src={DUKERIDER} type="video/mp4"/>
        </video>
      </div>

      <div className='d-flex justify-content-center crsl'>
        <Carousel partialVisible={true} responsive={responsive} swipeable={true} draggable={true} infinite={true} className='car'>
          {duke.map((d) => {
            return <ProductsCard details={d}/>
          })}
        </Carousel>
      </div>
      {/* <div className='product-catalogue'>
        <h1 className='product-head'>Duke</h1>
        {duke.map((d) => {
          return <ProductsCard details={d}/>
        })}
      </div>

      <div className='product-catalogue'>
        <h1 className='product-head'>RC</h1>
        <Carousel touch='true' interval={4000}>
          {duke.map((dukes) => {

            return <Carousel.Item id="item">
              <ProductsCard details={dukes}/>
            </Carousel.Item>

          })}
        </Carousel>
      </div> */}
    </>

  )
};

export default Products;