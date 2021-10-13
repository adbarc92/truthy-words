import React from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps): JSX.Element => {
  return <div className="header">{title}</div>;
};

export default Header;
