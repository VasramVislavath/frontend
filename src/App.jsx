import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UploadBook from './pages/UploadBook';
import BookDetails from './pages/BookDetails';
import Nav from './components/Nav';
import { setAuthToken } from './api/api';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setAuthToken(token);
  }, []);

  return (
    <div className="min-h-screen">
      <Nav user={user} setUser={setUser} />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} navigate={navigate} />} />
          <Route path="/signup" element={<Signup setUser={setUser} navigate={navigate} />} />
          <Route path="/upload" element={<UploadBook />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
