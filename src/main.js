import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const formEl = document.querySelector('.form');

const toastOptions = {
  position: 'topRight',
  messageColor: '#ffffff',
  iconColor: '#ffffff',
  maxWidth: 432,
};

function showError(message) {
  iziToast.error({ ...toastOptions, message, backgroundColor: '#ef4040' });
}

function showWarning(message) {
  iziToast.warning({ ...toastOptions, message, backgroundColor: '#ffa000' });
}

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    showWarning('Please enter a search query.');
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      showError(`Something went wrong: ${error.message}`);
    })
    .finally(() => {
      hideLoader();
    });
}
