import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicServantList from '../components/PublicServant/PublicServantList';
import PublicServantForm from '../components/PublicServant/PublicServantForm';
import PublicServantDetail from '../components/PublicServant/PublicServantDetail';

const PublicServantPage = () => (
  <div>
    <Routes>
      <Route path="/" element={<PublicServantList />} />
      <Route path="new" element={<PublicServantForm />} />
      <Route path=":email" element={<PublicServantDetail />} />
      <Route path=":email/edit" element={<PublicServantForm />} />
    </Routes>
  </div>
);

export default PublicServantPage;
