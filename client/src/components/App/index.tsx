import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchForm from '../SearchForm';
import Result from '../Result';

import Header from '../Header';

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
    <div style={{ marginTop: '15em', maxWidth: '25em' }}>
      {error && <div>{error}</div>}
      <>
        <Header title={'Truthy!'} />
        <div
          className='search-container'
          style={{
            textAlign: 'center',
            margin: '0.5em',
            position: 'relative'
          }}
        >
          <SearchForm
            setSearchTerm={setSearchTerm}
            loading={loading}
            searchTerm={searchTerm}
            wordIsValid={wordIsValid}
          />
        </div>
        {wordIsValid && <Result shortDef={shortDef} />}
      </>
    </div>
  );
};
export default App;
