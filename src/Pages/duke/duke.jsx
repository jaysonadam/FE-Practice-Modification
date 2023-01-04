import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './duke.css';

const duke = [
    {
      id: 200,
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
      { src: require("../../Images-Videos/images/duke/duke250-5.png") },
      { src: require("../../Images-Videos/images/duke/duke250-6.jpg") },
      { src: require("../../Images-Videos/images/duke/duke250-7.jpg") },
      { src: require("../../Images-Videos/images/duke/duke250-8.jpg") },
      { src: require("../../Images-Videos/images/duke/duke250-9.jpg") } ]
    },
    {
      id: 390,
      product_name: 'DUKE 390',
      price: 53600000,
      product_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla doloribus, libero explicabo delectus minus distinctio earum cumque ullam, omnis suscipit animi sapiente magnam quos debitis possimus repellendus nostrum deleniti veniam magni vitae nesciunt eligendi! Accusantium dolorum eaque tempora, voluptates quo ipsum esse deleniti distinctio nisi officiis vero expedita sit quam quas dolor voluptatem, ipsam itaque laborum nam modi aspernatur!',
      src: require("../../Images-Videos/images/duke/duke390-5.png"),
      images: [ 
      { src: require("../../Images-Videos/images/duke/duke390-1.png") },
      { src: require("../../Images-Videos/images/duke/duke390-2.png") },
      { src: require("../../Images-Videos/images/duke/duke390-3.png") },
      { src: require("../../Images-Videos/images/duke/duke390-4.png") },
      { src: require("../../Images-Videos/images/duke/duke390-5.png") },
      { src: require("../../Images-Videos/images/duke/duke390-6.jpg") },
      { src: require("../../Images-Videos/images/duke/duke390-7.jpg") }, 
      { src: require("../../Images-Videos/images/duke/duke390-8.jpg") }, 
      { src: require("../../Images-Videos/images/duke/duke390-9.jpg") }, 
      { src: require("../../Images-Videos/images/duke/duke390-10.jpg") } ]
    },
    {
      id: 790,
      product_name: 'DUKE 790',
      price: 53600000,
      product_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla doloribus, libero explicabo delectus minus distinctio earum cumque ullam, omnis suscipit animi sapiente magnam quos debitis possimus repellendus nostrum deleniti veniam magni vitae nesciunt eligendi! Accusantium dolorum eaque tempora, voluptates quo ipsum esse deleniti distinctio nisi officiis vero expedita sit quam quas dolor voluptatem, ipsam itaque laborum nam modi aspernatur!',
      src: require("../../Images-Videos/images/duke/duke790-1.png"),
      images: [ 
      { src: require("../../Images-Videos/images/duke/duke790-1.png") },
      { src: require("../../Images-Videos/images/duke/duke790-2.png") },
      { src: require("../../Images-Videos/images/duke/duke790-3.png") },
      { src: require("../../Images-Videos/images/duke/duke790-4.png") },
      { src: require("../../Images-Videos/images/duke/duke790-5.jpg") },
      { src: require("../../Images-Videos/images/duke/duke790-6.jpg") },
      { src: require("../../Images-Videos/images/duke/duke790-7.jpg") },
      { src: require("../../Images-Videos/images/duke/duke790-8.jpg") },
      { src: require("../../Images-Videos/images/duke/duke790-9.jpg") },
      { src: require("../../Images-Videos/images/duke/duke790-tft.jpg") } ]
    },
    {
      id: 1290,
      product_name: 'SUPER DUKE',
      price: 53600000,
      product_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla doloribus, libero explicabo delectus minus distinctio earum cumque ullam, omnis suscipit animi sapiente magnam quos debitis possimus repellendus nostrum deleniti veniam magni vitae nesciunt eligendi! Accusantium dolorum eaque tempora, voluptates quo ipsum esse deleniti distinctio nisi officiis vero expedita sit quam quas dolor voluptatem, ipsam itaque laborum nam modi aspernatur!',
      src: require("../../Images-Videos/images/duke/superduke-5.png"),
      images: [ 
      { src: require("../../Images-Videos/images/duke/superduke-1.png") },
      { src: require("../../Images-Videos/images/duke/superduke-2.jpg") },
      { src: require("../../Images-Videos/images/duke/superduke-3.jpg") },
      { src: require("../../Images-Videos/images/duke/superduke-4.jpg") },
      { src: require("../../Images-Videos/images/duke/superduke-5.png") } ]
    }
]

function Duke() {
  const params = useParams();
  const id = params.id;

  return (
    <>
    <div>Duke {id}</div>
    <div>
      {duke.filter(dukes => dukes.id == id).map(filtered => (
        <div>
          <img src={filtered.src} className='duke-img'/>
          {filtered.images.map((image) => (
            <img src={image.src}/>
          ))}
        </div>
      ))}
    </div>
    </>
  )
}

export default Duke