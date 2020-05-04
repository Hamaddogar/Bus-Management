import axios from 'axios';
import { checkIfTokenExpired } from '../helpers';
import { isAuthenticated } from './Auth';

export const getAvailableBusesOfOwner = () =>{
    // checkIfTokenExpired(isAuthenticated().token);
    return axios.get('http://localhost:4000/api/bus/owner-bus-available');
} 
 export const getAllAvailableBuses = () => axios.get('http://localhost:4000/api/bus/all-bus-available')
export const getUnavailableBusesOfOwner = () => axios.get('http://localhost:4000/api/bus/owner-bus-unavailable');
export const getAllUnavailableBuses = () => axios.get('http://localhost:4000/api/bus/all-bus-unavailable');


export const addNewBus = body => axios.post('/bus',body )

export const getBusBySlug = slug => axios.get('http://localhost:4000/api/bus/' + slug);

export const removeBus = slug => axios.delete('/bus/' + slug);

export const updateBus = (slug, body) => axios.put('http://localhost:4000/api/bus/' + slug, body);

// axios.post('http://localhost:4000/api/bus', body, { onUploadProgress: progressEvent => console.log(progressEvent.loaded) });
