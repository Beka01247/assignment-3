import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PatientDiseaseList from '../components/PatientDisease/PatientDiseaseList';
import PatientDiseaseForm from '../components/PatientDisease/PatientDiseaseForm';
import PatientDiseaseDetail from '../components/PatientDisease/PatientDiseaseDetail';

const PatientDiseasePage = () => (
  <div>
    <Routes>
      <Route path="/" element={<PatientDiseaseList />} />
      <Route path="new" element={<PatientDiseaseForm />} />
      <Route path=":email/:disease_code" element={<PatientDiseaseDetail />} />
      <Route path=":email/:disease_code/edit" element={<PatientDiseaseForm />} />
    </Routes>
  </div>
);

export default PatientDiseasePage;
