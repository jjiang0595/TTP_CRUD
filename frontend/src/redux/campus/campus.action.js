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
    try {
        // fetch from api here
    } catch (err) {
        console.log(err)
    }
}

export const fetchSingleCampusThunk = (payload) => {
    try {
        // fetch from api here
    } catch (err) {
        console.log(err)
    }
}

export const deleteCampusThunk = (payload) => {
    try {
        // fetch from api here
    } catch (err) {
        console.log(err)
    }
}

export const createCampusThunk = (payload) => {
    try {
        // fetch from api here
    } catch (err) {
        console.log(err)
    }
}

export const updateCampusThunk = (payload) => {
    try {
        // fetch from api here
    } catch (err) {
        console.log(err)
    }
}