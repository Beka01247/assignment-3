import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UsersPage from './pages/UsersPage';
import PatientsPage from './pages/PatientsPage';
import DiseaseTypePage from './pages/DiseaseTypePage';
import CountryPage from './pages/CountryPage';
import DiseasePage from './pages/DiseasePage';
import DiscoverPage from './pages/DiscoverPage';
import PatientDiseasePage from './pages/PatientDiseasePage';
import PublicServantPage from './pages/PublicServantPage';
import DoctorPage from './pages/DoctorPage';
import SpecializePage from './pages/SpecializePage';
import RecordPage from './pages/RecordPage';

import './App.css'; 

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/*" element={<UsersPage />} />
          <Route path="/patients/*" element={<PatientsPage />} />
          <Route path="/diseasetype/*" element={<DiseaseTypePage />} />
          <Route path="/countries/*" element={<CountryPage />} />
          <Route path="/disease/*" element={<DiseasePage />} />
          <Route path="/discover/*" element={<DiscoverPage />} />
          <Route path="/patient-disease/*" element={<PatientDiseasePage />} />
          <Route path="/public-servants/*" element={<PublicServantPage />} />
          <Route path="/doctors/*" element={<DoctorPage />} />
          <Route path="/specialize/*" element={<SpecializePage />} />
          <Route path="/records/*" element={<RecordPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
