import React, { Component } from "react";
import AboutCard from "./about/AboutCard";
import Footer from "./footer/Footer";
import Header from "./HeaderComponent";

import {  
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CourseHome from "./allcourses/CourseHome";
import Team from "./team/Team";
import Pricing from "./pricing/Pricing";
import Contact from "./ContactComponent";
import CourseTeacher from "./allcourses/CoursesTeacher";
import { team } from "../shared/data"
import { coursesCard } from "../shared/data"
class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      teachers: team,
      courses: coursesCard
    }
  }
  
  render() {
    const CourseWithTeacher = ({match}) => {
      return(
        <CourseTeacher
          course={this.state.courses.filter(
            (course) => (course.id === parseInt(match.params.courseID)))[0]}
          teacher={this.state.teachers.filter(
            (teacher) => (teacher.courseID === parseInt(match.params.courseID)))[0]}
        />
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={AboutCard}/>
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/courses/:courseID' component={CourseWithTeacher} />
          <Redirect to='/home'/>
        </Switch>
        <Footer />
      
    </div>
    );
  }
}
export default Main;