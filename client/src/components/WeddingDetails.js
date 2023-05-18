import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WeddingDetails = () => {
  const { weddingId } = useParams();
  const [wedding, setWedding] = useState(null);

  useEffect(() => {
    // Запрос к серверу для получения информации о свадьбе
    fetch(`/api/weddings/${weddingId}`)
      .then(response => response.json())
      .then(data => setWedding(data))
      .catch(error => console.error('Ошибка:', error));
  }, [weddingId]);

  if (!wedding) {
    return <div>Загрузка...</div>;
  }

  // отображение информации о свадьбе
  return (
    <div>
      <h1>{wedding.title}</h1>
      <p>{wedding.description}</p>
      <p>{wedding.budget}</p>
      <p>{wedding.deadline}</p>
      <p>{wedding.author}</p>
    </div>
  );
};

export default WeddingDetails;
