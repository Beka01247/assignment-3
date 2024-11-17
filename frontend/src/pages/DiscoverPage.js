import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DiscoverList from '../components/Discover/DiscoverList';
import DiscoverForm from '../components/Discover/DiscoverForm';
import DiscoverDetail from '../components/Discover/DiscoverDetail';

const DiscoverPage = () => (
  <div>
    <Routes>
      <Route path="/" element={<DiscoverList />} />
      <Route path="new" element={<DiscoverForm />} />
      <Route path=":cname/:disease_code" element={<DiscoverDetail />} />
      <Route path=":cname/:disease_code/edit" element={<DiscoverForm />} />
    </Routes>
  </div>
);

export default DiscoverPage;
