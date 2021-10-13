import React from 'react';

interface ResultProps {
  shortDef: string[];
}

const Result = ({ shortDef }: ResultProps): JSX.Element => {
  return (
    <>
      <div>Definitions</div>
      {shortDef.map((def, i) => {
        return <span key={'def' + i}>{def}</span>;
      })}
    </>
  );
};

export default Result;
