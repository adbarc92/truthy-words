import React from 'react';

import './Result.css';

interface ResultProps {
  shortDef: string[];
  speechPart: string;
}

const Result = ({
  shortDef,
  speechPart
}: ResultProps): JSX.Element => {
  return (
    <div className='result-container'>
      <div className='result-header'>Definition</div>
      <div style={{ fontStyle: 'italic' }}>{speechPart}</div>
      <ul>
        {shortDef.map((def, i) => {
          return (
            <li className='definition' key={'def' + i}>
              {def}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;
