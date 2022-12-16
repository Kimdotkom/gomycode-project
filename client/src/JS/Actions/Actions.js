import axios from "axios";
import { useSelector } from "react-redux";


import {
  FAIL_ANNONCE,
  SUCCESS_ANNONCE,
  LOAD_ANNONCE,
  SUCCESS_USER,
  FAIL_USER,
  LOAD_USER,
  REGISTER_USER,
  LOGIN_USER,
  CURRENT_USER,
  LOGOUT_USER,
  LOAD_AUTH,
  FAIL_AUTH,
  SET_DETAILS,
  MY_ANNONCES
} from "../actionTypes/ActionTypes";

//get annonces action
export const getAnnonces = () => async (dispatch) => {
  
  dispatch({ type: LOAD_ANNONCE });
  try {
    let result = await axios.get("/api/annonce/get-annonces");
    dispatch({ type: SUCCESS_ANNONCE, payload: result.data });
    
  } catch (error) {
    dispatch({ type: FAIL_ANNONCE, payload: error });
  }
};

//get annonces added by current user
export const getUserAnnonces = () => async (dispatch) => {
  dispatch({ type: LOAD_ANNONCE });
  
  try {

    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api/annonce/myAnnonces",config);
    dispatch({ type: MY_ANNONCES, payload: result.data });
    console.log(result)
  } catch (error) {
    dispatch({ type: FAIL_ANNONCE, payload: error });
    console.log(error.config)
  }
};

//add annonces action
export const addAnnonce = (newAnnonce) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    await axios.post("/api/annonce/addAnnonce", newAnnonce, config);
    // dispatch(getAnnonces());
  } catch (error) {
    dispatch({ type: FAIL_ANNONCE, payload: error.response });
  }
};

//delete annonces action
export const deleteAnnonce = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/annonce/delete/${id}`);
    dispatch(getAnnonces());
  } catch (error) {
    dispatch({ type: FAIL_ANNONCE, payload: error.response });
  }
};

//edit annonce action
export const editAnnonce = (id, newAnnonce) => async (dispatch) => {
  try {
    await axios.put(`/api/annonce/update-annonce/${id}`, newAnnonce);
    // dispatch(getAnnonces());
  } catch (error) {
    dispatch({ type: FAIL_ANNONCE, payload: error.response });
  }
};

//get one annonce
export const getOneAnnonce = (id) => async (dispatch) => {
  dispatch(LOAD_ANNONCE);
  
  try {
    const details = axios.get(`/api/annonce/get-one/${id}`);
    dispatch({ type: SET_DETAILS, payload: details.data });
    console.log(details.data)
  } catch (error) {
    dispatch({ type: FAIL_ANNONCE, payload: error.response });
  }
};

//get users action
export const getUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.get("/api/user/get-users");
    dispatch({ type: SUCCESS_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error });
  }
};

//delete one user action
export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/user/delete/${id}`);
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: FAIL_ANNONCE, payload: error.response });
  }
};

//register user
export const register = (newUser) => async (dispatch) => {
  dispatch({ type: LOAD_AUTH });
  try {
    let result = await axios.post("/api/user/register", newUser);
    dispatch({ type: REGISTER_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_AUTH, payload: error.response });
  }
};

//login user
export const login = (user) => async (dispatch) => {
  dispatch({ type: LOAD_AUTH });
  try {
    let result = await axios.post("/api/user/login", user);
    dispatch({ type: LOGIN_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_AUTH, payload: error });
  }
};

//current user
export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_AUTH });
  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    let result = await axios.get("/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_AUTH, payload: error.response.data.error });
  }
};

//logout user
export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};
