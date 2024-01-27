import { Component } from 'react';
import style from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  handleClick = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { webformatURL, largeImageURL } = this.props.itemData;
    console.log('galleryItem->', largeImageURL);
    return (
      <>
        <li className={style.ImageGalleryItem}>
          <img src={webformatURL} alt="" onClick={this.handleClick} />
        </li>
        {this.state.showModal && (
          <Modal itemURL={largeImageURL} callback={this.handleClose} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
