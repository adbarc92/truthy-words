import React, { useState } from 'react';

interface ResultProps {
  shortdef: string[];
}

const Result = ({ shortdef }: ResultProps): JSX.Element => {
  return (
    <div>
      <div>Definitions</div>
      {shortdef.map((def, i) => {
        return <span key={'def' + i}>{def}</span>;
      })}
    </div>
  );
};

export default Result;
