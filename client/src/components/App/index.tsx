import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchForm from '../SearchForm';
import Result from '../Result';
import LoadingSpinner from '../LoadingSpinner';
import Header from '../Header';
import WordStatus from '../WordStatus';

import './App.css';

import { getWordValidity } from '../../utils';
import { MerriamWebsterResponse } from '../../types';

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
          console.log('word:', word);
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
    <div style={{ marginTop: '15em' }}>
      {error && <div>{error}</div>}
      <>
        <Header title={'Truthy!'} />
        <div>
          <SearchForm setSearchTerm={setSearchTerm} />
          {loading ? (
            <LoadingSpinner />
          ) : searchTerm !== '' && wordIsValid !== null ? (
            <WordStatus wordValidity={wordIsValid} />
          ) : (
            <> </>
          )}
        </div>
        {wordIsValid && <Result shortDef={shortDef} />}
      </>
    </div>
  );
};
export default App;
