import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BookCard({ book }) {
  return (
    <motion.div className="card" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300 }}>
      <div className="flex gap-4">
        <img src={book.imageUrl || 'https://via.placeholder.com/120'} alt={book.title} className="w-28 h-36 object-cover rounded-lg" />
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{book.title}</h3>
          <p className="text-sm text-gray-600">{book.author}</p>
          <p className="mt-2 text-sm">{book.subject} • {book.condition}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-xl font-bold">₹ {book.price || 'Free'}</div>
            <Link to={`/book/${book._id}`} className="px-3 py-1 bg-pink-500 text-white rounded-lg">View</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
