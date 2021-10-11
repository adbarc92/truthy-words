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
    <form>
      <label>
        Word:
        <input
          onChange={(e) => {
            searchDebounce(e.target.value);
          }}
          type='text'
          name='word'
        />
      </label>
    </form>
  );
};

export default SearchForm;
