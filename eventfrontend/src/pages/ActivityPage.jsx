import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';

function ActivityPage() {
const [images,setimages]=useState

useEffect(()=>{fetch("https://localhost:44326/api/Event")
  .then(res => res.json())
  .then(data => setimages(data))},
  
   [])


   return (
    <Carousel>
      {images.map(image => (
        <Carousel.Item key={image.id}>
          <img
            className="d-block w-100"
            src={image.url}
            alt={`Image ${image.id}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
  

  
    
    
}

export default ActivityPage