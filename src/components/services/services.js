import axios from 'axios';
// import { abortController } from './../App';

export const AxiosApiService = async (query, page, abortController) => {
  const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=30802386-ea58133b3015dc71d1fd472a7&image_type=photo&orientation=horizontal&per_page=12`;

  const response = await axios.get(url, { signal: abortController.signal });

  return response.data;
};