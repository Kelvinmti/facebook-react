import React from 'react';
import './App.css';

import Header from './components/Header';
import PostList from './components/PostList';

const App = () => {
  return (
    <div id="container">
      <Header />
      <PostList />
    </div>
  );
}

export default App;