import React from 'react';
import Image from './Image.js';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.imageList = this.props.images;
  }
  render() {
    return (
      <div className="pexel--gallery">
        {this.imageList?.map((image) => (
          <Image
            src={image.src.portrait}
            author={image.photographer}
            authorURL={image.photographer_url}
            key={image.id}
          />
        ))}
      </div>
    );
  }
}
export default Gallery;
