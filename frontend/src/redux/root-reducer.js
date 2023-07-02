import { combineReducers } from "redux";

import campusReducer from "./campus/campus.reducer";
import studentReducer from "./student/student.reducer";

const rootReducer = combineReducers({
    campuses: campusReducer,
    students: studentReducer
})

export default rootReducer;