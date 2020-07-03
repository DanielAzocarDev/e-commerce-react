import React from "react";
import "./PreviewCollec.scss";

const PreviewCollec = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          // el filter es para solo mostrar 4 items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <h2 key={item.id}>{item.name}</h2>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollec;
