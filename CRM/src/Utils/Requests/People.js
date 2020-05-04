import axios from "axios";

export const getOwners = () => axios.get("http://localhost:4000/api/owners");
export const getUsers = () => axios.get("http://localhost:4000/api/users");
export const getGuests = () => axios.get("http://localhost:4000/api/guests");

export const updateOwner = (id, body) => axios.put(`http://localhost:4000/api/owners/${id}`, body);

export const addOwner = body =>{
    console.log(body)
   return axios.post("http://localhost:4000/api/auth-owner/signup", body);
}