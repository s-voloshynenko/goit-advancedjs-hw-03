import axios from 'axios';

const API_KEY = import.meta.env.VITE_PIXABAY_KEY;

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get('', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
