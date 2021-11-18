import React from 'react';
import Users from './Users/UsersList';
import Posts from './Posts/Post';
import Albums from './Albums/Albums'

function App() {
  return (
    <div className='container'>
      <Users/>
      <Posts/>
      <Albums/>
      </div>
  );
}

export default App;
