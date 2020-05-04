import axios from "axios";

export const getAllTravels = () => axios.get("http://localhost:4000/api/travels");
export const getATravel = id => axios.get(`http://localhost:4000/api/travels/${id}`);
export const updateTravel = (id, body) => axios.put(`http://localhost:4000/api/travels/${id}`, body);
export const removeTravel = id => axios.delete(`http://localhost:4000/api/travels/${id}`);
export const addNewTravel = body => axios.post("http://localhost:4000/api/travels", body);
