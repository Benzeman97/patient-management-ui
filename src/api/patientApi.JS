import axios from "axios";

const API_URL = "http://localhost:8195/api/v1/patient";

export const getPatients = () => axios.get(API_URL);
export const getPatientById = (id) => axios.get(`${API_URL}/${id}`);
export const createPatient = (data) => axios.post(API_URL, data);
export const updatePatient = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deletePatient = (id) => axios.delete(`${API_URL}/${id}`);