import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecordList from '../components/Record/RecordList';
import RecordForm from '../components/Record/RecordForm';
import RecordDetail from '../components/Record/RecordDetail';

const RecordPage = () => (
  <div>
    <Routes>
      <Route path="/" element={<RecordList />} />
      <Route path="new" element={<RecordForm />} />
      <Route path=":email/:cname/:disease_code" element={<RecordDetail />} />
      <Route path=":email/:cname/:disease_code/edit" element={<RecordForm />} />
    </Routes>
  </div>
);

export default RecordPage;
