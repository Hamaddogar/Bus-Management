import axios from "axios";

export const getAllLocations = () => axios.get("http://localhost:4000/api/locations");
export const getALocation = id => axios.get(`http://localhost:4000/api/locations/${id}`);
export const updateLocation = (id, body) => axios.put(`http://localhost:4000/api/locations/${id}`, body);
export const removeLocation = id => axios.delete(`http://localhost:4000/api/locations/${id}`);
export const addNewLocation = body => axios.post("http://localhost:4000/api/locations", body);
