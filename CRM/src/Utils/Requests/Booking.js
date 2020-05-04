import axios from 'axios';

export const getOwnerBookings = () => axios.get('http://localhost:4000/api/bookings/my');
export const getAllBookings = () => axios.get('http://localhost:4000/api/bookings/all');

export const removeBooking = id => axios.delete(`http://localhost:4000/api/bookings/${id}`);

export const changeVerificationStatus = (bookingId, status) =>
	axios.patch(`http://localhost:4000/api/bookings/${bookingId}`, { verification: status });

export const postSoldSeat = (slug, seat) => axios.post(`http://localhost:4000/api/bookings/sold/${slug}`, { seatNumber: seat });
