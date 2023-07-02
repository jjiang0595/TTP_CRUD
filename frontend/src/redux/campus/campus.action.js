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
            const {data} = await axios.get("http://localhost:8080/api/campuses");
            dispatch(fetchAllCampuses(data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const fetchSingleCampusThunk = async (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:8080/api/campuses/${id}`);
            dispatch(fetchSingleCampus(data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const deleteCampusThunk = (campusId) => {
    return async (dispatch) => {
        try {
            await axios.delete(`http://localhost:8080/api/campuses/${campusId}`);
            dispatch(deleteCampus(campusId));
        } catch (err) {
            console.log(err)
        }
    }
}

export const createCampusThunk = async (campus) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post("http://localhost:8080/api/campuses", campus);
            dispatch(createCampus(data));
        } catch (err) {
            console.log(err)
        }
    }
}

export const updateCampusThunk = async (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.put(`http://localhost:8080/api/campuses/${id}`);
            dispatch(updateCampus(data));
        } catch (err) {
            console.log(err)
        }
    }
}