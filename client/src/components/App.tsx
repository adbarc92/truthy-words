import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import Result from './Result';
import LoadingSpinner from './LoadingSpinner';
import { getWordValidity } from '../utils';

const App = (): JSX.Element => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shortDef, setShortDef] = useState(['']);
  const [searchTerm, setSearchTerm] = useState('');
  const [wordIsValid, setWordIsValid] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    axios
      .get(`/${searchTerm}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.error(e);
        setError(e);
      });
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <SearchForm
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <Result shortDef={shortDef} />
        </>
      )}
    </div>
  );
};
export default App;
