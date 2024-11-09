import React from "react";
import { useParams } from "react-router-dom";

const ItemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Item Detail</h2>
      <p>Details for Item #{id}</p>
    </div>
  );
};

export default ItemDetail;
