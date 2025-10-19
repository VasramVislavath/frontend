import React, { useState } from 'react';
import API, { setAuthToken } from '../api/api';

export default function Login({ setUser, navigate }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      setAuthToken(res.data.token);
      setUser(res.data.user);
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };
  return (
    <div className="max-w-md mx-auto card">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-3">
        <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="Email" className="w-full p-2 rounded-md" />
        <input type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} placeholder="Password" className="w-full p-2 rounded-md" />
        <button className="w-full py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-white">Login</button>
      </form>
    </div>
  );
}
