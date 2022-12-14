import React from 'react';
import { useParams } from 'react-router-dom';

import './duke.css';
import Table from 'react-bootstrap/Table';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const duke = [
    {
      id: 125,
      product_name: 'DUKE 125',
      price: 43600000,
      product_desc: `The KTM 125 DUKE may be the entry-level bike of the range, but it isn't here to play games. It's built with the same attitude as the bigger bikes - and it shows. It's no holds barred with this urban warrior, complete with an LED headlight and TFT display. This 4-stroke single cylinder has fuel-injection and a 6-speed transmission to deliver class-leading performance with low fuel consumption to keep you riding longer. `,
      
      spec: [
        { title: 'Power & Torque',
          desc: 'A bike as compact and nimble as this one, deserves to pack a solid punch. With 11 kW (15 hp) it is right for entry level enthusiasts. Thanks to the ingenious intake and exhaust system, the 33 mm throttle body and the meticulous fuel injection system, this strong stroker is ready to leave the rest of the city traffic behind at the twist of your wrist.' },
        { title: 'Engine',
          desc: 'The KTM 125 DUKE engine not only delivers arm-wrenching torque and hair-raising acceleration, but also good manners in everyday use, all with outstanding fuel economy. This lightweight, compact engine packs a good punch too, with a respectable 11 kW (15 hp). Thanks to the ingenious intake design and the meticulous fuel injection system, the KTM 125 DUKE is ready and waiting to tear-up the streets and the circuits alike.' },
        { title: 'Exhaust',
          desc: 'The KTM 125 DUKE’s lightweight and precision-crafted exhaust system comprises of a side exhaust, link pipe and silencer. The three-chamber silencer has been positioned close to the bike’s overall center of gravity, improving balance and handling, whilst also delivering smooth, instant and beast-like power. Oh, and it looks angry as hell too.' },
        { title: 'Injection',
          desc: 'Just like the KTM 1290 SUPER DUKE R, the four valves in the cylinder head of the KTM 125 DUKE are actuated by two overhead camshafts and ultra-hard, carbon coated cam followers. The result is an ultra-reliable, long-lasting engine that produces next-level power.' }
      ],

      engine: [
        { title: 'Torque',
          value: '12 Nm'
        },
        { title: 'Transmission',
          value: '6-Speed'
        },
        { title: 'Design',
          value: '1-cylinder, 4-stroke engine'
        },
        { title: 'Stroke',
          value: '47.2 mm'
        },
        { title: 'Bore',
          value: '58 mm'
        },
      ],

      chassis: [
        { title: 'Dry weight',
          value: '141 KG'
        },
        { title: 'Front suspension',
          value: 'WP-USD, AER 43, Ø 43 mm'
        },
        { title: 'Tank capacity',
          value: '11 L'
        },
        { title: 'Front brake disc diameter',
          value: '300 mm'
        },
        { title: 'Rear brake disc diameter',
          value: '230 mm'
        },
        { title: 'Front brake',
          value: 'Four-piston radial fixed calliper, brake disc'
        },
        { title: 'Rear brake',
          value: 'Single-piston floating calliper, brake disc'
        },
        { title: 'Steering head angle',
          value: '65 °'
        }
      ],

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
      product_desc: `Thanks to an ultra-compact single-cylinder 4-stroke power plant and a lightweight tubular chassis, the KTM 200 DUKE packs a mighty punch. An updated predatory design proudly displays its BEAST-inspired DNA and shouts DUKE. Make no mistake – the KTM 200 DUKE is an out-and-out street prowling brawler.`,

      spec: [
        { title: 'Engine',
          desc: `Powered by a powerful single-cylinder engine, the KTM 200 DUKE not only delivers intoxicating acceleration but also everyday rideability. Boasting 19 kW (26 hp), it's the most powerful 4-stroke option in its class. Thanks to an updated airbox and exhaust, it meets the highest emission and noise standards, while providing maximum performance.` },
        { title: 'Exhaust',
          desc: 'The KTM 200 DUKE boasts a new, improved and compact exhaust system, engineered to meet the highest emission and noise standards, while providing maximum performance.' },
        { title: 'Injection',
          desc: 'The intricate engine design, state-of-the-art injection electronics and close-ratio, 6-speed transmission not only help the KTM 200 DUKE to achieve white-knuckle performance, but also extremely low fuel consumption. At the same time, thanks to the regulated catalytic converter, it produces minimal emissions, even when riding at full throttle.' }
      ],

      engine: [
        { title: 'Torque',
          value: '19.5 Nm'
        },
        { title: 'Transmission',
          value: '6-Speed'
        },
        { title: 'Design',
          value: '1-cylinder, 4-stroke engine'
        },
        { title: 'Stroke',
          value: '49 mm'
        },
        { title: 'Bore',
          value: '72 mm'
        },
      ],

      chassis: [
        { title: 'Dry weight',
          value: '140 KG'
        },
        { title: 'Front suspension',
          value: 'WP-USD, AER 43, Ø 43 mm'
        },
        { title: 'Tank capacity',
          value: '13.5 L'
        },
        { title: 'Front brake disc diameter',
          value: '300 mm'
        },
        { title: 'Rear brake disc diameter',
          value: '230 mm'
        },
        { title: 'Front brake',
          value: 'Four-piston radial fixed calliper, brake disc'
        },
        { title: 'Rear brake',
          value: 'Single-piston floating calliper, brake disc'
        },
        { title: 'Steering head angle',
          value: '65 °'
        }
      ],

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
      price: 63000000,
      product_desc: `If chasing thrills is your game then climb aboard the KTM 250 DUKE. It combines maximum riding exhilaration with optimum user value and is hard to beat wherever nimble handling counts. Lightweight, powerful and packed with advanced technology, it promises to deliver a thrilling ride from sunrise to sunset.`,

      spec: [
        { title: 'Power & Torque',
          desc: `A bike as compact and nimble as this one deserves to pack a solid punch. With 22 kW (30 hp) for an extremely lightweight craftsmanship, it does just that. Thanks to the ingenious intake and exhaust system, the 38 mm throttle body and the meticulous fuel injection system, this strong stroker is ready to leave the rest of the city traffic behind at the twist of your wrist.`
        },
        { title: 'Engine',
          desc: `The latest materials and production technologies not only deliver the bike's bountiful torque and punchy acceleration, but also good manners in everyday use and outstanding fuel economy. A bike as compact and nimble as this one deserves to pack a solid punch. With 22 kW (30 hp) for an extremely lightweight craftsmanship, it does just that. Thanks to the ingenious intake and exhaust system, the 38 mm throttle body and the meticulous fuel injection system, this strong stroker is ready to leave the rest of the city traffic behind at the twist of your wrist. ` },
        { title: 'Exhaust',
          desc: 'The KTM 250 DUKE’s lightweight and precision-crafted exhaust system comprises of a side exhaust, link pipe and silencer. The three-chamber silencer has been positioned close to the bike’s overall center of gravity, improving balance and handling, whilst also delivering smooth, instant and beast-like power. Oh, and it looks angry as hell too.' }
      ],

      engine: [
        { title: 'Torque',
          value: '24 Nm'
        },
        { title: 'Transmission',
          value: '6-Speed'
        },
        { title: 'Design',
          value: '1-cylinder, 4-stroke engine'
        },
        { title: 'Stroke',
          value: '61.1 mm'
        },
        { title: 'Bore',
          value: '72 mm'
        },
      ],

      chassis: [
        { title: 'Dry weight',
          value: '169 KG'
        },
        { title: 'Front suspension',
          value: 'WP upside-down Ø 43 mm'
        },
        { title: 'Tank capacity',
          value: '13.4 L'
        },
        { title: 'ABS',
          value: 'Bosch 9.1MB Two Channel ABS'
        },
        { title: 'Front brake disc diameter',
          value: '300 mm'
        },
        { title: 'Rear brake disc diameter',
          value: '230 mm'
        },
        { title: 'Front brake',
          value: 'Four-piston radial fixed calliper, brake disc'
        },
        { title: 'Rear brake',
          value: 'Single-piston floating calliper, brake disc'
        },
        { title: 'Steering head angle',
          value: '65 °'
        }
      ],

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
      price: 113600000,
      product_desc: `The KTM 790 DUKE is as surgical as its nickname suggests. With the agility, you'd expect from a single, combined with the hard-hitting punch of a twin, the KTM 790 DUKE slices up the road with pinpoint precision. With a 799 cc LC8c parallel twin motor - the most compact in its class - nestled into one of the lightest frames around, the KTM 790 DUKE is all about being fast everywhere, with the corners being its playground.`,

      spec: [
        { title: 'Power & Torque',
          desc: `A bike as compact and nimble as this one, deserves to pack a solid punch. With 32 kW (43,5 hp) and a dry weight of just 167 kg, we did it justice. Thanks to the ingenious intake and exhaust system, the 46 mm throttle body and the meticulous fuel injection system, this strong stroker is ready to leave the rest of the traffic behind at the twist of your wrist.` },
        { title: 'Engine',
          desc: `The latest materials and production technologies not only deliver the bike's bountiful torque and punchy acceleration, but also good manners in everyday use and outstanding fuel economy. A bike as compact and nimble as this one deserves to pack a solid punch. With 32 kW (43,5 hp) for an extremely lightweight craftsmanship, it does just that. Thanks to the ingenious intake and exhaust system, the 46 mm throttle body and the meticulous fuel injection system, this strong stroker is ready to leave the rest of the city traffic behind at the twist of your wrist.` },
        { title: 'Exhaust',
          desc: 'The KTM 390 DUKE’s lightweight and precision-crafted exhaust system comprises of a side exhaust, link pipe and silencer. The three-chamber silencer has been positioned close to the bike’s overall center of gravity, improving balance and handling, whilst also delivering smooth, instant and beast-like power. Oh, and it looks angry as hell too.' },
        { title: 'Injection',
          desc: 'The intricate engine design, state-of-the-art injection electronics and close-ratio, 6-speed transmission not only help the KTM 390 DUKE to achieve white-knuckle performance, but also extremely low fuel consumption. At the same time, thanks to the regulated catalytic converter, it produces minimal emissions, even when riding at full throttle.' }
      ],

      engine: [
        { title: 'Torque',
          value: '37 Nm'
        },
        { title: 'Transmission',
          value: '6-Speed'
        },
        { title: 'Design',
          value: '1-cylinder, 4-stroke engine'
        },
        { title: 'Stroke',
          value: '60 mm'
        },
        { title: 'Bore',
          value: '89 mm'
        },
      ],

      chassis: [
        { title: 'Dry weight',
          value: '167 KG'
        },
        { title: 'Front suspension',
          value: 'WP APEX 43'
        },
        { title: 'Rear suspension',
          value: 'WP APEX - Monoshock'
        },
        { title: 'ABS',
          value: 'Bosch 9.1MP Two Channel ABS (Supermoto ABS)'
        },
        { title: 'Tank capacity',
          value: '13.4 L'
        },
        { title: 'Front brake disc diameter',
          value: '300 mm'
        },
        { title: 'Rear brake disc diameter',
          value: '230 mm'
        },
        { title: 'Front brake',
          value: 'Four-piston radial fixed calliper, brake disc'
        },
        { title: 'Rear brake',
          value: 'Single-piston floating calliper, brake disc'
        },
        { title: 'Steering head angle',
          value: '65 °'
        }
      ],

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
      price: 310500000,
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
      price: 535000000,
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

            <div>
              <Carousel partialVisible={true} responsive={responsive} swipeable={true} draggable={true} infinite={true} autoPlay={true} autoPlaySpeed={7000} className='my-5 car-spec'>
                {filtered.spec.map((specs) => {
                  return <div className='spec'>
                    <div className='d-flex flex-column px-5'>
                      <h1>{specs.title}</h1>
                      <h4>{specs.desc}</h4>
                    </div>
                  </div>
                })}
              </Carousel>
            </div>

            <div>
              <h1 className='table-title'>Engine</h1>
              <Table bordered hover variant="dark">
                <thead>
                  <tr>
                    <th className='th'>Name</th>
                    <th className='th'>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.engine.map((eng) => {
                    return <tr>
                      <td>{eng.title}</td>
                      <td>{eng.value}</td>
                    </tr>
                  })}
                </tbody>
              </Table>
            </div>

            <div>
              <h1 className='table-title'>Chassis</h1>
              <Table bordered hover variant="dark">
                <thead>
                  <tr>
                    <th className='th'>Name</th>
                    <th className='th'>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.chassis.map((eng) => {
                    return <tr>
                      <td>{eng.title}</td>
                      <td>{eng.value}</td>
                    </tr>
                  })}
                </tbody>
              </Table>
            </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Duke