import axios from 'axios';

export const imgurSearch = (searchTerm, page) => axios(`https://api.imgur.com/3/gallery/search/${page}/?q=${searchTerm}`, {
  headers: {
    authorization: `Client-ID ${process.env.REACT_APP_IMGUR_AUTH}`,
  },
})
  .then(response => response.data)
  .catch(e => console.error(e));
