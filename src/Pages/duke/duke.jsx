import React from 'react';
import { useParams } from 'react-router-dom';

import './duke.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const duke = [
    {
      id: 125,
      product_name: 'DUKE 125',
      price: 53600000,
      product_desc: `The KTM 125 DUKE may be the entry-level bike of the range, but it isn't here to play games. It's built with the same attitude as the bigger bikes - and it shows. It's no holds barred with this urban warrior, complete with an LED headlight and TFT display. This 4-stroke single cylinder has fuel-injection and a 6-speed transmission to deliver class-leading performance with low fuel consumption to keep you riding longer. `,
      src: require("../../Images-Videos/images/duke/My project-1.png"),
      images: [ 
      { src: require("../../Images-Videos/images/duke/duke125-1.png") },
      { src: require("../../Images-Videos/images/duke/duke125-2.jpg") },
      { src: require("../../Images-Videos/images/duke/duke125-3.jpg") },
      { src: require("../../Images-Videos/images/duke/duke125-4.jpg") },
      { src: require("../../Images-Videos/images/duke/duke125-5.jpg") }, ]
    },
    {
      id: 200,
      product_name: 'DUKE 200',
      price: 53600000,
      product_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla doloribus, libero explicabo delectus minus distinctio earum cumque ullam, omnis suscipit animi sapiente magnam quos debitis possimus repellendus nostrum deleniti veniam magni vitae nesciunt eligendi! Accusantium dolorum eaque tempora, voluptates quo ipsum esse deleniti distinctio nisi officiis vero expedita sit quam quas dolor voluptatem, ipsam itaque laborum nam modi aspernatur!',
      src: require("../../Images-Videos/images/duke/duke200-1.png"),
      images: [ 
      { src: require("../../Images-Videos/images/duke/duke200-1.png") },
      { src: require("../../Images-Videos/images/duke/duke200-2.png") },
      { src: require("../../Images-Videos/images/duke/duke200-3.png") },
      { src: require("../../Images-Videos/images/duke/duke200-4.png") } ]
    },
    {
      id: 250,
      product_name: 'DUKE 250',
      price: 53600000,
      product_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla doloribus, libero explicabo delectus minus distinctio earum cumque ullam, omnis suscipit animi sapiente magnam quos debitis possimus repellendus nostrum deleniti veniam magni vitae nesciunt eligendi! Accusantium dolorum eaque tempora, voluptates quo ipsum esse deleniti distinctio nisi officiis vero expedita sit quam quas dolor voluptatem, ipsam itaque laborum nam modi aspernatur!',
      src: require("../../Images-Videos/images/duke/duke250-3.png"),
      images: [ 
      { src: require("../../Images-Videos/images/duke/duke250-1.png") },
      { src: require("../../Images-Videos/images/duke/duke250-2.png") },
      { src: require("../../Images-Videos/images/duke/duke250-3.png") },
      { src: require("../../Images-Videos/images/duke/duke250-4.png") },
      { src: require("../../Images-Videos/images/duke/duke250-5.png") } ]
    },
    {
      id: 390,
      product_name: 'DUKE 390',
      price: 53600000,
      product_desc: `The KTM 790 DUKE is as surgical as its nickname suggests. With the agility, you'd expect from a single, combined with the hard-hitting punch of a twin, the KTM 790 DUKE slices up the road with pinpoint precision. With a 799 cc LC8c parallel twin motor - the most compact in its class - nestled into one of the lightest frames around, the KTM 790 DUKE is all about being fast everywhere, with the corners being its playground.`,
      src: require("../../Images-Videos/images/duke/duke390-1.png"),
      images: [ 
      { src: require("../../Images-Videos/images/duke/duke390-1.png") },
      { src: require("../../Images-Videos/images/duke/duke390-2.png") },
      { src: require("../../Images-Videos/images/duke/duke390-3.png") },
      { src: require("../../Images-Videos/images/duke/duke390-4.png") } ]
    },
    {
      id: 790,
      product_name: 'DUKE 790',
      price: 53600000,
      product_desc: `The KTM 790 DUKE is as surgical as its nickname suggests. With the agility, you'd expect from a single, combined with the hard-hitting punch of a twin, the KTM 790 DUKE slices up the road with pinpoint precision. With a 799 cc LC8c parallel twin motor - the most compact in its class - nestled into one of the lightest frames around, the KTM 790 DUKE is all about being fast everywhere, with the corners being its playground.`,
      src: require("../../Images-Videos/images/duke/duke790-1.png"),
      images: [ 
      { src: require("../../Images-Videos/images/duke/duke790-1.png") },
      { src: require("../../Images-Videos/images/duke/duke790-2.png") },
      { src: require("../../Images-Videos/images/duke/duke790-3.png") },
      { src: require("../../Images-Videos/images/duke/duke790-4.png") } ]
    },
    {
      id: 1290,
      product_name: 'SUPER DUKE',
      price: 53600000,
      product_desc: `Sitting at the very top of the hyper-naked food chain, boasting a menacing collection of high-performance chassis and engine specifications, as well as top-shelf rider enhancements and electronics, the KTM 1290 SUPER DUKE R needs no introduction. But we gave it one anyway. Introducing THE BEAST. `,
      src: require("../../Images-Videos/images/duke/superduke-5.png"),
      images: [ 
      { src: require("../../Images-Videos/images/duke/superduke-1.png") },
      { src: require("../../Images-Videos/images/duke/superduke-2.jpg") },
      { src: require("../../Images-Videos/images/duke/superduke-3.jpg") },
      { src: require("../../Images-Videos/images/duke/superduke-5.png") } ]
    }
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 1,
    // partialVisibilityGutter: 60 // this is needed to tell the amount of px that should be visible.
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

function Duke() {
  const params = useParams();
  const id = params.id;

  return (
    <>
    <div>
      {duke.filter(dukes => dukes.id == id).map(filtered => (
        <div>
          <div className='img-wrapper'>
            <img src={filtered.src} className='duke-img'/>
          </div>
          <div className='trapezoid'>
            <div className='white-bg'>
              <h1 className='duke-name'>Duke {id}</h1>
              <div className='d-flex h-100 align-content-center'>
                <h3 className='desc'>{filtered.product_desc}</h3>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center mt-5'>
            <h1 className='price'>Price: Rp. {filtered.price.toLocaleString('id-ID')}</h1>
          </div>
            <>
              <Carousel partialVisible={true} responsive={responsive} swipeable={true} draggable={true} infinite={true} autoPlay={true} autoPlaySpeed={4000} className='my-5'>
              {filtered.images.map((image) => {
                  return <div className='car-div'>
                    <img src={image.src} className='car-img'/>
                  </div>
                })}
              </Carousel>
            </>
        </div>
      ))}
    </div>
    </>
  )
}

export default Duke