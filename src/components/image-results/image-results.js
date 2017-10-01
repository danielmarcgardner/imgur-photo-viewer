import React from 'react';
// import renderIf from 'render-if';
// import Loading from 'react-loading-animation';
import '../../App.css';
import ImageCard from '../image-cards/image-cards';

const ImageResults = ({ images, fetching }) => (
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
  </div>
);
export default ImageResults;
