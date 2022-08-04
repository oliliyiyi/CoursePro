import React from "react"
import "./courses.css"
import { coursesCard } from "../../shared/data"
import { Link } from 'react-router-dom';

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container'>
          <div className="row">
          {coursesCard.map((val) => (
            <div className='items col-md-4'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <Link to={`/courses/${val.id}`}>
                <button className='outline-btn'>Course Teacher</button>
              </Link>
              
            </div>
          ))}
          </div>
          
        </div>
      </section>
    </>
  )
}

export default CoursesCard;
