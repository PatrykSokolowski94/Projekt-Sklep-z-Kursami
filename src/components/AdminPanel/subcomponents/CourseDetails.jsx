import React, { useContext, useState } from 'react';
import CoursePopup from './CoursePopup';
import request from '../../../helpers/request'
import { StoreContext } from '../../../store/StoreProvider';

const CourseDetails = (props) => {
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const { id, title } = props;
    const { setCourses } = useContext(StoreContext);

    const showPopup = () => setIsOpenPopup(true)
    const hidePopup = () => {
        setIsOpenPopup(false)
    };

    const handleDeleteCourse = async () => {
        try {
            const { status } = await request.delete(`/courses/${id}`)

            if (status === 200) {
                setCourses(prev => prev.filter(course => course.id !== id))
            }

        } catch (err) {
            console.warn(err);
        }
    }

    return (
        <details>
            <summary>{title}</summary>
            <button onClick={showPopup}>Edytuj</button>
            <button onClick={handleDeleteCourse}>Usuń</button>
            <CoursePopup isOpenPopup={isOpenPopup} hidePopup={hidePopup}{...props} />
        </details>
    );
}

export default CourseDetails;