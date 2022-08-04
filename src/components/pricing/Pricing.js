import React from "react"
import Back from "../back/Back"
import PriceCard from "./PriceCard"
import "./price.css"


function Pricing(){
  return (
    <>
      <Back title='Choose The Right Plan' />
      <section className='price padding'>
        <PriceCard />
      </section>
    </>
  )
}

export default Pricing
