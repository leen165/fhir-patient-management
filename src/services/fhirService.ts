import axios from "axios";
import { Patient } from "../types/fhir";

const BASE_URL = "https://hapi.fhir.org/baseR4";

export const fetchPatients = async (): Promise<Patient[]> => {
  const response = await axios.get(`${BASE_URL}/Patient`);
  return response.data.entry.map((e: any) => e.resource);
};

export const fetchPatientById = async (id: string): Promise<Patient> => {
  const response = await axios.get(`${BASE_URL}/Patient/${id}`);
  return response.data;
};
