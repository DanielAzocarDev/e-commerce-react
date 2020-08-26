import React from 'react';
import './PreviewCollec.scss';
import CollectionItem from '../collection-item/CollectionItem';

const PreviewCollec = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          // el filter es para solo mostrar 4 items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollec;
