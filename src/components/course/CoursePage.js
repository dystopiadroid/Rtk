import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPosts, fetchCourses} from "../../redux/features/courseSlice";

const CoursePage = () => {

    const dispatch = useDispatch();
    const courses = useSelector(fetchAllPosts);

    useEffect(() => {
        if (courses.length === 0) {
            dispatch(fetchCourses());
        }
    }, []);

    console.log("Courses : ", courses);

    return (
        <>
            Course Page
        </>
    )
}

export default CoursePage;