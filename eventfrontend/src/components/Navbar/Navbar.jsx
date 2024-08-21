import React, { useEffect, useState } from 'react'
import { Link, } from 'react-router-dom'
import './Navbar.css'
import logopng from '../../assets/logo1.png'
import searchlogo from '../../assets/search-w.png'



function Navbar() {

  const [categories, setcategories] = useState([])

  useEffect(() => {

      fetch("https://localhost:44326/api/Category")
          .then(res => res.json())
          .then(data => setcategories(data))

  }, [])
  
  return (
    <div className="navbar">
      
      <img src={logopng} alt='' className='logo'></img>

        <ul className='header-menu'> {
                    categories.map(category => <li  key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </li>)
                }
            {/* <li> <Link to='/'>Etkinlik</Link></li> */}
          {/* <li><Link to='/Category/:categoryId'>Konser</Link></li> */}
          {/* // <li><Link to='/activity/:activityId'>Tiyatro</Link></li>  */}
        </ul>
        <div className="search-box">
            <input type="text" placeholder="Search" />
            <img src={searchlogo} alt=''></img>
            
        </div>
        
    </div>

    

  )
}

export default Navbar