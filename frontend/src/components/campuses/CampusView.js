import {useDispatch, useSelector} from "react-redux";
import {fetchSingleCampusThunk} from "../../redux/campus/campus.action";
import {useEffect, useState} from "react";
import {fetchAllStudentsThunk} from "../../redux/student/student.action";

const CampusView = ({campusId}) => {
    const dispatch = useDispatch();
    const campus = useSelector(state => state.campuses.singleCampus);
    const students = useSelector((state) => state.students.allStudents.filter((student) => student.campusId === campus.campusId));

    const fetchSingleCampus = () => {
        return dispatch(fetchSingleCampusThunk(campusId));
    };

    const fetchAllStudents = () => {
        return dispatch(fetchAllStudentsThunk());
    }

    useEffect(() => {
        fetchSingleCampus();
        fetchAllStudents();
    }, [campusId])

    return (
        <>
            <div>
                <div>
                    {students.length > 0 ? students.map((student) => (
                        <div key={student.id}>
                            <p>{student.firstName} {student.lastName}</p>
                        </div>
                    )) : <p>No Students</p>}
                </div>
            </div>
        </>
    )
}

export default CampusView;