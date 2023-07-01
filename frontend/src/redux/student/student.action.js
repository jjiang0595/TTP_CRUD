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
    try {
        // fetch from api here
    } catch (err) {
        console.log(err)
    }
}

export const fetchSingleStudentThunk = (payload) => {
    try {
        // fetch from api here
    } catch (err) {
        console.log(err)
    }
}

export const deleteStudentThunk = (payload) => {
    try {
        // fetch from api here
    } catch (err) {
        console.log(err)
    }
}

export const createStudentThunk = (payload) => {
    try {
        // fetch from api here
    } catch (err) {
        console.log(err)
    }
}

export const updateStudentThunk = (payload) => {
    try {
        // fetch from api here
    } catch (err) {
        console.log(err)
    }
}