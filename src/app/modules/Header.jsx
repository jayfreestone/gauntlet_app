import React from 'react';
import { Link } from 'react-router-dom';
import NewThreadFormContainer from './NewThreadFormContainer';

const Header = () => (
  <header>
    <h1><Link to="/">Fap Gauntlet</Link></h1>
    <NewThreadFormContainer />
  </header>
);

export default Header;

