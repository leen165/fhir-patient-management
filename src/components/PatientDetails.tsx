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
    <div className="details-page">
      <div className="card">
        <h2>Patient Details</h2>
        <p>
          <span className="label">Name:</span>{" "}
          {patient.name?.[0]?.given?.join(" ")}
          {patient.name?.[0]?.family}
        </p>
        <p>
          <span className="label">Name:</span>{" "}
          {patient.name?.[0]?.given?.join(" ")}
          {patient.name?.[0]?.family}
        </p>
        <p>
          <span className="label">Gender:</span>{" "}
          {patient.gender ?? "Not available"}
        </p>
        <p>
          <span className="label">Birthdate:</span>{" "}
          {patient.birthDate ?? "Notavailable"}
        </p>
        <p>
          <span className="label">City:</span>{" "}
          {patient.address?.[0]?.city ??
            patient.address?.[0]?.country ??
            "Not available"}
        </p>
      </div>
    </div>
  );
};

export default PatientDetails;
