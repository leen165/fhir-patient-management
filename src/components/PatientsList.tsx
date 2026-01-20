import { useState, useEffect } from "react";
import { fetchPatients } from "../services/fhirService";
import { Patient } from "../types/fhir";
import { Link } from "react-router-dom";

const PatientsList = () => {
  const [patient, setPatient] = useState<Patient[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPatients()
      .then(setPatient)
      .catch(() => setError("there is somethong wrong"));
  }, []);

  return (
    <div>
      <h2>Patient's List</h2>
      {error && <p>{error} </p>}
      <ul>
        {patient.map((p) => (
          <li key={p.id}>
            <Link to={`Patient/${p.id}`}>
              {p.name?.[0]?.given?.join(" ")}
              {p.name?.[0]?.family}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientsList;
