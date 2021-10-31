import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.imageSrc = props.src;
    this.figCaption = `Photograph by ${props.author}`;
    this.authorURL = props.authorURL;
  }
  render() {
    return (
      <figure className="pexel--gallery__image">
        <img src={this.imageSrc} alt={this.figCaption} />
        <figcaption>
          <a href={this.authorURL}>{this.figCaption}</a>
        </figcaption>
      </figure>
    );
  }
}

export default Image;
