import React from 'react';

interface ResultProps {
  shortDef: string[];
}

const Result = ({ shortDef }: ResultProps): JSX.Element => {
  return (
    <div>
      <div>Definitions</div>
      {shortDef.map((def, i) => {
        return <span key={'def' + i}>{def}</span>;
      })}
    </div>
  );
};

export default Result;
