import axios from 'axios';

export const imgurSearch = (searchTerm, page) => {
  const query = `https://api.imgur.com/3/gallery/search/${page}/?q=${searchTerm}`;
  console.log(query);
  return axios(query, {
    headers: {
      authorization: `Client-ID ${process.env.REACT_APP_IMGUR_AUTH}`,
    },
  })
    .then(response => response.data)
    .catch(e => console.error(e));
};
