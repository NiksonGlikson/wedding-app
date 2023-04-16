import React from "react";

const WeddingItem = ({ wedding }) => {
  return (
    <div>
      <h3>{wedding.title}</h3>
      <p>{wedding.description}</p>
    </div>
  );
};

export default WeddingItem;