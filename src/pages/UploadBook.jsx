import React, { useState } from 'react';
import API from '../api/api';

export default function UploadBook() {
  const [form, setForm] = useState({ title: '', author: '', subject: '', price: '', condition: 'Good', location: '', description: '' });
  const [file, setFile] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(form).forEach(key => data.append(key, form[key]));
      if (file) data.append('image', file);

      const res = await API.post('/books', data, { headers: { 'Content-Type': 'multipart/form-data' } });
      alert('Book uploaded');
      window.location.href = '/';
    } catch (err) {
      alert(err.response?.data?.msg || 'Upload failed');
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto card">
      <h2 className="text-2xl font-bold mb-4">Upload Book</h2>
      <form onSubmit={submit} className="space-y-3">
        <input placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full p-2 rounded-md" />
        <input placeholder="Author" value={form.author} onChange={e => setForm({...form, author: e.target.value})} className="w-full p-2 rounded-md" />
        <input placeholder="Subject" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="w-full p-2 rounded-md" />
        <input placeholder="Price (0 for free)" value={form.price} onChange={e => setForm({...form, price: e.target.value})} className="w-full p-2 rounded-md" />
        <select value={form.condition} onChange={e => setForm({...form, condition: e.target.value})} className="w-full p-2 rounded-md">
          <option>New</option><option>Good</option><option>Used</option><option>Old</option>
        </select>
        <input placeholder="Location (City, College)" value={form.location} onChange={e => setForm({...form, location: e.target.value})} className="w-full p-2 rounded-md" />
        <textarea placeholder="Description" value={form.description} onChange={e => setForm({...form, description: e.target.value})} className="w-full p-2 rounded-md" />
        <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} />
        <button className="w-full py-2 rounded-md bg-gradient-to-r from-yellow-400 to-pink-400 text-white">Upload Book</button>
      </form>
    </div>
  );
}