import React from "react"
import { awrapper } from "../../shared/data"

function Awrapper(){
  return (
    <>
      <section className='awrapper'>
        <div className='container '>
          <div className="row">
          {awrapper.map((val) => {
            return (
              <div className='box flex col-md-3 col-sm-6 d-none d-sm-block'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Awrapper;
