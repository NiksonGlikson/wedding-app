import React from "react";
import WeddingItem from "./WeddingItem";

//В этом компоненте мы просто мапим массив свадеб и рендерим для 
// каждой свадьбы компонент WeddingItem, который мы определили ранее.

const WeddingList = ({ weddings }) => {
  return (
    <div>
      {weddings.map((wedding) => (
        <WeddingItem key={wedding._id} wedding={wedding} />
      ))}
    </div>
  );
};

export default WeddingList;
