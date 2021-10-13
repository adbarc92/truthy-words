import React from 'react';

import LoadingSpinner from '../LoadingSpinner';
import WordStatus from '../WordStatus';

import { createDebounceFn } from '../../utils';

import './SearchBar.css';

interface SearchBarProps {
  setSearchTerm: (searchTerm: string) => void;
  loading: boolean;
  searchTerm: string;
  wordIsValid: boolean | null;
}

const SearchBar = ({
  setSearchTerm,
  loading,
  searchTerm,
  wordIsValid
}: SearchBarProps): JSX.Element => {
  const searchDebounce = createDebounceFn((term: string) => {
    if (term.length > 2) {
      setSearchTerm(term);
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
        placeholder='Try Me!'
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
