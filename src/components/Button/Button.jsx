import { Component } from 'react';
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

export default Button;
