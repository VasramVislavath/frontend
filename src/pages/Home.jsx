import React, { useEffect, useState } from 'react';
import API from '../api/api';
import BookCard from '../components/BookCard';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.get('/books').then(res => setBooks(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Find Used Study Books</h1>
        <p className="text-gray-700">Search, exchange, donate or buy books from students nearby.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {books.map(b => <BookCard key={b._id} book={b} />)}
      </div>
    </div>
  );
}
