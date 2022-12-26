import React from 'react';
import { useParams } from 'react-router-dom';

import './riders.css';

const riders = [
    {
      id: 1,
      name: "Brad Binder",
      class: "MotoGP",
      number: 33,
      country: "South Africa",
      birthday: "August 11th, 1995",
      src: require("../../Images-Videos/images/riders/brad.jpg")
    },
    {
      id: 2,
      name: "Miguel Oliveira",
      class: "MotoGP",
      number: 88,
      country: "Portugal",
      birthday: "January 1st, 1995",
      src: require("../../Images-Videos/images/riders/miguel.jpg")
    },
    {
      id: 3,
      name: "Raul fernandez",
      class: "MotoGP",
      number: 25,
      country: "Spain",
      birthday: "October 23rd, 2000",
      src: require("../../Images-Videos/images/riders/raul.jpg")
    },
    {
      id: 4,
      name: "Remy Gardner",
      class: "MotoGP",
      number: 87,
      country: "Australia",
      birthday: "February 24th, 1998",
      src: require("../../Images-Videos/images/riders/remy.jpg")
    },
    {
      id: 5,
      name: "Jaume Masia",
      class: "Moto 3",
      number: 5,
      country: "Spain",
      birthday: "October 31st, 2000",
      src: require("../../Images-Videos/images/riders/masia.jpg")
    },
    {
      id: 6,
      name: "Pedro Acosta",
      class: "Moto 2",
      number: 51,
      country: "Spain",
      birthday: "May 25th, 2005",
      src: require("../../Images-Videos/images/riders/pedro.jpg")
    },
    {
      id: 7,
      name: "Deniz Oncu",
      class: "Moto 3",
      number: 53,
      country: "Turkey",
      birthday: "July 26th, 2003",
      src: require("../../Images-Videos/images/riders/deniz.jpg")
    }
]

function Riders() {
    const params = useParams();
    const id = params.id;

    return (
        <div>
            {riders.filter(rider => rider.id == id).map(filtered => (
                <div className='d-flex flex-row flex-wrap'>
                    <img src={filtered.src} className='rider-img'/>
                    <div className='d-flex flex-column p-5'>
                      <h1 className='rider-name-p'>{filtered.name}</h1>
                      <h3 className='rider-info'>Class: {filtered.class}</h3>
                      <h3 className='rider-info'>Number: {filtered.number}</h3>
                      <h3 className='rider-info'>Nationality: {filtered.country}</h3>
                      <h3 className='rider-info'>Birth date: {filtered.birthday}</h3>
                    </div>
                </div>
                )
            
            )}
        </div>
    )
}

export default Riders;