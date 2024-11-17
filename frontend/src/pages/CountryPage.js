import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryList from '../components/Country/CountryList';
import CountryForm from '../components/Country/CountryForm';
import CountryDetail from '../components/Country/CountryDetail';

const CountryPage = () => (
  <div>
    <Routes>
      <Route path="/" element={<CountryList />} />
      <Route path="new" element={<CountryForm />} />
      <Route path=":cname" element={<CountryDetail />} />
      <Route path=":cname/edit" element={<CountryForm />} />
    </Routes>
  </div>
);

export default CountryPage;
