import React from 'react';

import { createDebounceFn } from '../utils';

interface SearchFormProps {
  setSearchTerm: (searchTerm: string) => void;
}

const SearchForm = ({
  setSearchTerm
}: SearchFormProps): JSX.Element => {
  const searchDebounce = createDebounceFn((term: string) => {
    if (term.length > 2) {
      setSearchTerm(term);
    } else {
      setSearchTerm('');
    }
  });

  return (
    <form style={{ textAlign: 'center', margin: '0.5em' }}>
      <label>
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
      </label>
    </form>
  );
};

export default SearchForm;
