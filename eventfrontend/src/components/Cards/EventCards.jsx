import React, { useEffect, useState } from 'react'
import './EventCards.css'

function EventCards() {
  const [events,setEvents]=useState([]);

  useEffect(()=>{
    fetch('https://localhost:44326/api/ActivityEventsImages')
    .then(res=>res.json())
    .then(data=>setEvents(data.imagePaths));
  },[])
  return (
    <div className='container'>
      
      <div className='card-grid'>
        {events.map(event=>(
         <div key={event.id} className='card'>
           <img src={event.imageUrl} alt={event.title} />
          <h2>{event.name}</h2>
          <p>{event.DetailedDescription}</p>
         </div>
        ))}
     
      </div>
    </div>
  )
}

export default EventCards