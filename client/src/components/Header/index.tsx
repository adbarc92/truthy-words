import React from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
}

const Header = ({ title }) => {
  return <div>{title}</div>;
};

export default Header;
