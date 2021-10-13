// SRC: https://game-icons.net/1x1/lorc/cross-mark.html

import React from 'react';

const Crossmark = (): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      style={{ height: '25px', width: 'auto' }}
    >
      <circle
        cx='256'
        cy='256'
        r='256'
        fill='#d0021b'
        fillOpacity='1'
      ></circle>
      <g transform='translate(0,0)'>
        <path
          d='M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240 240-107.45 240-240S388.55 16 256 16zm0 60c99.41 0 180 80.59 180 180s-80.59 180-180 180S76 355.41 76 256 156.59 76 256 76zm-80.625 60c-.97-.005-2.006.112-3.063.313v-.032c-18.297 3.436-45.264 34.743-33.375 46.626l73.157 73.125-73.156 73.126c-14.63 14.625 29.275 58.534 43.906 43.906L256 299.906l73.156 73.156c14.63 14.628 58.537-29.28 43.906-43.906l-73.156-73.125 73.156-73.124c14.63-14.625-29.275-58.5-43.906-43.875L256 212.157l-73.156-73.125c-2.06-2.046-4.56-3.015-7.47-3.03z'
          fill='#fff'
          fillOpacity='1'
        ></path>
      </g>
    </svg>
  );
};

export default Crossmark;
