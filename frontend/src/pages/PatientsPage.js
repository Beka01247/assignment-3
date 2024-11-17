import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PatientsList from '../components/Patients/PatientsList';
import PatientForm from '../components/Patients/PatientForm';
import PatientDetail from '../components/Patients/PatientDetail';

const PatientsPage = () => (
  <div>
    <Routes>
      <Route path="/" element={<PatientsList />} />
      <Route path="new" element={<PatientForm />} />
      <Route path=":email" element={<PatientDetail />} />
      <Route path=":email/edit" element={<PatientForm />} />
    </Routes>
  </div>
);

export default PatientsPage;
