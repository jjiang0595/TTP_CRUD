import axios from "axios";
import CampusActionTypes from "./campus.types";

// actions
export const fetchAllCampuses = (payload) => {
    return {
        type: CampusActionTypes.FETCH_ALL_CAMPUSES,
        payload: payload
    }
}

export const fetchSingleCampus = (payload) => {
    return {
        type: CampusActionTypes.FETCH_SINGLE_CAMPUS,
        payload: payload
    }
}

export const deleteCampus = (payload) => {
    return {
        type: CampusActionTypes.DELETE_CAMPUS,
        payload: payload
    }
}

export const createCampus = (payload) => {
    return {
        type: CampusActionTypes.CREATE_CAMPUS,
        payload: payload
    }
}

export const updateCampus = (payload) => {
    return {
        type: CampusActionTypes.UPDATE_CAMPUS,
        payload: payload
    }
}

// thunks
export const fetchAllCampusesThunk = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/campuses`);
            dispatch(fetchAllCampuses(data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const fetchSingleCampusThunk = (campusId) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/campuses/${campusId}`);
            dispatch(fetchSingleCampus(data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const deleteCampusThunk = (campusId) => {
    return async (dispatch) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/api/campuses/${campusId}`);
            dispatch(deleteCampus(campusId));
        } catch (err) {
            console.log(err)
        }
    }
}

export const createCampusThunk = (campus) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/campuses/add`, campus);
            dispatch(createCampus(data));
        } catch (err) {
            console.log(err)
        }
    }
}

export const updateCampusThunk = (campusId, campus) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.put(`${process.env.REACT_APP_API_URL}/api/campuses/${campusId}/edit`, campus);
            dispatch(updateCampus(data));
        } catch (err) {
            console.log(err)
        }
    }
}