import React, { useState } from 'react';

import createDebounceFn from '../utils';

const SearchBar = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState();

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
