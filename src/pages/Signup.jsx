import React, { useState } from 'react';
import API, { setAuthToken } from '../api/api';

export default function Signup({ setUser, navigate }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/register', form);
      setAuthToken(res.data.token);
      setUser(res.data.user);
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.msg || 'Signup failed');
    }
  };
  return (
    <div className="max-w-md mx-auto card">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <form onSubmit={submit} className="space-y-3">
        <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Name" className="w-full p-2 rounded-md" />
        <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="Email" className="w-full p-2 rounded-md" />
        <input type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} placeholder="Password" className="w-full p-2 rounded-md" />
        <button className="w-full py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-white">Signup</button>
      </form>
    </div>
  );
}
