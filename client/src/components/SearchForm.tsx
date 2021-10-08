import React, { useState } from 'react';

import { createDebounceFn } from '../utils';

interface SearchFormProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const SearchForm = ({
  searchTerm,
  setSearchTerm
}: SearchFormProps): JSX.Element => {
  const searchDebounce = createDebounceFn((term) => {
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
        <input type='text' name='word' />
      </label>
      <input />
    </form>
  );
};

export default SearchForm;
