import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from '../SearchBar';
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
  const [speechPart, setSpeechPart] = useState('');

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
            setSpeechPart(word.fl);
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
    <div id='app-container'>
      <Header title={'Truthy!'} />
      <div className='search-container'>
        <SearchBar
          setSearchTerm={setSearchTerm}
          setLoading={setLoading}
          loading={loading}
          searchTerm={searchTerm}
          wordIsValid={wordIsValid}
        />
      </div>
      {wordIsValid && (
        <Result shortDef={shortDef} speechPart={speechPart} />
      )}
      {error && <div>{error}</div>}
    </div>
  );
};
export default App;
