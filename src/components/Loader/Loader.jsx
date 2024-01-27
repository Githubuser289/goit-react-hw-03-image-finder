import { Component } from 'react';
import { Circles } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  }
}

export default Loader;
