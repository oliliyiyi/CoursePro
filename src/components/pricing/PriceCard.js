import React from "react"
import { price } from "../../shared/data"

function PriceCard(){
  return (
    <>
      <div className="container">
        <div className="row">
          {price.map((val) => (
            <div className='items shadow col-12 col-md-3'>
              <h4>{val.name}</h4>
              <h1>
                <span>$</span>
                {val.price}
              </h1>
              <p>{val.desc}</p>
              <button className='outline-btn'>START</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PriceCard;
