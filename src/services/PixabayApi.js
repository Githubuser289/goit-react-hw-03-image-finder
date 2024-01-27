import axios from 'axios';

//   https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

async function retrieveImagesData(searchQuery, page) {
  const PER_PAGE = 12;
  const options = {
    method: 'get',
    url: 'https://pixabay.com/api/',
    params: {
      key: '40810721-4617741b248e6711ba03b05ba',
      q: `${searchQuery}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: `${page}`,
      per_page: `${PER_PAGE}`,
    },
  };

  const response = await axios(options);

  return response.data;
}

export default retrieveImagesData;
