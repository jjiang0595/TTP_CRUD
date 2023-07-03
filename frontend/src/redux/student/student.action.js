import axios from "axios";
import StudentActionTypes from "./student.types";

// actions
export const fetchAllStudents = (payload) => {
    return {
        type: StudentActionTypes.FETCH_ALL_STUDENTS,
        payload: payload
    }
}

export const fetchSingleStudent = (payload) => {
    return {
        type: StudentActionTypes.FETCH_SINGLE_STUDENT,
        payload: payload
    }
}

export const deleteStudent = (payload) => {
    return {
        type: StudentActionTypes.DELETE_STUDENT,
        payload: payload
    }
}

export const createStudent = (payload) => {
    return {
        type: StudentActionTypes.CREATE_STUDENT,
        payload: payload
    }
}

export const updateStudent = (payload) => {
    return {
        type: StudentActionTypes.UPDATE_STUDENT,
        payload: payload
    }
}

// thunks
export const fetchAllStudentsThunk = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get("http://localhost:8080/api/students");
            dispatch(fetchAllStudents(data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const fetchSingleStudentThunk = (studentId) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:8080/api/students/${studentId}`);
            dispatch(fetchSingleStudent(data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const deleteStudentThunk = (studentId) => {
    return async (dispatch) => {
        try {
            await axios.delete(`http://localhost:8080/api/students/${studentId}`);
            dispatch(deleteStudent(studentId));
        } catch (err) {
            console.log(err)
        }
    }
}

export const createStudentThunk = (student) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post("http://localhost:8080/api/students/add", student);
            dispatch(createStudent(data));
        } catch (err) {
            console.log(err)
        }
    }
}

export const updateStudentThunk = (studentId, student) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.put(`http://localhost:8080/api/students/${studentId}/edit`, student);
            dispatch(updateStudent(data));
        } catch (err) {
            console.log(err)
        }
    }
}