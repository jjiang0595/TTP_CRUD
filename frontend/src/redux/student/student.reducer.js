import StudentActionTypes from "./student.types";

export const STUDENT_INITIAL_STATE = {
    allStudents: [],
    singleStudent: {},
}

const studentReducer = (state = STUDENT_INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case StudentActionTypes.FETCH_ALL_STUDENTS:
            return {
                ...state,
                allStudents: payload
            }
        case StudentActionTypes.FETCH_SINGLE_STUDENT:
            return {
                ...state,
                singleStudent: payload
            }
        case StudentActionTypes.DELETE_STUDENT:
            return {
                ...state,
                allStudents: state.allStudents.filter(student => student.id !== payload)
            }
        case StudentActionTypes.CREATE_STUDENT:
            return {
                ...state,
                allStudents: [...state.allStudents, payload]
            }
        case StudentActionTypes.UPDATE_STUDENT:
            return {
                ...state,
                allStudents: state.allStudents.map(student => {
                    return student.id === payload.id ? payload : student
                }),
                singleStudent: payload
            }
        default:
            return state;
    }
}

export default studentReducer;