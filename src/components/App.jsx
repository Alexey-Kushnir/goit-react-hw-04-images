import React, { useState, useEffect } from 'react';
import { AxiosApiService } from './services/services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    const abortController = new AbortController();
    const getItems = async () => {
      try {
        setIsLoading(true);
        const responseData = await AxiosApiService(
          query,
          page,
          abortController
        );
        if (responseData.totalHits < 1) {
          toast('Nothing found!');
          setIsLoading(false);
          return;
        }
        const hits = responseData.hits.length;
        setTotalHits(hits);

        const filteredData = responseData.hits.map(item => {
          const { id, webformatURL, largeImageURL } = item;
          const itemData = { id, webformatURL, largeImageURL };
          return itemData;
        });
        setItems(prevState => [...prevState, ...filteredData]);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        console.log(`IsError: ${isError}, ${error}`);
      }
    };
    getItems();

    return () => abortController.abort();
  }, [setItems, page, query, isError]);

  const handleSubmit = inputValue => {
    if (inputValue === '') {
      toast('Please enter your search term');
      return;
    }

    if (items.length < 1 && inputValue === query) {
      toast('Nothing found!');
      return;
    }

    if (inputValue === query) {
      toast('Photos have been found');
      return;
    }

    setPage(1);
    setQuery(inputValue);
    setItems([]);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      <Searchbar onSubmit={handleSubmit} />
      <ToastContainer />
      {items.length > 0 && <ImageGallery items={items} />}
      {isLoading && <Loader />}
      {items.length > 0 && totalHits - 11 >= 1 && <Button onClick={loadMore} />}
    </div>
  );
};
