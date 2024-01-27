import { Component } from 'react';
import retrieveImagesData from 'services/PixabayApi';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Loader from './Loader/Loader';

const IMAGES_PER_PAGE = 12;
let counter = 0;

class App extends Component {
  state = {
    query: '',
    page: 1,
    imagesData: [],
    totalHits: 0,
    areImages: false,
    isLoading: false,
    error: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.getImagesData();
      console.log('updating...');
    }
  }

  async getImagesData() {
    let dataList = [];
    let flag = this.state.areImages;
    if (this.state.page === 1) flag = true;
    try {
      this.setState({ isLoading: true });
      const response = await retrieveImagesData(
        this.state.query,
        this.state.page
      );
      response.hits.map(item => {
        dataList.push({
          id: item.id,
          webformatURL: item.webformatURL,
          largeImageURL: item.largeImageURL,
        });
        return dataList;
      });
      this.setState(state => ({
        imagesData: [...state.imagesData, ...dataList],
        areImages: flag,
        totalHits: response.totalHits,
      }));
    } catch (error) {
      this.setState({ error: `${error.code}: ${error.message}` });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleClick = () => {
    console.log('Load more - clicked');
    const nrtotpag = Math.floor(this.state.totalHits / IMAGES_PER_PAGE);
    let page = this.state.page;
    page++;
    let flag;
    page === nrtotpag ? (flag = false) : (flag = true);
    this.setState({ page: page, areImages: flag });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const txt = evt.target[1].value;
    if (txt === '') return;
    this.setState({ query: txt });
    document.getElementsByTagName('form')[0].reset();
  };

  render() {
    const { page, imagesData, areImages, totalHits, isLoading, error } =
      this.state;
    counter++;
    console.log('counter=', counter, '   totalHits=', totalHits);
    return (
      <>
        <Searchbar submitCallback={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery data={imagesData} />
        {areImages ? <Button onClickCallback={this.handleClick} /> : null}
        {!areImages && page > 1 ? (
          <p>
            <br /> You have seen all the images.
          </p>
        ) : null}
      </>
    );
  }
}

export default App;
