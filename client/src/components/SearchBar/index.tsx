import React from 'react';

import LoadingSpinner from '../LoadingSpinner';
import WordStatus from '../WordStatus';

import { createDebounceFn } from '../../utils';

import './SearchBar.css';

interface SearchBarProps {
  setSearchTerm: (searchTerm: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  searchTerm: string;
  wordIsValid: boolean | null;
}

const SearchBar = ({
  setSearchTerm,
  loading,
  searchTerm,
  wordIsValid,
  setLoading
}: SearchBarProps): JSX.Element => {
  const searchDebounce = createDebounceFn((term: string) => {
    if (term.length > 2) {
      setSearchTerm(term);
      setLoading(true);
    } else {
      setSearchTerm('');
    }
  }, 300);

  return (
    <>
      <input
        className='search-input'
        onChange={(e) => {
          searchDebounce(e.target.value);
        }}
        placeholder='Enter a word...'
        type='text'
        name='word'
      />
      <i className='input-icon'>
        {loading ? (
          <LoadingSpinner />
        ) : searchTerm !== '' && wordIsValid !== null ? (
          <WordStatus wordValidity={wordIsValid} />
        ) : (
          <> </>
        )}
      </i>
    </>
  );
};

export default SearchBar;
