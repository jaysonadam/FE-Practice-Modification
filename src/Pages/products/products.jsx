import React from 'react';
import { useInView } from 'react-intersection-observer';

import './products.css';
import DUKERIDER from '../../Images-Videos/videos/DUKERIDER.mp4';
import ProductsCard from '../../Components/ProductsCard/card';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const duke = [
  {
    id: 125,
    product_name: 'DUKE 125',
    price: 53600000,
    product_desc: `The KTM 125 DUKE may be the entry-level bike of the range, but it isn't here to play games. It's built with the same attitude as the bigger bikes - and it shows. It's no holds barred with this urban warrior, complete with an LED headlight and TFT display. This 4-stroke single cylinder has fuel-injection and a 6-speed transmission to deliver class-leading performance with low fuel consumption to keep you riding longer. `,
    src: require("../../Images-Videos/images/duke/My project-1.png")
  },
  {
    id: 200,
    product_name: 'DUKE 200',
    price: 53600000,
    product_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla doloribus, libero explicabo delectus minus distinctio earum cumque ullam, omnis suscipit animi sapiente magnam quos debitis possimus repellendus nostrum deleniti veniam magni vitae nesciunt eligendi! Accusantium dolorum eaque tempora, voluptates quo ipsum esse deleniti distinctio nisi officiis vero expedita sit quam quas dolor voluptatem, ipsam itaque laborum nam modi aspernatur!',
    src: require("../../Images-Videos/images/duke/duke200-1.png")
  },
  {
    id: 250,
    product_name: 'DUKE 250',
    price: 53600000,
    product_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla doloribus, libero explicabo delectus minus distinctio earum cumque ullam, omnis suscipit animi sapiente magnam quos debitis possimus repellendus nostrum deleniti veniam magni vitae nesciunt eligendi! Accusantium dolorum eaque tempora, voluptates quo ipsum esse deleniti distinctio nisi officiis vero expedita sit quam quas dolor voluptatem, ipsam itaque laborum nam modi aspernatur!',
    src: require("../../Images-Videos/images/duke/duke250-3.png")
  },
  {
    id: 390,
    product_name: 'DUKE 390',
    price: 53600000,
    product_desc: `The KTM 790 DUKE is as surgical as its nickname suggests. With the agility, you'd expect from a single, combined with the hard-hitting punch of a twin, the KTM 790 DUKE slices up the road with pinpoint precision. With a 799 cc LC8c parallel twin motor - the most compact in its class - nestled into one of the lightest frames around, the KTM 790 DUKE is all about being fast everywhere, with the corners being its playground.`,
    src: require("../../Images-Videos/images/duke/duke390-1.png")
  },
  {
    id: 790,
    product_name: 'DUKE 790',
    price: 53600000,
    product_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla doloribus, libero explicabo delectus minus distinctio earum cumque ullam, omnis suscipit animi sapiente magnam quos debitis possimus repellendus nostrum deleniti veniam magni vitae nesciunt eligendi! Accusantium dolorum eaque tempora, voluptates quo ipsum esse deleniti distinctio nisi officiis vero expedita sit quam quas dolor voluptatem, ipsam itaque laborum nam modi aspernatur!',
    src: require("../../Images-Videos/images/duke/duke790-1.png")
  },
  {
    id: 1290,
    product_name: 'SUPER DUKE',
    price: 53600000,
    product_desc: `Sitting at the very top of the hyper-naked food chain, boasting a menacing collection of high-performance chassis and engine specifications, as well as top-shelf rider enhancements and electronics, the KTM 1290 SUPER DUKE R needs no introduction. But we gave it one anyway. Introducing THE BEAST. `,
    src: require("../../Images-Videos/images/duke/superduke-5.png")
  }
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 3,
    partialVisibilityGutter: 60 // this is needed to tell the amount of px that should be visible.
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
  const { ref: myRef, inView: isVisible } = useInView();

  return (

    <>
      <div className='products-head'>
        <h1 className='products-title'>Duke</h1>
      </div>
      <div className='baris'>
        <div className='duke'>
          <img src={require("../../Images-Videos/images/duke/duke790-1.png")} className='img-duke'/>
          <h1 className='duke-790'>DUKE 790</h1>
        </div>
        <div className='duke-2'>
          <div className='d-flex flex-column mx-5'>
            <h1 className='duke-head'>World's best naked bike</h1>
            <h3 className='duke-subtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ea assumenda aliquam, cum corrupti quas inventore architecto quos, voluptatem debitis autem eos officiis accusamus? Consequuntur ipsa, aspernatur temporibus nisi reprehenderit dicta voluptates tenetur fugiat? Delectus laborum corporis quos ipsum reprehenderit?</h3>
          </div>
        </div>
        </div>
        <div className='baris'>
          <div className='duke-video-text'>
              <h3 className='duke-subtext-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ab itaque totam quasi dolore asperiores nemo repellendus officia molestias facere! Sunt consequatur quibusdam aliquid commodi sit molestiae facilis incidunt dolore.</h3>
          </div>
          <div className='duke-video-box'>
            <video loop playsinline autoPlay className='duke-video'>
              <source src={DUKERIDER} type="video/mp4"/>
            </video>
          </div>
        </div>


      <div className='d-flex justify-content-center crsl'>
        <Carousel partialVisible={true} responsive={responsive} swipeable={true} draggable={true} infinite={true} className='car'>
          {duke.map((d) => {
            return <ProductsCard details={d}/>
          })}
        </Carousel>
      </div>
    </>

  )
};

export default Products;