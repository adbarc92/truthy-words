import React from 'react';
import Checkmark from './Checkmark';
import Crossmark from './Crossmark';

interface WordStatusProps {
  wordValidity: boolean;
}

const WordStatus = ({
  wordValidity
}: WordStatusProps): JSX.Element => {
  switch (wordValidity) {
    case true:
      return <Checkmark />;
    case false:
      return <Crossmark />;
    default:
      return <></>;
  }
};

export default WordStatus;
