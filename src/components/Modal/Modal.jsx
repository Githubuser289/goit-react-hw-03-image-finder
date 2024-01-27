import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.callback();
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.callback();
    }
  };

  render() {
    const largeImageURL = this.props.itemURL;
    return (
      <div className={style.Overlay} onClick={this.handleOverlayClick}>
        <div className={style.Modal}>
          <img src={largeImageURL} alt="enlarged photography" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  itemURL: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Modal;
