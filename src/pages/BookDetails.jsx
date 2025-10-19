import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/api';

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    API.get(`/books/${id}`).then(res => setBook(res.data)).catch(err => console.error(err));
  }, [id]);

  if (!book) return <div>Loading...</div>;
  return (
    <div className="max-w-3xl mx-auto card">
      <div className="flex gap-6">
        <img src={book.imageUrl || 'https://via.placeholder.com/300'} alt={book.title} className="w-64 h-80 object-cover rounded-lg" />
        <div>
          <h2 className="text-3xl font-bold">{book.title}</h2>
          <p className="text-gray-600">{book.author} • {book.subject}</p>
          <p className="my-4">{book.description}</p>
          <div className="text-2xl font-bold">₹ {book.price || 'Free'}</div>
          <div className="mt-4">
            <a href={`mailto:${book.postedBy?.email}`} className="px-4 py-2 rounded-md bg-pink-500 text-white">Contact Seller</a>
          </div>
        </div>
      </div>
    </div>
  );
}
