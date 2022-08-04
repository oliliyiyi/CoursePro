import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./courses.css"

export function RenderCourse({ course }) {
    return (
        
            <Card >
                <div className="cardDetail">
                <CardImg top src={course.cover} alt={course.coursesName} />
                </div>
                <CardBody>
                    <CardText><h2>{course.coursesName}</h2></CardText>
                    <CardText className="priceCard">{course.priceAll} / {course.pricePer}</CardText>
                </CardBody>
            </Card>
        


    );
}
export function RenderTeacher({ teacher }) {
    return (
        <Card>
            <CardImg top src={teacher.cover} alt={teacher.name} />
            <CardBody>
                <CardTitle><h3>{teacher.name}</h3></CardTitle>
                <CardText>{teacher.work}</CardText>
            </CardBody>
        </Card>
    );
}

class CourseTeacher extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.course != null) {
            const course = this.props.course;
            const teacher = this.props.teacher;
            return (
                <div className="container">
                    <div className="row">
                        
                        <div className="col-12">
                            <h3>{course.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderCourse course={course} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderTeacher teacher={teacher} />
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (<div>Hello</div>);
        }
    }
}


export default CourseTeacher;