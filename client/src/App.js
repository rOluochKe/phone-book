import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactTable from './components/ContactTable';
import SearchInput from './components/SearchInput';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';

function App() {
  return (
    <BrowserRouter>
      <main className='col-4'>
        <h2 className="m-3">Phone Book App</h2>
        <ToastContainer />
          <SearchInput />
        <Routes>
          <Route path="/" element={<ContactTable />}/>
          <Route path="/contacts/add" element={<AddContact />}/>
          <Route path="/contacts/:id" element={<EditContact />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
