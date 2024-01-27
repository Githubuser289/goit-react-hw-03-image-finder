import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

class Button extends Component {
  render() {
    return (
      <div className={style.Div}>
        <button className={style.Button} onClick={this.props.onClickCallback}>
          Load more
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  onClickCallback: PropTypes.func.isRequired,
};

export default Button;
