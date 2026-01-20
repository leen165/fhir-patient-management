import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Patient } from "../types/fhir";
import { fetchPatientById } from "../services/fhirService";

const PatientDetails = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    if (id) {
      fetchPatientById(id).then(setPatient);
    }
  }, [id]);

  if (!patient) return <p>loading</p>;

  return (
    <div>
      <h2>Patient Details</h2>
      <p>
        <span>Name:</span> {patient.name?.[0]?.given?.join(" ")}
        {patient.name?.[0]?.family}
      </p>
      <p>
        <span>Name:</span> {patient.name?.[0]?.given?.join(" ")}
        {patient.name?.[0]?.family}
      </p>
      <p>
        <span>Gender:</span> {patient.gender ?? "Not available"}
      </p>
      <p>
        <span>Birthdate:</span> {patient.birthDate ?? "Notavailable"}
      </p>
      <p>
        <span>City:</span>{" "}
        {patient.address?.[0]?.city ??
          patient.address?.[0]?.country ??
          "Not available"}
      </p>
    </div>
  );
};

export default PatientDetails;
