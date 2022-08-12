import React from 'react'
import "./featured.css"

export const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
            alt =""
            className='featuredImg'/>
            <div className="featuredTitles">
            <h1>Mumbai</h1>
            <h2>123 Mumbai</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
            alt =""
            className='featuredImg'/>
            <div className="featuredTitles">
            <h1>Goa</h1>
            <h2>453 Goa</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
            alt =""
            className='featuredImg'/>
            <div className="featuredTitles">
            <h1>Pune</h1>
            <h2>675 Pune</h2>
            </div>
        </div>
    </div>
  )
}
