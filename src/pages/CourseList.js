import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const CourseList = () => {

    const courses = [
        {id:1,name:"C++",desc:"Data Structures"},
        {id:2,name:"Javascript",desc:"Web Development"}
    ]

    return(
        <div>
            {courses.map(course => 
                <div className='m-5'>
                    <h3>{course.name}</h3>
                    <p>{course.desc}</p>
                    <button className='btn btn-primary'>
                        <Link to={`/courses/${course.id}`} style={{color:'white',textDecoration:'none'}}>View Details</Link>
                    </button>
                </div>
            )}
        </div>
    );
}

export default CourseList;