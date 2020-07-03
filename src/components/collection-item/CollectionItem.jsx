import React from "react";
import "./CollectionItem.scss";

const CollectionItem = ({ id, name, imageUrl, price }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ background: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span>{name.toUpperCase()}</span>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
