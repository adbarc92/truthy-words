import React from 'react';

import './Result.css';

interface ResultProps {
  shortDef: string[];
}

const Result = ({ shortDef }: ResultProps): JSX.Element => {
  return (
    <div className='result-container'>
      <div className='result-header'>Definition</div>
      {shortDef.map((def, i) => {
        return (
          <li className='definition' key={'def' + i}>
            {def}
          </li>
        );
      })}
    </div>
  );
};

export default Result;
