import React from 'react';
import renderIf from 'render-if';
import '../../App.css';
import ImageCard from '../image-cards/image-cards';
import Loader from '../loader/loader-container';

const ImageResults = ({ images, searchTerm }) => (
  <div id="ImageResults">
    {images.map(image => (
      <ImageCard
        image={image.image}
        score={image.score}
        title={image.title}
        tags={image.tags}
        datetime={image.datetime}
        id={image.id}
        key={image.id}
      />
    ))
    }
    <div id="LoadMoreDiv">
      {renderIf(searchTerm !== '' || images.length !== 0)(
        <Loader />,
      )}
    </div>
  </div>
);
export default ImageResults;
