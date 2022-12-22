import React, { useEffect, useState } from 'react';
import axios from "../../axios/axios";
import { useParams } from "react-router-dom";

import './profile.css';
import { Carousel, Card, Button, Tab, Tabs } from 'react-bootstrap';
import MOTOGP from '../../Images-Videos/videos/MOTOGP.mp4';

const slideImages = [
  {
    src: require('../../Images-Videos/images/motogp/ktm-motogp.jpg')
  },
  {
    src: require('../../Images-Videos/images/motogp/motogp-1.jpg')
  },
  {
    src: require('../../Images-Videos/images/motogp/motogp-2.jpg')
  },
  {
    src: require('../../Images-Videos/images/motogp/motogp-3.jpg')
  },
  {
    src: require('../../Images-Videos/images/motogp/motogp-4.jpg')
  }
];

const riders = [
  {
    name: 'Brad Binder',
    class: 'MotoGP',
    number: 33,
    country: 'South Africa',
    birthday: 'August 11th, 1995',
    src: require('../../Images-Videos/images/motogp/riders/brad.jpg')
  },
  {
    name: 'Miguel Oliveira',
    class: 'MotoGP',
    number: 88,
    country: 'Portugal',
    birthday: 'January 1st, 1995',
    src: require('../../Images-Videos/images/motogp/riders/miguel.jpg')
  },
  {
    name: 'Raul fernandez',
    class: 'MotoGP',
    number: 25,
    country: 'Spain',
    birthday: 'October 23rd, 2000',
    src: require('../../Images-Videos/images/motogp/riders/raul.jpg')
  },
  {
    name: 'Remy Gardner',
    class: 'MotoGP',
    number: 87,
    country: 'Australia',
    birthday: 'February 24th, 1998',
    src: require('../../Images-Videos/images/motogp/riders/remy.jpg')
  },
  {
    name: 'Jaume Masia',
    class: 'Moto3',
    number: 5,
    country: 'Spain',
    birthday: 'October 31st, 2000',
    src: require('../../Images-Videos/images/motogp/riders/masia.jpg')
  },
  {
    name: 'Pedro Acosta',
    class: 'Moto2',
    number: 51,
    country: 'Spain',
    birthday: 'May 25th, 2005',
    src: require('../../Images-Videos/images/motogp/riders/pedro.jpg')
  },
  {
    name: 'Deniz Oncu',
    class: 'Moto3',
    number: 53,
    country: 'Turkey',
    birthday: 'July 26th, 2003',
    src: require('../../Images-Videos/images/motogp/riders/deniz.jpg')
  }
]

function Profile() {
  const params = useParams();

  const [ rider, setRider ] = useState();

  useEffect(() => {
    axios
        .get("/riders", { params: { id: params.id } })
        .then((res) => {
          console.log(res)
          console.log(res.data)
          setRider(res.data)
        })
        .catch((err) => {
          console.log({ err });
        });
  }, []);

  return (
    <div>
      <div className='d-flex justify-content-center mt-5'>
        <img src={require('../../Images-Videos/images/Factory Racing Logo.jpg')} className='factory'/>
      </div>
      <h1 className='profile-head'>Ready to Race</h1>
      <h2 className='profile-subhead'>We are motogp</h2>
      <Carousel touch='true' interval={4000}>
        {slideImages.map((slide) => {

          return <Carousel.Item id="item">
            <img src={slide.src} className="ima" />
          </Carousel.Item>

        })}
      </Carousel>

      <h2 className='profile-subhead'>We are ready for 2023</h2>

      <video width='100%' loop playsinline controls className='video-ktm'>
        <source src={MOTOGP} type="video/mp4"></source>
      </video>

      <h1 className='profile-head'>Meet our Riders</h1>

      <div className='rider'>
          {rider.map((rdr) => {

            return <Card className='kartu'>
              <Card.Img src={rdr.src} className='img-card'/>
              <Card.ImgOverlay>
                <div className='rider-img-text'>
                  <div className='d-flex flex-column'>
                    <h1 className='rider-name'>
                      {rdr.name}
                    </h1>
                    <Button className='rider-details'>Rider Details</Button>
                  </div>
                </div>
              </Card.ImgOverlay>
            </Card>
          })}
      </div>

      <div>
        <h1 className='fim'>FIM World Championship</h1>

        <Tabs defaultActiveKey="MotoGP" id="fill-tab-example" className="mb-3 my-5 mx-4" fill>
          <Tab eventKey="MotoGP" title="MotoGP" className='tab-gp'>
            <h3 className='tab-text'>

              2021 saw Brad Binder match the all-time speed record of 362.4km/h aboard his KTM RC16. The season included a phenomenal victory in Catalunya by Miguel Oliveira, as well as a brave wet weather victory from Brad Binder in Spielberg. Unpolished. Unscripted. Untamed. KTM Factory Racing is certainly ready for 2022.

            <img src={require('../../Images-Videos/images/motogp/rc16.jpg')} className='rc'/>

              KTM entered the premier MotoGP category with the newly developed KTM RC16 in 2017 and has since been developing its machine in an arena that demands the highest technical know-how. In a short time KTM has bridged the gap from the back of the grid to be serious competitors and race-winners in the premier category. KTM continues with a four-rider line-up in 2022; MotoGP race-winners Brad Binder and Miguel Oliveira in the Red Bull KTM Factory Racing team along with 2021 Moto2 World Champion Remy Gardner and runner-up Raul Fernandez in the Tech3 KTM Factory Racing outfit. MotoGP Legend Dani Pedrosa and Mika Kallio ensure a deeply experienced test team.

            </h3>
          </Tab>
          <Tab eventKey="Moto2" title="Moto2 / Moto3" className='tab-gp'>
            <h3 className='tab-text'>
              
              KTM has one of the most extensive networks operating through MotoGP. The manufacturer pushes potential new and exciting athletes through a concept entitled the ‘KTM GP Academy’. Moto3 is the foundation on FIM Grand Prix World Championship level, and KTM boasts five Moto3 FIM World Championship titles in the class – three achieved with help from long-term partner Red Bull KTM Ajo in 2012, 2016 and 2021 – and two with a customer version of the KTM RC4 in 2013 and 2020. In 2022 Red Bull KTM Ajo´s Jaume Masia and Dani Holgado  – joined by Red Bull KTM Tech3 duo Deniz Öncü and Adrian Fernandez - are four of 12 KTM RC4 riders aiming for glory in Moto3. 2021 Moto3 World Champion Pedro Acosta and Augusto Fernandez maintain fast and competitive links for Red Bull KTM Ajo in Moto2 in 2022.

            <img src={require('../../Images-Videos/images/motogp/moto2-4.jpg')} className='rc'/>
            <h3 className='tab-text mt-0'>Moto 2 World Championship</h3>

            <img src={require('../../Images-Videos/images/motogp/moto3-3.jpg')} className='rc'/>
            <h3 className='tab-text mt-0'>KTM RC4 Moto 3 World Championship</h3>

            </h3>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Profile;