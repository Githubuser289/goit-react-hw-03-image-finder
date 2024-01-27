import { Component } from 'react';
import { nanoid } from 'nanoid';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    if (this.props.data.length === 0) return;
    return (
      <ul className={style.ImageGallery}>
        {this.props.data.map(item => (
          <ImageGalleryItem key={nanoid()} itemData={item} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
