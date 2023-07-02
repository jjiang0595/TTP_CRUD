import CampusActionTypes from "./campus.types";

export const CAMPUS_INITIAL_STATE = {
    allCampuses: [],
    singleCampus: {},
}

const campusReducer = (state = CAMPUS_INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case CampusActionTypes.FETCH_ALL_CAMPUSES:
            return {
                ...state,
                allCampuses: payload
            }
        case CampusActionTypes.FETCH_SINGLE_CAMPUS:
            return {
                ...state,
                singleCampus: payload
            }
        case CampusActionTypes.DELETE_CAMPUS:
            return {
                ...state,
                allCampuses: state.allCampuses.filter(campus => campus.campusId !== payload)
            }
        case CampusActionTypes.CREATE_CAMPUS:
            return {
                ...state,
                allCampuses: [...state.allCampuses, payload]
            }
        case CampusActionTypes.UPDATE_CAMPUS:
            return {
                ...state,
                allCampuses: state.allCampuses.map(campus => {
                    return campus.campusId === payload.id ? payload : campus
                }),
                singleCampus: payload
            }
        default:
            return state;
    }
}

export default campusReducer;