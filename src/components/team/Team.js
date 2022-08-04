import React from "react"
import Back from "../back/Back"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import { team } from "../../shared/data"

function Team(){
  return (
    <>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container'>
          <div className="row">
            {team.map((val) => (
              <div className='items shadow col-md-3 col-sm-6'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                  <div className='overlay'>
                    <i className='fab fa-facebook-f icon'></i>
                    <i className='fab fa-twitter icon'></i>
                    <i className='fab fa-instagram icon'></i>
                    <i className='fab fa-tiktok icon'></i>
                  </div>
                </div>
                <div className='details'>
                  <h2>{val.name}</h2>
                  <p>{val.work}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team
