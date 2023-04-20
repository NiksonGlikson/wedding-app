import React from "react";
import WeddingItem from "./WeddingItem";

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
