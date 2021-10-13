import React from 'react';

interface ResultProps {
  shortDef: string[];
}

const Result = ({ shortDef }: ResultProps): JSX.Element => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '1em',
        padding: '1em'
      }}
    >
      <div style={{ fontWeight: 'bold', padding: '0.5em 0' }}>
        Definition
      </div>
      {shortDef.map((def, i) => {
        return (
          <li
            className='definition'
            key={'def' + i}
            style={{ padding: '0.2em 0' }}
          >
            {def}
          </li>
        );
      })}
    </div>
  );
};

export default Result;
