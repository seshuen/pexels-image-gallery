import React from 'react';
import Image from './Image.js';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesList: [],
    };
  }
  componentDidMount() {
    this.setState({
      imagesList: this.props.images,
    });
  }

  isDataSame(oldData, newData) {
    if (oldData === newData) return true;
    if (oldData === null || newData === null) return false;
    if (oldData.length !== newData.length) return false;

    for (let i = 0; i < oldData.length; i++) {
      if (oldData[i] !== newData[i]) return false;
    }

    return true;
  }

  componentDidUpdate() {
    if (!this.isDataSame(this.state.imagesList, this.props.images)) {
      this.setState({
        imagesList: this.props.images,
      });
    }
  }
  render() {
    return (
      <div className="pexel--gallery">
        {this.state.imagesList?.map((image) => (
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
