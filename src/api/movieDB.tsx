import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '79b3f4c2ae7ddb4fac853902c6b77211',
  },
});

export default movieDB;
