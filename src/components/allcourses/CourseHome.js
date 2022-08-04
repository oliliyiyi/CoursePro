import React from "react"
import { online } from "../../shared/data"
import Heading from "../Heading"
import "./courses.css"
import Back from "../back/Back"
import CoursesCard from "./CoursesCard"

function CourseHome(){
  return (
    <>
      <Back title='Explore Courses' />
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' />
          <CoursesCard/>
          <div className="row">
            {online.map((val) => (
              <div className='box col-md-2 col-sm-6'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
          
          
        </div>
      </section>
    </>
  )
}

export default CourseHome;
