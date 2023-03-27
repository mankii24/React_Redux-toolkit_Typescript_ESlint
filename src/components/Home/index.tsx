import React, { type FC } from 'react';
import { Link } from 'react-router-dom';
import Counter from 'components/Counter';

const Home: FC = () => (
  <div>
    <h1>Tsg employee repository</h1>
    <h2>This is the home page</h2>
    <Link to="about">Click to view our about page</Link>
    <Counter />
  </div>
);

export default Home;
