import React from 'react';
import { Link } from 'react-router-dom';

const WeddingList = ({ weddings }) => {
  return (
    <div>
      <h2>Мои свадьбы</h2>
      {weddings && weddings.map((wedding) => (
        <Link key={wedding.id} to={`/weddings/${wedding.id}`}>
          {wedding.title}
        </Link>
      ))}
    </div>
  );
};

export default WeddingList;

