import React from 'react';

import LoadingSpinner from './LoadingSpinner';
import WordStatus from './WordStatus';

import { createDebounceFn } from '../utils';

interface SearchFormProps {
  setSearchTerm: (searchTerm: string) => void;
  loading: boolean;
  searchTerm: string;
  wordIsValid: boolean | null;
}

const SearchForm = ({
  setSearchTerm,
  loading,
  searchTerm,
  wordIsValid
}: SearchFormProps): JSX.Element => {
  const searchDebounce = createDebounceFn((term: string) => {
    if (term.length > 2) {
      setSearchTerm(term);
    } else {
      setSearchTerm('');
    }
  });

  return (
    <>
      <input
        style={{
          padding: '1em',
          borderRadius: '2em',
          width: '14em',
          border: '0.2em solid #000'
        }}
        onChange={(e) => {
          searchDebounce(e.target.value);
        }}
        placeholder='Try Me!'
        type='text'
        name='word'
      />
      <i
        style={{
          position: 'absolute',
          transform: 'translate(-2.5em, 0.75em)'
        }}
      >
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

export default SearchForm;
