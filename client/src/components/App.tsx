import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import Result from './Result';
import LoadingSpinner from './LoadingSpinner';
import { getWordValidity } from '../utils';

import { MerriamWebsterResponse } from '../types';

const App = (): JSX.Element => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shortDef, setShortDef] = useState(['']);
  const [searchTerm, setSearchTerm] = useState('');
  const [wordIsValid, setWordIsValid] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    if (searchTerm !== '') {
      axios
        .get<MerriamWebsterResponse>(`api/${searchTerm}`)
        .then((res) => {
          const word = res.data[0];
          if (getWordValidity(word)) {
            setWordIsValid(true);
            setShortDef(word.shortdef);
          } else {
            setWordIsValid(false);
          }
          setLoading(false);
        })
        .catch((e) => {
          console.error(e);
          setError(e);
        });
    } else {
      setWordIsValid(null);
      setLoading(false);
    }
  }, [searchTerm]);

  return (
    <div>
      {error && <div>{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <SearchForm setSearchTerm={setSearchTerm} />
          {wordIsValid && <Result shortDef={shortDef} />}
        </>
      )}
    </div>
  );
};
export default App;
