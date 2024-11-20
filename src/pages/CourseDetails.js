import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {

    const [course,setCourse]=useState({});

    const courses = [
        {id:'1',name:"C++",desc:"Data Structures",start_date:"01/01/2025",end_date:"30/03/2025"},
        {id:'2',name:"Javascript",desc:"Web Development",start_date:"01/02/2025",end_date:"30/04/2025"}
    ]

    const {id} = useParams();
    useEffect(() => {
        const findCourse=courses.find(course => course.id === id );
        if(findCourse)
            setCourse(findCourse);
        else
            setCourse({name:"Not Found"});
    },[]);

    return(
        <div className="m-3">
            <h3>{course.name}</h3>
            <div className="my-3">
                <p><b>Description: </b>{course.desc}</p>
                <p><b>Start date: </b>{course.start_date}</p>
                <p><b>End date: </b>{course.end_date}</p>
            </div>
        </div>
    );
}

export default CourseDetails;